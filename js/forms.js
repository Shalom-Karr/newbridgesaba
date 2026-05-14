// Centralized form submission for NewBridges ABA.
// All public forms POST to Web3Forms with this key. To migrate to JotForm
// (or another backend), swap the submitForm() body — every page calls this.
//
// The destination email is configured in the Web3Forms dashboard, not here.
// The access key is not a secret: it's rate-limited and only delivers to the
// inbox already verified for this account.

window.NB_FORMS = {
  WEB3FORMS_KEY: '5c6b047f-2d89-4b07-a23c-7fba75d85c02',

  // Submit a <form> element to Web3Forms. Returns { ok, message }.
  // Honeypot field name="botcheck" — if filled, drop silently as success.
  async submitForm(formEl, opts = {}) {
    const honey = formEl.querySelector('input[name="botcheck"]');
    if (honey && honey.value) return { ok: true, message: 'ok' };

    const data = new FormData(formEl);
    data.append('access_key', window.NB_FORMS.WEB3FORMS_KEY);
    if (opts.subject)   data.append('subject',   opts.subject);
    if (opts.fromName)  data.append('from_name', opts.fromName);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) return { ok: true, message: 'sent' };
      return { ok: false, message: json.message || 'Submission failed. Please try again.' };
    } catch (err) {
      console.error('Web3Forms error:', err);
      return { ok: false, message: 'Network error. Please try again.' };
    }
  },
};
