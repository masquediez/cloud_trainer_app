import React, { useEffect } from "react";
import { createChat } from "@n8n/chat";

const ChatAZURE = ({ username }) => {
  useEffect(() => {
    if (username) {
      createChat({
        webhookUrl:
          "https://n8nencasa.duckdns.org/webhook/d8473c33-e260-4715-84b9-ec494e9ef83b/chat",
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
