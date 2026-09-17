// Vercel serverless function — receives the "Request a Demo" modal and emails it via SendGrid.
// Env vars required: SENDGRID_API_KEY, SENDGRID_FROM_EMAIL (see _email.js).
const { esc, list, buildEmail, sendEmail } = require('./_email');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, employees, interests, preferredDay, preferredWindow } = req.body || {};

  if (!name || !email || !company) {
    return res.status(400).json({ error: 'Name, email, and company are required' });
  }

  const reachAt = [preferredDay, preferredWindow].filter(Boolean).map(esc).join(' &middot; ') || '&mdash;';

  const html = buildEmail({
    eyebrow: 'New demo request',
    title: 'Someone wants a demo',
    subtitle: `Requested from humankindtechnologies.com`,
    rows: [
      ['Company', esc(company)],
      ['Employees', employees ? esc(employees) : '&mdash;'],
      ['Name', esc(name)],
      ['Email', `<a href="mailto:${esc(email)}" style="color:#1D1D1F;text-decoration:underline;">${esc(email)}</a>`],
      ['Phone', phone ? `<a href="tel:${esc(phone)}" style="color:#1D1D1F;text-decoration:underline;">${esc(phone)}</a>` : '&mdash;'],
      ['Preferred time', reachAt],
      ['Interested in', list(interests)],
      ['Received', esc(new Date().toLocaleString('en-CA', { timeZone: 'America/Halifax', dateStyle: 'full', timeStyle: 'short' })) + ' (AT)'],
    ],
    replyTo: email,
    replyToName: name,
  });

  const result = await sendEmail({
    subject: `New demo request: ${company} (${name})`,
    html,
    replyTo: email,
    replyToName: name,
  });

  if (!result.ok) return res.status(result.status).json({ error: result.error });
  return res.status(200).json({ ok: true });
};
