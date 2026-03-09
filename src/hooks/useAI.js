import { useState } from "react";

const ANTHROPIC_API = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-sonnet-4-20250514";

/**
 * useAI — lightweight hook for calling the Anthropic Messages API.
 *
 * @param {string} systemPrompt  Static system prompt for the session.
 * @returns {{ messages, loading, send, reset }}
 */
export function useAI(systemPrompt) {
  const [messages, setMessages] = useState([]);
  const [loading,  setLoading]  = useState(false);

  const send = async (userText) => {
    if (!userText.trim()) return;

    const userMsg = { role: "user", content: userText };
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const history = messages.map((m) => ({
        role:    m.role === "ai" ? "assistant" : "user",
        content: m.text,
      }));

      const response = await fetch(ANTHROPIC_API, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model:      MODEL,
          max_tokens: 1000,
          system:     systemPrompt,
          messages:   [...history, userMsg],
        }),
      });

      const data = await response.json();
      const text =
        data.content?.map((c) => c.text || "").join("") ||
        "Sorry, I couldn't process that request.";

      setMessages((prev) => [...prev, { role: "ai", text }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Connection error — please try again." },
      ]);
    }

    setLoading(false);
  };

  const reset = () => setMessages([]);

  return { messages, loading, send, reset };
}
