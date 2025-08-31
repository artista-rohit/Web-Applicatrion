import React from "react";
import MessageBubble from "./MessageBubble";

const MessageList = ({ messages, onReply, endRef }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} msg={msg} onReply={onReply} />
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default MessageList;
