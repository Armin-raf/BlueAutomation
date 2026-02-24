
import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    anliegen: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const WEBHOOK_URL = 'https://hypobranchial-inez-nonmonogamous.ngrok-free.dev/webhook/a02a2d3c-7327-4845-a0ec-f649db17a272';

  useEffect(() => {
    // Cal.com initialization logic
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window as any, "https://app.cal.eu/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    if (Cal) {
      Cal("init", "30min", { origin: "https://app.cal.eu" });
      Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true", "theme": "light" },
        calLink: "amin-rafai-rmrhre/30min",
      });
      Cal.ns["30min"]("ui", { "theme": "light", "hideEventTypeDetails": false, "layout": "month_view" });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          anliegen: formData.anliegen,
          source: 'Website Schnellanfrage',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', anliegen: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-100" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-16">
          {/* Header & Intro Section */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Machen Sie Ihr Unternehmen <br /><span className="text-primary">KI-bereit.</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, welcher Prozess in Ihrem Unternehmen als Erstes automatisiert werden sollte. Unverbindlich, professionell und ehrlich.
            </p>
          </div>

          {/* Calendar Section */}
          <div className="w-full">
            <div className="rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl bg-white ring-1 ring-primary/5">
              <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary !text-3xl">calendar_month</span>
                    Termin direkt buchen
                  </h4>
                  <p className="text-slate-500 mt-1">Wählen Sie einen passenden Slot für unser Erstgespräch.</p>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-2xl text-primary">
                  <span className="material-symbols-outlined !text-xl">analytics</span>
                  <span className="text-sm font-bold uppercase tracking-wider">Strategieberatung</span>
                </div>
              </div>
              <div className="bg-white min-h-[650px]">
                <div 
                  style={{ width: '100%', height: '100%', overflow: 'scroll' }} 
                  id="my-cal-inline-30min"
                ></div>
              </div>
              <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">DSGVO-konforme Terminbuchung via Cal.eu</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto w-full">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden">
              {status === 'success' && (
                <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
                  <div className="size-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined !text-4xl">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Anfrage erfolgreich!</h3>
                  <p className="text-slate-600">Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-primary font-bold hover:underline"
                  >
                    Neue Nachricht senden
                  </button>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Schnellanfrage</h3>
                <p className="text-slate-500">Haben Sie eine spezifische Frage? Schreiben Sie uns direkt.</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none bg-slate-50/50" 
                      placeholder="Vorname Nachname"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">E-Mail</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none bg-slate-50/50" 
                      placeholder="name@firma.de"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Anliegen</label>
                  <textarea 
                    name="anliegen"
                    required
                    rows={4}
                    value={formData.anliegen}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none bg-slate-50/50" 
                    placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihren Prozess..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="size-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      Anfrage absenden
                      <span className="material-symbols-outlined">send</span>
                    </>
                  )}
                </button>
                
                {status === 'error' && (
                  <p className="text-center text-sm text-red-500 font-bold animate-pulse">
                    Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
                  </p>
                )}
                
                <p className="text-center text-xs text-slate-400 font-medium">
                  Wir antworten in der Regel innerhalb von 24 Stunden. Ihre Daten sind durch TLS 1.3 geschützt.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
