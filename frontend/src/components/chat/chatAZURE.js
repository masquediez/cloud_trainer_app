import React, { useEffect } from "react";
import { createChat } from "@n8n/chat";

const ChatAZURE = ({ username }) => {
  useEffect(() => {
    if (username) {
      createChat({
        webhookUrl:
          "https://n8nencasa.duckdns.org/webhook/0961c6a4-5024-49cc-9d8b-333cb694c809/chat",
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
        initialMessages: [`Hallo,    Willkommen zum Azure-Training.`],
        i18n: {
          en: {
            title: "¡Prüfungsassistent!",
            subtitle: "Ich bin hier, um Ihnen zu helfen !!",
            getStarted: "Nueva conversación",
            inputPlaceholder: "Schreiben Sie Ihre Frage ..",
          },
        },
      });
    }
  }, [username]);

  return <div id="chat-container"></div>;
};

export default ChatAZURE;
