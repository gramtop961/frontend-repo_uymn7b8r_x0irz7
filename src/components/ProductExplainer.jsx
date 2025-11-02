import React from 'react';
import { motion } from 'framer-motion';

const codeRequest = `POST https://api.bedug.dev/projects/otp/send\nContent-Type: application/json\n\n{
  "phone": "+1 555-0123"
}`;

const codeResponse = `{
  "status": "sent",
  "expires_in": 120,
  "request_id": "req_9f3a2c"
}`;

export default function ProductExplainer() {
  return (
    <section className="relative mx-auto -mt-10 w-full max-w-6xl px-6" aria-label="Product explainer">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur">
          <h3 className="mb-3 text-sm font-medium text-white/80">Prompt → Endpoints</h3>
          <div className="rounded-lg border border-white/10 bg-black/40 p-4">
            <label className="mb-2 block text-xs text-white/60">Describe your API</label>
            <div className="rounded-lg border border-white/10 bg-black/60 p-3 text-sm font-mono text-white/90">
              "Create OTP send & verify APIs with rate limits and 2 minute expiry"
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              {['POST /otp/send', 'POST /otp/verify', 'GET /otp/debug'].map((ep) => (
                <span key={ep} className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-emerald-200">
                  {ep}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur">
          <h3 className="mb-3 text-sm font-medium text-white/80">Live Console</h3>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-black/50 p-3">
              <p className="mb-2 text-xs text-white/60">Request</p>
              <pre className="overflow-auto rounded-md bg-black/60 p-3 text-xs leading-relaxed text-white/90">
                {codeRequest}
              </pre>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-3">
              <p className="mb-2 text-xs text-white/60">Response</p>
              <pre className="overflow-auto rounded-md bg-black/60 p-3 text-xs leading-relaxed text-emerald-200">
                {codeResponse}
              </pre>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
