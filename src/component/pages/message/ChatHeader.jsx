import React from "react";

const ChatHeader = ({ user }) => {
  return (
    <div className="px-4 py-3 border-b flex items-center gap-3">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div>
        <h2 className="font-semibold">{user.name}</h2>
        <p className="text-xs text-gray-500">Chat with Support</p>
      </div>
    </div>
  );
};

export default ChatHeader;
