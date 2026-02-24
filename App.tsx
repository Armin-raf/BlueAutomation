
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Solutions from './components/Services';
import Security from './components/Security';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InfoModal from './components/LegalModal';
import { FlippingCard } from './components/ui/flipping-card';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeInfoTab, setActiveInfoTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const processSteps = [
    { 
      step: '01', 
      title: 'Analyse', 
      desc: 'Wir identifizieren Ihre profitabelsten KI-Use-Cases.',
      details: 'In einem Deep-Dive analysieren wir Ihre aktuellen Workflows, decken Ineffizienzen auf und berechnen das Einsparpotenzial durch KI-Integration.'
    },
    { 
      step: '02', 
      title: 'Konzeption', 
      desc: 'Individuelle Architektur für Ihre IT-Infrastruktur.',
      details: 'Wir wählen die optimalen Modelle (GPT, Claude, Llama) und definieren die Schnittstellen zu Ihren bestehenden Systemen (ERP, CRM).'
    },
    { 
      step: '03', 
      title: 'Integration', 
      desc: 'Fachgerechte Entwicklung & Systemanbindung.',
      details: 'Unsere Ingenieure bauen die Agenten und integrieren sie nahtlos in Ihre Prozesse. Wir kümmern uns um API-Anbindungen und Datenpipelines.'
    },
    { 
      step: '04', 
      title: 'Go-Live', 
      desc: 'Deployment, Monitoring & kontinuierliche Optimierung.',
      details: 'Nach dem Start überwachen wir die Performance und verfeinern die Logik der Agenten, um maximale Prozessqualität sicherzustellen.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        {/* Problem Section (Replaces Mission) */}
        <section className="py-24 bg-white px-6" id="mission">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-50 text-red-600 mb-6 text-xs font-bold uppercase tracking-wider">Der Status Quo</div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Manuelle Prozesse sind der unsichtbare Bremsklotz Ihres Wachstums.
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                In vielen Unternehmen binden repetitive Aufgaben wertvolle Experten-Kapazitäten. Manuelle Datenübertragung und Medienbrüche führen zu Fehlern, Zeitverlust und frustrierten Kunden.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Standard-Software ist oft zu starr. Wir lösen dieses Problem durch <strong>KI-Agenten</strong>, die wie digitale Mitarbeiter agieren: Sie verstehen Kontext, treffen Entscheidungen innerhalb Ihrer Leitplanken und arbeiten 24/7 fehlerfrei.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Hohe Kosten', desc: 'Teure Fachkräfte verschwenden Zeit mit Routine.', icon: 'payments' },
                { label: 'Fehleranfälligkeit', desc: 'Manuelle Datenpflege führt zwangsläufig zu Fehlern.', icon: 'error' },
                { label: 'Langsames Scaling', desc: 'Mehr Volumen erfordert bisher linear mehr Personal.', icon: 'trending_down' },
                { label: 'Wissenssilos', desc: 'Wichtige Infos sind in Mails und PDFs gefangen.', icon: 'inventory_2' }
              ].map((card, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                  <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined !text-sm">{card.icon}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{card.label}</h4>
                  <p className="text-xs text-slate-500 leading-normal">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Integrations />
        <Solutions />

        {/* Benefits Section */}
        <section className="py-24 bg-slate-900 text-white px-6" id="sectors">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Ihr messbarer Business-Mehrwert</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">KI ist kein Selbstzweck. Wir fokussieren uns auf harte KPIs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 'bis zu 70%', label: 'Zeitersparnis', desc: 'bei administrativen Prozessen.' },
                { value: '24/7', label: 'Verfügbarkeit', desc: 'ohne zusätzliche Schichtkosten.' },
                { value: '100%', label: 'Skalierbarkeit', desc: 'Wachstum ohne Personal-Engpass.' },
                { value: 'Null', label: 'Fehlerquote', desc: 'bei der Datenextraktion & Übertragung.' }
              ].map((benefit, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-black text-primary mb-2">{benefit.value}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{benefit.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Security />

        {/* Prozess Section */}
        <section className="py-24 bg-white px-6" id="process">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">So einfach ist die Zusammenarbeit</h2>
              <p className="text-slate-500 text-lg">In vier klaren Phasen zur produktiven KI-Lösung.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, i) => (
                <FlippingCard
                  key={i}
                  height={220}
                  frontContent={
                    <div className="flex flex-col h-full w-full p-8 relative overflow-hidden">
                      <span className="text-6xl font-black text-primary/10 absolute top-4 right-6 select-none leading-none">
                        {item.step}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900 relative z-10">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
                      <div className="mt-auto flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-widest">
                        Details ansehen <span className="material-symbols-outlined !text-[12px]">flip</span>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="flex flex-col h-full w-full p-8 bg-primary justify-center">
                      <p className="text-sm font-medium leading-relaxed text-white text-center">
                        {item.details}
                      </p>
                      <div className="mt-6 flex justify-center">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                          Schritt {item.step}
                        </div>
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer onInfoClick={setActiveInfoTab} />

      <InfoModal 
        isOpen={activeInfoTab !== null} 
        activeTab={activeInfoTab} 
        onClose={() => setActiveInfoTab(null)} 
      />
    </div>
  );
};

export default App;
