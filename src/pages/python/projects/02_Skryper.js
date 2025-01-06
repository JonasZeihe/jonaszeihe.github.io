import React, { useState } from 'react';
import {
  HeroWrapper,
  SectionWrapper,
  MediaDisplay,
  Typography,
  HighlightText,
  ListComponent,
  Badge,
  Button,
  Lightbox,
} from '../../../utils/sharedComponents';
import SkryperLogo from '../../../assets/images/Projects/skryper_logo.png';

export default function Skryper() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Features von Skryper
  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          📂 <HighlightText>Rekursive Verzeichnisscans:</HighlightText> Skryper
          analysiert komplette Projektverzeichnisse und erzeugt transparente
          Baumstrukturen.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          🔍 <HighlightText>.gitignore-Compliance:</HighlightText> Ignorierte
          Dateien und Verzeichnisse werden automatisch ausgeschlossen, um die
          Übersichtlichkeit zu maximieren.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          🛠️ <HighlightText>Anpassbare Regeln:</HighlightText> Erstelle
          benutzerdefinierte Filter, um spezifische Verzeichnisse ein- oder
          auszuschließen.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          📋 <HighlightText>Klare Textausgaben:</HighlightText> Erstelle lesbare
          und detaillierte Baumstrukturen, ideal für Dokumentationen und
          Refactorings.
        </>
      ),
    },
    {
      id: 'feature-5',
      content: (
        <>
          🚀 <HighlightText>Hohe Testabdeckung:</HighlightText> Zuverlässigkeit
          durch rigoroses Test-Driven Development und sauberen, wartbaren Code.
        </>
      ),
    },
    {
      id: 'feature-6',
      content: (
        <>
          ⚙️ <HighlightText>Modularität und Erweiterbarkeit:</HighlightText>{' '}
          Einfach anpassbar für neue Dateiformate und komplexere Strukturen.
        </>
      ),
    },
  ];

  // Badges für Technologie-Highlights
  const badges = [
    { label: 'Python 3.10+', icon: 'FaPython', variant: 'primary' },
    { label: '.gitignore Support', icon: 'FaShieldAlt', variant: 'accent' },
    { label: 'Modular Design', icon: 'FaCogs', variant: 'success' },
    { label: 'CLI Tool', icon: 'FaTerminal', variant: 'warning' },
    { label: 'Clean Code', icon: 'FaCode', variant: 'secondary' },
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <HeroWrapper gradient="primaryToSecondary">
        <Typography variant="h1" align="center">
          📂 <HighlightText>Skryper</HighlightText> – Projektstrukturen im Fokus
        </Typography>
        <MediaDisplay
          media={[{ type: 'image', src: SkryperLogo, alt: 'Skryper Logo' }]}
          onClick={() => setLightboxOpen(true)}
        />
        <Typography
          variant="body"
          align="center"
          color="neutral.lightest"
          style={{ marginTop: '1rem' }}
        >
          Mit <HighlightText>Skryper</HighlightText> bringst du Ordnung in große
          und komplexe Verzeichnisstrukturen. Ob für Refactorings,
          Dokumentationen oder einfach mehr Übersichtlichkeit – Skryper ist dein
          Werkzeug der Wahl.
        </Typography>
      </HeroWrapper>

      {/* Einführung */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="primary.dark">
          Warum <HighlightText>Skryper</HighlightText>?
        </Typography>
        <Typography variant="body" align="center" color="neutral.main">
          Softwareprojekte wachsen schnell, und mit ihnen auch ihre
          Verzeichnisstrukturen. Skryper analysiert diese rekursiv,
          berücksichtigt `.gitignore`-Regeln und erstellt klare, lesbare
          Baumstrukturen. Entwickler profitieren von höherer Effizienz, besserer
          Dokumentation und einem Werkzeug, das speziell für die Bedürfnisse
          moderner Projekte entwickelt wurde.
        </Typography>
        <Typography variant="body" align="center" style={{ marginTop: '1rem' }}>
          Mit modernster Python-Technologie, intuitiver Bedienung und modularer
          Architektur ist Skryper der perfekte Begleiter für Projekte, die Wert
          auf <HighlightText>Qualität</HighlightText> und
          <HighlightText>Transparenz</HighlightText> legen.
        </Typography>
      </SectionWrapper>

      {/* Vision */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h3" align="center" color="accent.dark">
          🌍 Die Vision hinter <HighlightText>Skryper</HighlightText>
        </Typography>
        <Typography variant="body" align="center">
          <HighlightText>Technische Vision:</HighlightText> Skryper soll
          Plattformunabhängigkeit und Unterstützung für zusätzliche
          Ignorierformate wie `.dockerignore` bieten.
        </Typography>
        <Typography
          variant="body"
          align="center"
          style={{ marginTop: '0.5rem' }}
        >
          <HighlightText>KI-gestützte Vision:</HighlightText> Perspektivisch
          wird Skryper die Nutzung von Künstlicher Intelligenz ermöglichen, um
          Verzeichnisse noch effizienter zu navigieren und zu verwalten.
        </Typography>
      </SectionWrapper>

      {/* Aktueller Stand */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h3" align="center" color="primary.dark">
          🚦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center">
          <HighlightText>Status:</HighlightText> Stabil und einsatzbereit mit
          allen Kernfunktionen.
        </Typography>
        <Typography
          variant="body"
          align="center"
          style={{ marginTop: '0.5rem' }}
        >
          <HighlightText>Funktionalitäten:</HighlightText> Präzise
          Verzeichnisscans, `.gitignore`-Compliance und benutzerdefinierte
          Filterregeln. Logging und Baumstruktur-Generierung runden das Paket
          ab.
        </Typography>
      </SectionWrapper>

      {/* Zukunftsaussichten */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h3" align="center" color="neutral.dark">
          🔮 Zukunft von <HighlightText>Skryper</HighlightText>
        </Typography>
        <Typography variant="body" align="center">
          Geplante Features umfassen plattformübergreifende Unterstützung für
          Linux und macOS, erweiterte Logging-Funktionen und
          Performance-Optimierungen für große Verzeichnisse.
        </Typography>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="neutral.main">
          🔧 Funktionen von <HighlightText>Skryper</HighlightText>
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      {/* Badges */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h2" align="center" color="neutral.dark">
          🚀 Technologien hinter <HighlightText>Skryper</HighlightText>
        </Typography>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          {badges.map(({ label, icon, variant }) => (
            <Badge key={label} label={label} icon={icon} variant={variant} />
          ))}
        </div>
      </SectionWrapper>

      {/* Call-to-Actions */}
      <SectionWrapper backgroundColor="neutral.light">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          <Button
            variant="primary"
            onClick={() =>
              window.open('https://github.com/jonaszeihe/skryper', '_blank')
            }
          >
            GitHub Repository
          </Button>
          <Button variant="success">Mehr erfahren</Button>
        </div>
      </SectionWrapper>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          media={[{ type: 'image', src: SkryperLogo, alt: 'Skryper Logo' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
