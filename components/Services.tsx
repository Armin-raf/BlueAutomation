import React from 'react';
import HighlightCard from './ui/highlight-card';
import { UserCheck, Zap, Database, Mic } from 'lucide-react';

const Solutions: React.FC = () => {
  const items = [
    {
      icon: <UserCheck className="w-8 h-8 text-white" />,
      title: 'Kundenservice & Support',
      description: [
        'Automatisierte Ticket-Klärung,',
        'Intelligente Mail-Vorsortierung,',
        '24/7 Support ohne Wartezeiten'
      ],
      link: '#contact'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Interne Workflows',
      description: [
        'Beschleunigung von Freigaben,',
        'Automatisierte Datenübertragung,',
        'Eliminierung von Medienbrüchen'
      ],
      link: '#contact'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'Datenanalyse & BI',
      description: [
        'KI-gestützte Report-Erstellung,',
        'Echtzeit-Trendanalyse,',
        'Entscheidungsvorbereitung'
      ],
      link: '#contact'
    },
    {
      icon: <Mic className="w-8 h-8 text-white" />,
      title: 'Voice & Terminierung',
      description: [
        'KI-gestützte Telefonassistenz,',
        'Autonome Terminbuchung,',
        'Auftragsannahme per Voice'
      ],
      link: '#contact'
    },
  ];

  return (
    <section className="py-24 bg-white px-6 border-y border-slate-100" id="solutions">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-primary mb-6 text-xs font-bold uppercase tracking-wider">Lösungen & Use Cases</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">KI-Agenten für echte Business-Prozesse</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Wir entwickeln hochperformante digitale Mitarbeiter auf Basis modernster LLMs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <HighlightCard 
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;