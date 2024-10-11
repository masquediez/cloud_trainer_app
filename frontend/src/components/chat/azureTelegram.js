import React from "react";
import "./azureTelegram.css";

const AzureTelegram = () => {
  const handleRedirect = () => {
    window.open("https://t.me/n8n_test_numero_1_bot", "_blank");
  };

  return (
    <div className="bot-telegram">
      <button onClick={handleRedirect}>Ich bin auch in Telegram</button>
    </div>
  );
};

export default AzureTelegram;
