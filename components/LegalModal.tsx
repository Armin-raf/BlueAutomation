
import React from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string | null;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, activeTab }) => {
  if (!isOpen || !activeTab) return null;

  const content: Record<string, React.ReactNode> = {
    wissensdatenbanken: (
      <div className="space-y-6 text-slate-700">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b pb-4">Intelligente Wissensdatenbanken</h2>
        <div className="prose prose-slate max-w-none">
          <p>Wir verwandeln Ihre statischen Dokumente (PDFs, Handbücher, Wikis) in interaktive Wissensquellen. Ihre Mitarbeiter oder Kunden können dem System Fragen stellen und erhalten präzise Antworten auf Basis Ihrer internen Daten.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Semantische Suche:</strong> Erkennt den Kontext, nicht nur Schlagworte.</li>
            <li><strong>Automatisierte Updates:</strong> Das System lernt mit neuen Dokumenten mit.</li>
            <li><strong>Verschlüsselung:</strong> Alle Daten bleiben in Ihrer kontrollierten Umgebung.</li>
          </ul>
        </div>
      </div>
    ),
    produktionsassistenz: (
      <div className="space-y-6 text-slate-700">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b pb-4">KI in der Produktions-Assistenz</h2>
        <div className="prose prose-slate max-w-none">
          <p>Unsere KI-Agenten unterstützen direkt in der Werkhalle. Von der vorausschauenden Wartung bis hin zur automatisierten Fehlerdokumentation per Spracheingabe.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Hands-free Bedienung:</strong> Steuerung und Abfrage per Voice-Interface.</li>
            <li><strong>Fehleranalyse:</strong> Schnelle Identifikation von Maschinendefekten durch Mustererkennung.</li>
            <li><strong>Prozess-Optimierung:</strong> Vorschläge zur Effizienzsteigerung in Echtzeit.</li>
          </ul>
        </div>
      </div>
    ),
    sensibledaten: (
      <div className="space-y-6 text-slate-700">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b pb-4">Umgang mit sensiblen Daten</h2>
        <div className="prose prose-slate max-w-none">
          <p>Wir haben uns auf Branchen spezialisiert, die keine Kompromisse bei der Datensicherheit eingehen können (Recht, Medizin, Finanzen).</p>
          <p>Unsere Systeme nutzen Techniken wie PII-Anonymisierung und lokale LLM-Infrastrukturen, um sicherzustellen, dass keine vertraulichen Informationen in öffentliche Clouds gelangen.</p>
        </div>
      </div>
    ),
    airgapped: (
      <div className="space-y-6 text-slate-700">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b pb-4">Air-Gapped & Offline Betrieb</h2>
        <div className="prose prose-slate max-w-none">
          <p>Für maximale Sicherheit bieten wir "Air-Gapped" Lösungen an. Dabei läuft die gesamte KI-Infrastruktur auf Ihrer eigenen Hardware ohne jegliche Verbindung zum Internet.</p>
          <p>Ideal für kritische Infrastrukturen oder Unternehmen mit extremen Sicherheitsauflagen.</p>
        </div>
      </div>
    ),
    dsgvo: (
      <div className="space-y-6 text-slate-700">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b pb-4">DSGVO-Compliance Fokus</h2>
        <div className="prose prose-slate max-w-none">
          <p>Wir garantieren 100% Konformität mit der europäischen Datenschutz-Grundverordnung.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Serverstandorte ausschließlich in Deutschland.</li>
            <li>Keine Nutzung von Nutzerdaten zum Training öffentlicher Modelle.</li>
            <li>Vollständige Transparenz und Löschkonzepte.</li>
          </ul>
        </div>
      </div>
    ),
    lokaleintegration: (
      <div className="space-y-6 text-slate-700">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b pb-4">Lokale System-Integration</h2>
        <div className="prose prose-slate max-w-none">
          <p>Ein KI-Agent ist nur so gut wie seine Anbindung. Wir integrieren unsere Lösungen direkt in Ihre bestehende Software-Landschaft (SAP, Salesforce, Microsoft 365, etc.).</p>
          <p>Dabei setzen wir auf moderne API-Standards und sichere Schnittstellen, um einen reibungslosen Datenaustausch zu gewährleisten.</p>
        </div>
      </div>
    ),
    kontakt: (
      <div className="space-y-8 text-slate-700">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b pb-4">Kontakt</h2>
        <div className="prose prose-slate max-w-none">
          <p className="font-bold text-xl mb-4 text-slate-900">Amin Rafai | Blue Process</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">contact_support</span>
                Direktkontakt
              </h3>
              <p className="mb-2"><strong>Name:</strong> Amin Rafai</p>
              <p className="mb-2"><strong>E-Mail:</strong> herr.rafai@gmail.com</p>
              <p className="mb-2"><strong>Mobil:</strong> +49 176 4334 7838</p>
              <p className="mt-4 text-xs text-slate-400 font-medium italic">Erreichbar Mo-Fr: 09:00 - 18:00 Uhr</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">location_on</span>
                Büro Hildesheim
              </h3>
              <p>Annenstraße 29</p>
              <p>31134 Hildesheim</p>
              <p>Deutschland</p>
            </div>
          </div>
        </div>
      </div>
    ),
    impressum: (
      <div className="space-y-6 text-slate-700">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b pb-4">Impressum</h2>
        <div className="prose prose-slate max-w-none">
          <p className="font-bold">nach § 5 TMG</p>
          <p>
            Amin Rafai | Blue Process<br />
            Annenstraße 29, 31134 Hildesheim, Deutschland
          </p>
          <p>
            <strong>Kontakt:</strong><br />
            Telefon: +49 176 4334 7838<br />
            E-Mail: herr.rafai@gmail.com
          </p>
          <p><strong>Steuernummer:</strong> 43196274049</p>
          <p>
            <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
            Amin Rafai (Anschrift s.o.)
          </p>
          <p className="text-xs text-slate-400 mt-8 italic">Quelle Impressum: e-recht24.de</p>
        </div>
      </div>
    ),
    agb: (
      <div className="space-y-6 text-slate-700">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b pb-4">Allgemeine Geschäftsbedingungen (AGB)</h2>
        <div className="prose prose-slate max-w-none text-sm space-y-4">
          <p className="font-bold text-lg text-slate-900">Amin Rafai | Blue Process</p>
          
          <h3 className="text-xl font-bold text-slate-900">§ 1 Geltungsbereich</h3>
          <p>Diese AGB gelten für alle Verträge über KI-Dienstleistungen, Prozessautomatisierung und Beratung zwischen Amin Rafai | Blue Process (nachfolgend „Auftragnehmer“) und seinen Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt.</p>
          
          <h3 className="text-xl font-bold text-slate-900">§ 2 Leistungsumfang und Abnahme</h3>
          <p>Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot. Der Auftragnehmer schuldet die Einrichtung der Automatisierung nach bestem Wissen und Gewissen. Ein bestimmter wirtschaftlicher Erfolg wird nicht garantiert. Nach Fertigstellung der im Angebot beschriebenen Workflows ist der Kunde zur Abnahme verpflichtet. Die Abnahme gilt als erfolgt, wenn der Kunde nicht innerhalb von 7 Werktagen schriftlich Mängel rügt.</p>
          
          <h3 className="text-xl font-bold text-slate-900">§ 3 Besondere Bedingungen für KI-Leistungen</h3>
          <p>Der Kunde ist sich bewusst, dass KI-Modelle (wie z.B. Large Language Models) statistische Ergebnisse liefern. Der Auftragnehmer übernimmt keine Gewähr für die inhaltliche Richtigkeit, Vollständigkeit oder Logik der durch die KI generierten Texte, Daten oder Entscheidungen. Der Kunde ist verpflichtet, die durch die Automatisierung erzeugten Ergebnisse vor einer weiteren Verwendung (insbesondere bei Veröffentlichung oder Kundenkontakt) auf Richtigkeit zu prüfen. Der Auftragnehmer haftet nicht für Schäden, die durch Fehlentscheidungen einer KI oder durch „Halluzinationen“ des Modells entstehen.</p>
          
          <h3 className="text-xl font-bold text-slate-900">§ 4 Zahlungsbedingungen</h3>
          <p>Sofern im Angebot nicht anders vereinbart, sind Rechnungen sofort nach Erhalt ohne Abzug zahlbar. Der Auftragnehmer ist berechtigt, bei Projektstart eine Anzahlung in Höhe von 50 % der Angebotssumme zu verlangen. Die Arbeit beginnt erst nach Eingang der Anzahlung.</p>
          
          <h3 className="text-xl font-bold text-slate-900">§ 5 Haftungsbeschränkung</h3>
          <p>Der Auftragnehmer haftet nur für Schäden, die auf vorsätzlicher oder grob fahrlässiger Pflichtverletzung beruhen. Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten. In diesem Fall ist die Haftung auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt. Die Haftung für entgangenen Gewinn oder indirekte Folgeschäden ist ausgeschlossen.</p>
          
          <h3 className="text-xl font-bold text-slate-900">§ 6 Urheberrecht und Nutzungsrechte</h3>
          <p>An den erstellten KI-Agenten, Automatisierungs-Workflows und Skripten räumt der Auftragnehmer dem Kunden ein einfaches, zeitlich und räumlich unbegrenztes Nutzungsrecht für den eigenen Betrieb ein. Die Weitergabe, der Weiterverkauf oder die Unterlizenzierung der Workflows an Dritte ist ohne schriftliche Zustimmung des Auftragnehmers untersagt.</p>
        </div>
      </div>
    ),
    datenschutz: (
      <div className="space-y-8 text-slate-700">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b pb-4">Datenschutz</h2>
        
        <div className="prose prose-slate max-w-none text-sm space-y-6">
          <section>
            <h3 className="text-xl font-bold text-slate-900">1. Datenschutz auf einen Blick</h3>
            <p className="font-bold">Allgemeine Hinweise</p>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen oder unsere Dienstleistungen im Bereich der KI-Automatisierung in Anspruch nehmen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            <p className="font-bold">Datenerfassung auf dieser Website</p>
            <p>Wer ist verantwortlich für die Datenerfassung? Die Datenverarbeitung auf dieser Website und im Rahmen der angebotenen Dienstleistungen erfolgt durch den Websitebetreiber:</p>
            <p>
              Amin Rafai | Blue Process<br />
              Annenstraße 29, 31134 Hildesheim, Deutschland<br />
              E-Mail: herr.rafai@gmail.com<br />
              Telefon: +49 176 4334 7838
            </p>
            <p>Wie erfassen wir Ihre Daten? Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. per E-Mail oder Kontaktformular). Andere Daten werden automatisch durch unsere IT-Systeme erfasst (technische Daten wie IP-Adresse, Browser, Uhrzeit).</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900">2. Hosting und Infrastruktur</h3>
            <p>Wir hosten unsere Website, unsere Automatisierungs-Workflows sowie die dazugehörigen Datenbanken und Kundendaten bei folgendem Anbieter:<br />
            <strong>Hetzner Online GmbH</strong>, Industriestr. 25, 91710 Gunzenhausen, Deutschland.</p>
            <p>Serverstandort: Deutschland. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer sicheren und stabilen Bereitstellung unserer Dienste. Wir haben mit der Hetzner Online GmbH einen Vertrag über Auftragsverarbeitung (AVV) geschlossen, der garantiert, dass Ihre Daten streng weisungsgebunden und nach deutschem Datenschutzstandard verarbeitet werden.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900">3. Besonderheiten bei KI-Dienstleistungen</h3>
            <p>Im Rahmen unserer Automatisierungsprozesse setzen wir Künstliche Intelligenz ein. Die Verarbeitung erfolgt je nach individueller Vereinbarung (AVV) auf zwei Arten:</p>
            <p><strong>A. Lokale KI-Modelle</strong><br />Auf Wunsch werden Daten ausschließlich über lokale KI-Modelle verarbeitet, die auf unseren eigenen, in Deutschland gehosteten Servern (Hetzner) betrieben werden. Vorteil: 100% Datensouveränität. Kein Byte verlässt den deutschen Rechtsraum. Einschränkung: Diese Modelle sind in ihrer Rechenleistung und Komplexität im Vergleich zu großen KI-Anbietern begrenzt.</p>
            <p><strong>B. Ausländische KI-Modelle</strong><br />Sofern für die Aufgabe eine höhere Intelligenzleistung erforderlich ist und dies im AVV vereinbart wurde, werden spezialisierte ausländische KI-Modelle genutzt.<br />
            <strong>Datentransfer:</strong> Hierbei werden Daten an Server außerhalb der EU (meist USA) übertragen.<br />
            <strong>Schutzmaßnahmen:</strong> Die Übertragung erfolgt auf Grundlage von Standardvertragsklauseln der EU-Kommission bzw. des Data Privacy Frameworks. Wir konfigurieren diese Schnittstellen so „Zero Retention Policy“, dass Ihre Daten in der Regel nicht zum Training der Modelle verwendet werden.<br />
            <strong>Umfang:</strong> Es werden nur die Daten übertragen, die für die spezifische Anfrage (Prompt) zwingend erforderlich sind.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900">4. Pflichtinformationen und Rechte der Betroffenen</h3>
            <p><strong>Widerruf Ihrer Einwilligung</strong><br />Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.</p>
            <p><strong>Recht auf Auskunft, Löschung und Berichtigung</strong><br />Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.</p>
            <p><strong>Recht auf Einschränkung der Verarbeitung</strong><br />Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
            <p><strong>Beschwerderecht bei der Aufsichtsbehörde</strong><br />Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900">5. Automatisierungs-Workflows</h3>
            <p>Bei der Nutzung unserer Automatisierungslösungen werden Daten zwischen verschiedenen Anwendungen übertragen.<br />
            Zweck: Erfüllung des mit Ihnen geschlossenen Vertrages (Art. 6 Abs. 1 lit. b DSGVO).<br />
            Speicherung: Daten in Workflows werden nur so lange zwischengespeichert, wie es für die Ausführung der Automatisierung technisch notwendig ist.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900">6. Terminbuchung</h3>
            <p>Für die Online-Terminbuchung nutzen wir den Dienst Cal.eu (Cal.com, Inc., 155 11th Ave, New York, NY 10011, USA). Wenn Sie einen Termin über unsere Website buchen, werden die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse, Grund des Termins) an Cal.eu übertragen. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO oder Art. 6 Abs. 1 lit. b DSGVO. Wir haben mit Cal.eu die notwendigen datenschutzrechtlichen Vereinbarungen (DPA/SCCs) getroffen, um ein angemessenes Datenschutzniveau sicherzustellen.</p>
          </section>
        </div>
      </div>
    )
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-6 border-b border-slate-100 flex justify-end items-center bg-slate-50">
          <button 
            onClick={onClose} 
            className="size-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8 md:p-12">
          {content[activeTab] || <p>Inhalt nicht gefunden.</p>}
        </div>
        <div className="p-6 border-t border-slate-100 bg-slate-50 text-center">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
