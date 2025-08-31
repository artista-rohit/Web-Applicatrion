// import React, { useEffect, useRef, useState } from "react";
// import { Paperclip, Send, X, Check } from "lucide-react";

// // --- Helpers ---
// const timeNow = () =>
//   new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// const initialUsers = [
//   { id: "u1", name: "Jane Cooper", avatar: "https://i.pravatar.cc/40?img=1" },
//   { id: "u2", name: "John Doe", avatar: "https://i.pravatar.cc/40?img=2" },
//   { id: "u3", name: "Alex Kim", avatar: "https://i.pravatar.cc/40?img=3" },
// ];

// // Seed a couple of conversations so the screen isn't empty
// const initialConversations = {
//   u1: [
//     {
//       id: 1,
//       text: "Hello! How can I help you?",
//       sender: "support",
//       time: "10:00 AM",
//       status: "seen",
//     },
//     {
//       id: 2,
//       text: "I want to check my order status.",
//       sender: "user",
//       time: "10:02 AM",
//       status: "delivered",
//     },
//   ],
//   u2: [
//     {
//       id: 3,
//       text: "Hi John, do you need help with your last order?",
//       sender: "support",
//       time: "09:45 AM",
//       status: "seen",
//     },
//   ],
//   u3: [ 
//     {
//       id: 4,
//       text: "Hi John, do you need help with your last order?",
//       sender: "support",
//       time: "09:45 AM",
//       status: "seen",
//     },
//   ],
// };

// const Chat = () => {
//   const [users] = useState(initialUsers);
//   const [activeUserId, setActiveUserId] = useState(initialUsers[0].id);

//   // conversations is an object keyed by userId -> array of messages
//   const [conversations, setConversations] = useState(initialConversations);

//   // Derived: messages for active conversation
//   const messages = conversations[activeUserId] || [];

//   const [newMessage, setNewMessage] = useState("");
//   const [files, setFiles] = useState([]);
//   const [replyTo, setReplyTo] = useState(null);

//   const endRef = useRef(null);

//   // --- Auto scroll on new messages or when switching users ---
//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, activeUserId]);

//   // (Optional) Persist to localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("conversations");
//     if (saved) setConversations(JSON.parse(saved));
//   }, []);
//   useEffect(() => {
//     localStorage.setItem("conversations", JSON.stringify(conversations));
//   }, [conversations]);

//   const updateMessageStatus = (userId, id, status) => {
//     setConversations((prev) => {
//       const conv = prev[userId] || [];
//       const updated = conv.map((m) => (m.id === id ? { ...m, status } : m));
//       return { ...prev, [userId]: updated };
//     });
//   };

//   const handleSend = () => {
//     if (newMessage.trim() === "" && files.length === 0) return;

//     const newMsg = {
//       id: Date.now(),
//       text: newMessage || "",
//       files: files.length
//         ? files.map((f) => ({
//             url: URL.createObjectURL(f),
//             name: f.name,
//             type: f.type,
//           }))
//         : [],
//       sender: "user",
//       time: timeNow(),
//       replyTo,
//       status: "sent",
//     };

//     setConversations((prev) => ({
//       ...prev,
//       [activeUserId]: [...(prev[activeUserId] || []), newMsg],
//     }));

//     setNewMessage("");
//     setFiles([]);
//     setReplyTo(null);

//     // simulate WhatsApp-like ticks
//     setTimeout(() => updateMessageStatus(activeUserId, newMsg.id, "delivered"), 1200);
//     setTimeout(() => updateMessageStatus(activeUserId, newMsg.id, "seen"), 3000);
//   };

//   const handleFileChange = (e) => {
//     setFiles((prev) => [...prev, ...Array.from(e.target.files || [])]);
//   };

//   const handleReply = (msg) => setReplyTo(msg);

//   const renderStatusIcon = (status) => {
//     if (status === "sent") return <Check size={12} className="inline text-gray-400" />;
//     if (status === "delivered")
//       return (
//         <span className="inline-flex">
//           <Check size={12} className="text-gray-400 -mr-1" />
//           <Check size={12} className="text-gray-400" />
//         </span>
//       );
//     if (status === "seen")
//       return (
//         <span className="inline-flex">
//           <Check size={12} className="text-blue-500 -mr-1" />
//           <Check size={12} className="text-blue-500" />
//         </span>
//       );
//     return null;
//   };

//   const activeUser = users.find((u) => u.id === activeUserId);

//   const lastMessageOf = (userId) => {
//     const arr = conversations[userId] || [];
//     return arr.length ? arr[arr.length - 1] : null;
//   };

//   return (
//     <div className="flex h-[90vh] bg-white rounded-lg shadow overflow-hidden">
//       {/* LEFT: Users list */}
//       <aside className="w-72 border-r bg-gray-50 flex flex-col">
//         <div className="px-4 py-3 border-b">
//           <h3 className="font-semibold">Chats</h3>
//           <input
//             type="text"
//             placeholder="Search users..."
//             className="mt-2 w-full rounded border px-3 py-2 text-sm"
//             onChange={() => {}}
//           />
//         </div>

