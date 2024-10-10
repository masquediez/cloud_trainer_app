import React, { useEffect } from "react";
import { createChat } from "@n8n/chat";

const ChatLinux = ({ username }) => {
  useEffect(() => {
    if (username) {
      createChat({
        webhookUrl:
          "https://n8nencasa.duckdns.org/webhook/149003a1-8fc0-4cc9-871b-4af5e10ae9f2/chat",
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
        initialMessages: [`Hallo,    Willkommen zum Linux-Training.`],
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

  return <div id="chat-container"></div>;
};

export default ChatLinux;
