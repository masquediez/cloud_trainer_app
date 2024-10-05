import React from "react";
import "./Home.css";
import Container from "../components/container";

const Home = () => {
  return (
    <Container>
      <div className="home-section">
        <section className="hero-banner">
          <h1>Aprueba tu examen con nuestra ayuda personalizada</h1>
          <p>Descubre cómo la IA puede transformar tu vida.</p>
        </section>
        {[
          {
            img: require("../assets/images/imagen1.png"),
            desc: "Descripción 1",
          },
          {
            img: require("../assets/images/imagen2.png"),
            desc: "Descripción 2",
          },
          {
            img: require("../assets/images/imagen3.png"),
            desc: "Descripción 3",
          },
          {
            img: require("../assets/images/imagen4.png"),
            desc: "Descripción 4",
          },
          {
            img: require("../assets/images/imagen5.png"),
            desc: "Descripción 5",
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
