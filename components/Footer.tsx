
import React from 'react';

interface FooterProps {
  onInfoClick?: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onInfoClick }) => {
  return (
    <footer className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary !text-3xl">smart_toy</span>
            <h2 className="text-2xl font-bold tracking-tight text-white">Blue Process</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Spezialisierte KI-Agentur für B2B-Unternehmen. Wir automatisieren Geschäftsprozesse mit höchstem Anspruch an Technologie und Sicherheit.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Lösungen</h4>
          <button onClick={() => onInfoClick?.('wissensdatenbanken')} className="text-sm text-left text-slate-400 hover:text-white transition-colors">Wissensdatenbanken</button>
          <button onClick={() => onInfoClick?.('produktionsassistenz')} className="text-sm text-left text-slate-400 hover:text-white transition-colors">Produktions-Assistenz</button>
          <button onClick={() => onInfoClick?.('sensibledaten')} className="text-sm text-left text-slate-400 hover:text-white transition-colors">Sensible Daten</button>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Sicherheit</h4>
          <button onClick={() => onInfoClick?.('airgapped')} className="text-sm text-left text-slate-400 hover:text-white transition-colors">Air-Gapped Betrieb</button>
          <button onClick={() => onInfoClick?.('dsgvo')} className="text-sm text-left text-slate-400 hover:text-white transition-colors">DSGVO-Compliance</button>
          <button onClick={() => onInfoClick?.('lokaleintegration')} className="text-sm text-left text-slate-400 hover:text-white transition-colors">Lokale Integration</button>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Unternehmen</h4>
          <button onClick={() => onInfoClick?.('kontakt')} className="text-sm text-left text-slate-400 hover:text-white transition-colors">Kontakt</button>
          <button onClick={() => onInfoClick?.('impressum')} className="text-sm text-left text-slate-400 hover:text-white transition-colors">Impressum</button>
          <button onClick={() => onInfoClick?.('datenschutz')} className="text-sm text-left text-slate-400 hover:text-white transition-colors">Datenschutz</button>
          <button onClick={() => onInfoClick?.('agb')} className="text-sm text-left text-slate-400 hover:text-white transition-colors">AGB</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500">
          © 2026 Blue ChatBot
        </p>
        <div className="flex gap-6">
          <a 
            className="text-slate-500 hover:text-primary transition-colors text-sm font-bold" 
            href="https://x.com/aminrafaiai" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            X
          </a>
          <a 
            className="text-slate-500 hover:text-primary transition-colors text-sm font-bold" 
            href="https://m.youtube.com/@BlueProcess-i8f#bottom-sheet" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a 
            className="text-slate-500 hover:text-primary transition-colors text-sm font-bold" 
            href="https://www.linkedin.com/company/blueprocess/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
