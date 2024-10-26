"use client";

import { useOptimistic, useState } from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Optimistic = () => {
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 },
  ]);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage as string,
        sending: true,
        key: state.length + 1,
      },
    ]
  );

  const handleSubmit = async (formData: FormData) => {
    addOptimisticMessage(formData.get("message"));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setMessages((messages) => [
      ...messages,
      { text: formData.get("message") as string, sending: false, key: 2 },
    ]);
  };

  return (
    <div className="flex flex-col gap-4">
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={handleSubmit} className="flex flex-col gap-4">
        <Input type="text" name="message" placeholder="Send a message..." />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};
