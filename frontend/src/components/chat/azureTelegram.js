import React from "react";
import "./azureTelegram.css";

const AzureTelegram = () => {
  const handleRedirect = () => {
    window.location.href = "https://t.me/n8n_test_numero_1_bot";
  };

  return (
    <div className="bot-telegram">
      <buttones onClick={handleRedirect}>Ich bin auch in Telegram</buttones>
    </div>
  );
};

export default AzureTelegram;
