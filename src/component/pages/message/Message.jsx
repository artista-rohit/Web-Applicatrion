// Chat.jsx
import React, { useEffect, useRef, useState } from "react";
import UserList from "./UserList";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ReplyBanner from "./ReplyBanner";
import MessageComposer from "./MessageComposer";
import FilePreview from "./FilePreview";

// Helpers
const timeNow = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const initialUsers = [
  { id: "u1", name: "Jane Cooper", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: "u2", name: "John Doe", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: "u3", name: "Alex Kim", avatar: "https://i.pravatar.cc/40?img=3" },
  {
    id: 1,
    name: "Rohit Maurya",
    avatar: "https://i.pravatar.cc/150?img=1",
    online: true,
  },
  {
    id: 2,
    name: "Ananya Sharma",
    avatar: "https://i.pravatar.cc/150?img=2",
    online: false,
  },
  {
    id: 3,
    name: "Amit Verma",
    avatar: "https://i.pravatar.cc/150?img=3",
    online: true,
  },
  {
    id: 4,
    name: "Priya Singh",
    avatar: "https://i.pravatar.cc/150?img=4",
    online: true,
  },
  {
    id: 5,
    name: "Rahul Mehta",
    avatar: "https://i.pravatar.cc/150?img=5",
    online: false,
  },
  {
    id: 6,
    name: "Sneha Patel",
    avatar: "https://i.pravatar.cc/150?img=6",
    online: true,
  },
  {
    id: 7,
    name: "Karan Gupta",
    avatar: "https://i.pravatar.cc/150?img=7",
    online: false,
  },
  {
    id: 8,
    name: "Neha Reddy",
    avatar: "https://i.pravatar.cc/150?img=8",
    online: true,
  },
  {
    id: 9,
    name: "Vikram Desai",
    avatar: "https://i.pravatar.cc/150?img=9",
    online: true,
  },
  {
    id: 10,
    name: "Shreya Nair",
    avatar: "https://i.pravatar.cc/150?img=10",
    online: false,
  },
];

const initialConversations = {
  u1: [
    {
      id: 1,
      text: "Hello!",
      sender: "support",
      time: "10:00 AM",
      status: "seen",
    },
  ],
  u2: [
    {
      id: 2,
      text: "Hi John",
      sender: "support",
      time: "09:45 AM",
      status: "seen",
    },
  ],
  u3: [
    {
      id: 3,
      text: "Hi John",
      sender: "support",
      time: "09:45 AM",
      status: "seen",
    },
  ],
  u4: [
    {
      id: 4,
      text: "Hi John",
      sender: "support",
      time: "09:45 AM",
      status: "seen",
    },
  ],
};

const Chat = () => {
  const [users] = useState(initialUsers);
  const [activeUserId, setActiveUserId] = useState(initialUsers[0].id);
  const [conversations, setConversations] = useState(initialConversations);
  const [newMessage, setNewMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [replyTo, setReplyTo] = useState(null);

  const endRef = useRef(null);

  // scroll to bottom
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversations, activeUserId]);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(conversations));
  }, [conversations]);

  const handleSend = () => {
    if (!newMessage && files.length === 0) return;

    const newMsg = {
      id: Date.now(),
      text: newMessage,
      files,
      sender: "user",
      time: timeNow(),
      replyTo,
      status: "sent",
    };

    setConversations((prev) => ({
      ...prev,
      [activeUserId]: [...(prev[activeUserId] || []), newMsg],
    }));

    setNewMessage("");
    setFiles([]);
    setReplyTo(null);
  };

  const activeUser = users.find((u) => u.id === activeUserId);
  const messages = conversations[activeUserId] || [];

  return (
    <div className="flex h-[88vh] bg-white rounded-lg shadow overflow-hidden">
      {/* Sidebar */}
      <UserList
        users={users}
        conversations={conversations}
        activeUserId={activeUserId}
        onSelectUser={setActiveUserId}
        setReplyTo={setReplyTo}
        setFiles={setFiles}
      />

      {/* Main chat area */}
      <section className="flex-1 flex flex-col">
        <ChatHeader user={activeUser} />
        <MessageList messages={messages} onReply={setReplyTo} endRef={endRef} />
        {replyTo && (
          <ReplyBanner replyTo={replyTo} onCancel={() => setReplyTo(null)} />
        )}
        <MessageComposer
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          files={files}
          setFiles={setFiles}
          onSend={handleSend}
          activeUser={activeUser}
        />
        {files.length > 0 && <FilePreview files={files} setFiles={setFiles} />}
      </section>
    </div>
  );
};

export default Chat;






// Data Flow in the Chat App

// Chat.jsx  (Parent / State Manager)
// ├── UserList.jsx
// │     • Props: users, conversations, activeUserId
// │     • Emits: onSelectUser → changes active user
// │     • Also resets: replyTo, files
// │
// ├── ChatHeader.jsx
// │     • Props: activeUser (avatar + name)
// │
// ├── MessageList.jsx
// │     └── MessageBubble.jsx (per message)
// │           • Props: msg
// │           • Emits: onReply → sets replyTo
// │
// ├── ReplyBanner.jsx
// │     • Props: replyTo
// │     • Emits: onCancel → clears replyTo
// │
// ├── MessageComposer.jsx
// │     • Props: newMessage, setNewMessage
// │     • Props: files, setFiles
// │     • Emits: onSend → adds new message
// │
// └── FilePreview.jsx
//       • Props: files
//       • Emits: setFiles → remove specific file
