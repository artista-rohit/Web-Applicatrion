import React from "react";
import { Check } from "lucide-react";

const renderStatusIcon = (status) => {
  if (status === "sent")
    return <Check size={12} className="inline text-gray-400" />;
  if (status === "delivered")
    return (
      <span className="inline-flex">
        <Check size={12} className="text-gray-400 -mr-1" />
        <Check size={12} className="text-gray-400" />
      </span>
    );
  if (status === "seen")
    return (
      <span className="inline-flex">
        <Check size={12} className="text-blue-500 -mr-1" />
        <Check size={12} className="text-blue-500" />
      </span>
    );
  return null;
};

const MessageBubble = ({ msg, onReply }) => {
  return (
    <div
      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`px-4 py-2 rounded-lg max-w-xs text-sm relative cursor-pointer ${
          msg.sender === "user"
            ? "bg-orange-500 text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 rounded-bl-none"
        }`}
        onClick={() => onReply(msg)}
      >
        {/* Reply preview */}
        {msg.replyTo && (
          <div className="text-xs italic border-l-2 border-gray-400 pl-2 mb-1 opacity-80">
            Replying to: {msg.replyTo.text || "File"}
          </div>
        )}

        {/* Text */}
        {msg.text && <p>{msg.text}</p>}

        {/* Files */}
        {msg.files && msg.files.length > 0 && (
          <div className="mt-2 space-y-1">
            {msg.files.map((file, i) =>
              file.type?.startsWith("image/") ? (
                <img
                  key={i}
                  src={file.url}
                  alt={file.name}
                  className="rounded-lg max-h-40"
                />
              ) : (
                <a
                  key={i}
                  href={file.url}
                  download={file.name}
                  className="underline block"
                >
                  📄 {file.name}
                </a>
              )
            )}
          </div>
        )}

        {/* Time + ticks */}
        <span className="text-[10px] opacity-70 mt-1 text-right flex items-center gap-1 justify-end">
          {msg.time} {msg.sender === "user" && renderStatusIcon(msg.status)}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
