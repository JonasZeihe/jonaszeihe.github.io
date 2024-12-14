import React from "react";
import Wrapper from "../components/layout/Wrapper";
import QuoteComponent from "../components/sections/QuoteComponent";
import Typography from "../styles/Typography";
import HighlightText from "../components/utilities/HighlightText";

// Assets

export default function Introduction() {
  return (
    <Wrapper backgroundColor="background.dark">
      <Wrapper gradient="primaryToSecondary" textAlign="center">
        <Typography variant="h1" align="center" color="neutral.white">
          Case Study: <strong>KIM</strong>
        </Typography>
        <Typography variant="h3" color="neutral.white" align="center">
          Diese Case Study beleuchtet die Entwicklung und Gestaltung einer{" "}
          innovativen KI-gestützten App, die es Nutzern ermöglicht, basierend
          auf ihren Interessen und Werten tiefgehende Verbindungen zu schaffen.
        </Typography>{" "}
      </Wrapper>
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Kurzbeschreibung
        </Typography>
        <Typography color="primary.main">
          <strong>KIM</strong> ist eine App, die mit{" "}
          <HighlightText>KI-gestützter Persönlichkeitsanalyse</HighlightText>{" "}
          arbeitet, um Menschen zusammenzubringen, die ähnliche Interessen und
          Werte teilen.
        </Typography>
        <Typography color="primary.main">
          Ziel ist es, echte Verbindungen zu schaffen, die nicht auf
          Oberflächlichkeit basieren, sondern auf gemeinsamen Interessen und
          tiefgreifender Authentizität.
        </Typography>
      </Wrapper>

      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Das Ziel
        </Typography>
        <Typography color="primary.main">
          Entwicklung einer Plattform, die über oberflächliche Kontakte
          hinausgeht und echte Beziehungen ermöglicht. Im Mittelpunkt stehen die
          Persönlichkeit und geteilte Interessen der Nutzer.
        </Typography>
        <QuoteComponent
          text="Verbindungen, die zählen."
          color="neutral.medium"
        />
      </Wrapper>
    </Wrapper>
  );
}
