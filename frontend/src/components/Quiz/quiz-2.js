import React, { useEffect, useState } from "react";
import "./styles.css";

// JSON-Dateien mit statischen Texten in verschiedenen Sprachen
import textosES from "./textos-es.json";
import textosEN from "./textos-en.json";
import textosDE from "./textos-de.json";

// JSON-Dateien mit Fragen aus dem Verzeichnis public importieren
import questionsES from "./questions-es.json";
import questionsEN from "./questions-en.json";
import questionsDE from "./questions-de.json";

const QUESTION_COUNT = 40;
const TIME_LIMIT = 60 * 60; // 60 minutes in seconds

// Funktion zum Mischen eines Arrays
const shuffleArray = (array) => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const QuizApp2 = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [language, setLanguage] = useState("es");
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const fetchedQuestions = loadQuestionsByLanguage(language);
    if (fetchedQuestions.length > 0) {
      const shuffledQuestions = shuffleArray(fetchedQuestions);
      setQuestions(shuffledQuestions);
    }
  }, [language]);

  useEffect(() => {
    let timer;

    if (quizStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setShowScore(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [quizStarted, timeLeft]);

  const loadQuestionsByLanguage = (lang) => {
    switch (lang) {
      case "es":
        return questionsES;
      case "en":
        return questionsEN;
      case "de":
        return questionsDE;
      default:
        return [];
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Actualizar la puntuación basada en la respuesta seleccionada
    if (selectedOption === selectedQuestions[currentQuestionIndex]?.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Calcular el porcentaje actual
    const newPercentage = ((score / (currentQuestionIndex + 1)) * 100).toFixed(
      2
    );
    setCurrentPercentage(parseFloat(newPercentage));

    // Pasar a la siguiente pregunta o mostrar la puntuación final
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption("");
    } else {
      setShowScore(true);
    }
  };

  const handleResetQuiz = () => {
    setShowScore(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizStarted(false);
    setSelectedQuestions([]);
    setTimeLeft(TIME_LIMIT);
    setCurrentPercentage(0);
  };

  const startQuiz = () => {
    if (questions.length === 0) {
      console.error("No questions loaded");
      return;
    }
    setSelectedQuestions(shuffleArray(questions).slice(0, QUESTION_COUNT));
    setShowScore(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(TIME_LIMIT);
    setQuizStarted(true);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setSelectedLanguage(lang);
  };

  const textos = {
    es: textosES,
    en: textosEN,
    de: textosDE,
  };

  const getProgressColor = (percentage) => {
    return percentage >= 70 ? "green" : "red";
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="AppQuiz">
      <h1>Quiz Azure AZ-900</h1>
      <div className="language-buttons">
        <button
          className={selectedLanguage === "es" ? "selected" : ""}
          onClick={() => changeLanguage("es")}
        >
          ES
        </button>
        <button
          className={selectedLanguage === "en" ? "selected" : ""}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
        <button
          className={selectedLanguage === "de" ? "selected" : ""}
          onClick={() => changeLanguage("de")}
        >
          DE
        </button>
      </div>
      <div className="containerQuiz">
        {!quizStarted && !showScore && (
          <div className="start-quiz">
            <button className="start-quiz-button" onClick={startQuiz}>
              {textos[language].iniciarQuiz}
            </button>
          </div>
        )}
        {quizStarted && !showScore && selectedQuestions.length > 0 && (
          <div>
            <div className="timer">
              {textos[language].tiempoRestante}: {formatTime(timeLeft)}
            </div>
            <h2>{selectedQuestions[currentQuestionIndex]?.question}</h2>
            <div>
              {selectedQuestions[currentQuestionIndex]?.options.map(
                (option, index) => (
                  <div
                    key={index}
                    className={`option ${
                      selectedOption === option ? "selected" : ""
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionSelect(option)}
                    />
                    {option}
                  </div>
                )
              )}
            </div>
            <div className="button-container">
              <button
                className="siguientePregunta"
                onClick={handleNextQuestion}
                disabled={!selectedOption}
              >
                {textos[language].siguientePregunta}
              </button>
            </div>
            <div className="question-info">
              <p>
                {textos[language].pregunta} {currentQuestionIndex + 1}{" "}
                {textos[language].de} {QUESTION_COUNT}
              </p>
              <p>
                {textos[language].porcentajeAciertosActual}
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${currentPercentage}%`,
                      backgroundColor: getProgressColor(currentPercentage),
                    }}
                  ></div>
                </div>
                <span>{currentPercentage}%</span>
              </p>
            </div>
          </div>
        )}
        {showScore && (
          <div className="score-section">
            <h2>{textos[language].tuPuntaje}</h2>
            <p>
              {textos[language].resultadoFinal}: {score} / {QUESTION_COUNT}
            </p>
            <p>
              {textos[language].porcentajeFinal}:{" "}
              {((score / QUESTION_COUNT) * 100).toFixed(2)}%
            </p>
            <p>
              {(score / QUESTION_COUNT) * 100 >= 70
                ? textos[language].aprobado
                : textos[language].reprobado}
            </p>
            <button className="restart-button" onClick={handleResetQuiz}>
              {textos[language].reiniciarQuiz}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp2;
