import React from "react";
import "./Home.css";
import Container from "../components/container";

const Home = () => {
  return (
    <Container>
      <div className="home-section">
        <section className="hero-banner">
          <h1>Bestehen Sie Ihre Prüfung mit unserer persönlichen Hilfe</h1>
          <p>Entdecken Sie, wie KI Ihr Leben verändern kann.</p>
        </section>
        {[
          {
            img: require("../assets/images/imagen2.png"),
            desc: "Einfaches Quiz: Ermöglicht Benutzern die Auswahl der Anzahl der Fragen, Ideal für Anfänger.",
          },
          {
            img: require("../assets/images/imagen3.png"),
            desc: "Quiz Level 2: Beinhaltet 40 Fragen mit einem Limit von 60 Minuten. Entwickelt, um eine echte Prüfung zu simulieren und Auszubildenden bei der Vorbereitung auf Zertifizierungen zu helfen.",
          },
          {
            img: require("../assets/images/imagen4.png"),
            desc: "Chat mit KI: Ein spezieller Assistent für jedes Thema (AWS, Azure, Linux). Der KI-Assistent kann Fragen beantworten und Benutzern zu bestimmten Themen helfen.",
          },
          {
            img: require("../assets/images/imagen5.png"),
            desc: "Er ist so konfiguriert, dass er die Aufmerksamkeit nur auf diese drei Themen lenkt.",
          },
        ].map((feature, index) => (
          <div
            className={`feature-card ${
              index % 2 === 0 ? "feature-reverse" : ""
            }`}
            key={index}
          >
            <div className="feature-image">
              <img src={feature.img} alt={`Feature ${index + 1}`} />
            </div>
            <div className="feature-description">
              <p>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Home;
