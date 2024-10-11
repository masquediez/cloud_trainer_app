import React, { useEffect } from "react";
import { createChat } from "@n8n/chat";

const ChatLinux = ({ username }) => {
  useEffect(() => {
    if (username) {
      createChat({
        webhookUrl:
          "https://n8nencasa.duckdns.org/webhook/f846beb5-89e7-495d-908d-822f01af3658/chat",
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