//         <div className="flex-1 overflow-y-auto">
//           {users.map((u) => {
//             const last = lastMessageOf(u.id);
//             const isActive = u.id === activeUserId;
//             return (
//               <button
//                 key={u.id}
//                 onClick={() => {
//                   setActiveUserId(u.id);
//                   setReplyTo(null);
//                   setFiles([]);
//                 }}
//                 className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-amber-50 ${
//                   isActive ? "bg-amber-100" : ""
//                 }`}
//               >
//                 <img
//                   src={u.avatar}
//                   alt={u.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div className="min-w-0">
//                   <div className="flex items-center justify-between gap-2">
//                     <p className="font-medium truncate">{u.name}</p>
//                     <span className="text-[10px] text-gray-500 shrink-0">
//                       {last?.time || ""}
//                     </span>
//                   </div>
//                   <p className="text-xs text-gray-500 truncate">
//                     {last?.text || (last?.files?.length ? "📎 Attachment" : "No messages yet")}
//                   </p>
//                 </div>
//               </button>
//             );
//           })}
//         </div>
//       </aside>

//       {/* RIGHT: Conversation */}
//       <section className="flex-1 flex flex-col">
//         {/* Header */}
//         <div className="px-4 py-3 border-b flex items-center gap-3">
//           <img
//             src={activeUser.avatar}
//             alt={activeUser.name}
//             className="w-8 h-8 rounded-full object-cover"
//           />
//           <div>
//             <h2 className="font-semibold">{activeUser.name}</h2>
//             <p className="text-xs text-gray-500">Chat with Support</p>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
//           {messages.map((msg) => (
//             <div
//               key={msg.id}
//               className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//             >
//               <div
//                 className={`px-4 py-2 rounded-lg max-w-xs text-sm relative cursor-pointer ${
//                   msg.sender === "user"
//                     ? "bg-orange-500 text-white rounded-br-none"
//                     : "bg-gray-200 text-gray-800 rounded-bl-none"
//                 }`}
//                 onClick={() => handleReply(msg)}
//               >
//                 {/* In-message reply preview */}
//                 {msg.replyTo && (
//                   <div className="text-xs italic border-l-2 border-gray-400 pl-2 mb-1 opacity-80">
//                     Replying to: {msg.replyTo.text || "File"}
//                   </div>
//                 )}

//                 {/* Text */}
//                 {msg.text && <p>{msg.text}</p>}

//                 {/* Files */}
//                 {msg.files && msg.files.length > 0 && (
//                   <div className="mt-2 space-y-1">
//                     {msg.files.map((file, i) =>
//                       file.type.startsWith("image/") ? (
//                         <img
//                           key={i}
//                           src={file.url}
//                           alt={file.name}
//                           className="rounded-lg max-h-40"
//                         />
//                       ) : (
//                         <a
//                           key={i}
//                           href={file.url}
//                           download={file.name}
//                           className="underline block"
//                         >
//                           📄 {file.name}
//                         </a>
//                       )
//                     )}
//                   </div>
//                 )}

//                 {/* Time + ticks */}
//                 <span className="text-[10px] opacity-70 block mt-1 text-right flex items-center gap-1 justify-end">
//                   {msg.time} {msg.sender === "user" && renderStatusIcon(msg.status)}
//                 </span>
//               </div>
//             </div>
//           ))}

//           <div ref={endRef} />
//         </div>

//         {/* Reply banner (before sending) */}
//         {replyTo && (
//           <div className="mx-4 mb-2 bg-gray-100 p-2 rounded-lg flex items-center justify-between">
//             <span className="text-xs">
//               Replying to: {replyTo.text || replyTo.files?.[0]?.name}
//             </span>
//             <button onClick={() => setReplyTo(null)}>
//               <X size={14} className="text-gray-500" />
//             </button>
//           </div>
//         )}

//         {/* Composer */}
//         <div className="border-t px-4 py-2 flex gap-2 items-center">
//           <label className="cursor-pointer p-2 rounded-lg hover:bg-gray-100">
//             <Paperclip size={20} className="text-gray-600" />
//             <input
//               type="file"
//               className="hidden"
//               onChange={handleFileChange}
//               accept="image/*,.pdf,.doc,.docx"
//               multiple
//             />
//           </label>

//           <input
//             type="text"
//             className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
//             placeholder={`Message ${activeUser.name}…`}
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           />

//           <button
//             onClick={handleSend}
//             className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center gap-1"
//           >
//             <Send size={18} />
//             Send
//           </button>
//         </div>

//         {/* File previews before sending */}
//         {files.length > 0 && (
//           <div className="border-t px-4 py-2 flex gap-2 flex-wrap">
//             {files.map((file, i) => (
//               <div key={i} className="relative">
//                 {file.type.startsWith("image/") ? (
//                   <img
//                     src={URL.createObjectURL(file)}
//                     alt="preview"
//                     className="w-16 h-16 object-cover rounded-lg"
//                   />
//                 ) : (
//                   <p className="text-sm text-gray-600">📄 {file.name}</p>
//                 )}
//                 <button
//                   onClick={() =>
//                     setFiles((prev) => prev.filter((_, idx) => idx !== i))
//                   }
//                   className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs"
//                 >
//                   <X size={12} />
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Chat;
