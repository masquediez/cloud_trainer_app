import React from "react";
import QuizApp from "../components/Quiz/Quiz-App.js";
import "./Quiz.css"; // Asegúrate de crear este archivo para los estilos

const Quiz = () => {
  return (
    <div className="automation">
      <h1>Easy Quiz Azure AZ-900</h1>

      <div className="quiz-card">
        <QuizApp />
      </div>
    </div>
  );
};

export default Quiz;
