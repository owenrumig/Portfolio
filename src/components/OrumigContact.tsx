import React, { useState } from 'react';
import { Copy, Check, Send, ExternalLink } from 'lucide-react';
import { ORUMIG_DATA } from '../data/orumigData';
import { ColorTheme } from '../theme/colorThemes';

interface OrumigContactProps {
  currentTheme: ColorTheme;
}

export const OrumigContact: React.FC<OrumigContactProps> = ({ currentTheme }) => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(ORUMIG_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white/80 backdrop-blur-xs scroll-mt-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span
            className={`font-bold uppercase tracking-widest text-sm mb-4 ${currentTheme.primaryText}`}
          >
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            CONNECT WITH ME
          </h2>
          <div className={`w-20 h-1.5 ${currentTheme.primaryBg} rounded-full`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Quick Direct Info */}
          <div className="md:col-span-5 space-y-6">
            <div
              className={`p-6 rounded-3xl ${currentTheme.accentBgLight} border ${currentTheme.accentBorder} space-y-4 shadow-xs`}
            >
              <h3 className="text-base font-bold text-slate-900">Direct Email</h3>
              <p className="text-xs text-slate-600">
                You can reach me directly via email for any inquiries:
              </p>
              <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-200">
                <span className="text-xs font-mono text-slate-800 truncate mr-2">
                  {ORUMIG_DATA.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className={`p-1.5 rounded-lg text-xs font-semibold ${currentTheme.primaryText} hover:bg-slate-50 transition-colors shrink-0`}
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={`mailto:${ORUMIG_DATA.email}`}
                className={`w-full py-2.5 px-4 ${currentTheme.primaryBg} text-white font-semibold rounded-full text-xs uppercase tracking-wider ${currentTheme.primaryHoverBg} transition-all flex items-center justify-center gap-1.5 shadow-xs`}
              >
                <span>Open Mail Client</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="md:col-span-7">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Send a Message</h3>

              {sent ? (
                <div
                  className={`p-6 rounded-2xl ${currentTheme.accentBgLight} border ${currentTheme.accentBorderLight} text-center space-y-2`}
                >
                  <Check className={`w-8 h-8 ${currentTheme.primaryText} mx-auto`} />
                  <div className="font-bold text-slate-900 text-sm">Thank you!</div>
                  <p className="text-xs text-slate-600">
                    Your message has been received. I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-slate-400 bg-slate-50/50 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-slate-400 bg-slate-50/50 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Write your note or question here..."
                      className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-slate-400 bg-slate-50/50 text-slate-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3.5 ${currentTheme.primaryBg} text-white font-bold text-xs uppercase tracking-widest rounded-full ${currentTheme.primaryHoverBg} hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer`}
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
