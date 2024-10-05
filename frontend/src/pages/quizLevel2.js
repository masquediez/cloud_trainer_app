import React from "react";
import QuizApp2 from "../components/Quiz/quiz-2";
import "./Quiz.css";

const QuizLevel2 = () => {
  return (
    <div className="automation">
      <h1>Level 2 Azure AZ-900</h1>
      <p>40 Fragen in 60 Minuten</p>

      <div className="quiz-card">
        <QuizApp2 />
      </div>
    </div>
  );
};

export default QuizLevel2;
