import React from "react";
import { X } from "lucide-react";

const ReplyBanner = ({ replyTo, onCancel }) => {
  return (
    <div className="mx-4 mb-2 bg-gray-100 p-2 rounded-lg flex items-center justify-between">
      <span className="text-xs">
        Replying to: {replyTo.text || replyTo.files?.[0]?.name}
      </span>
      <button onClick={onCancel}>
        <X size={14} className="text-gray-500" />
      </button>
    </div>
  );
};

export default ReplyBanner;
