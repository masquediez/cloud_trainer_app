import React, { useEffect } from "react";
import { createChat } from "@n8n/chat";

const ChatAZURE = ({ username }) => {
  useEffect(() => {
    if (username) {
      createChat({
        webhookUrl:
          "http://192.168.178.90:5678/webhook/9b114630-8ff4-40a5-b5df-768e072255ec/chat",
        webhookConfig: {
          method: "POST",
          headers: {},
        },
        target: "#chat-container",
        mode: "window",
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
        metadata: {},
        showWelcomeScreen: false,
        defaultLanguage: "de",
        initialMessages: [`Hallo,    Willkommen zum AWS-Training.`],
        i18n: {
          en: {
            title: "¡Prüfungsassistent!  ",
            subtitle: "Ich bin hier, um Ihnen zu helfen !! ",
            getStarted: "Nueva conversación",
            inputPlaceholder: "Schreiben Sie Ihre Frage ..",
          },
        },
      });
    }
  }, [username]);

  return <div id="chat-container"></div>; // Asegúrate de que este contenedor esté presente
};

export default ChatAZURE;
