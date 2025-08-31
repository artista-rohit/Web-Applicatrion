import React from "react";
import { Paperclip, Send } from "lucide-react";

const MessageComposer = ({
  newMessage,
  setNewMessage,
  files,
  setFiles,
  onSend,
  activeUser,
}) => {
  const handleFileChange = (e) => {
    setFiles((prev) => [
      ...prev,
      ...Array.from(e.target.files || []).map((f) => ({
        url: URL.createObjectURL(f),
        name: f.name,
        type: f.type,
      })),
    ]);
  };

  return (
    <div className="border-t px-4 py-2 flex gap-2 items-center">
      <label className="cursor-pointer p-2 rounded-lg hover:bg-gray-100">
        <Paperclip size={20} className="text-gray-600" />
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*,.pdf,.doc,.docx"
          multiple
        />
      </label>

      <input
        type="text"
        className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
        placeholder={`Message ${activeUser.name}…`}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
      />

      <button
        onClick={onSend}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center gap-1"
      >
        <Send size={18} />
        Send
      </button>
    </div>
  );
};

export default MessageComposer;
