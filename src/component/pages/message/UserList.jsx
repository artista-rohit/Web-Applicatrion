import React from "react";

const UserList = ({ users, conversations, activeUserId, onSelectUser, setReplyTo, setFiles }) => {
  const lastMessageOf = (userId) => {
    const msgs = conversations[userId] || [];
    return msgs.length ? msgs[msgs.length - 1] : null;
  };

  return (
    <aside className="w-72 border-r bg-gray-50 flex flex-col">
      <div className="px-4 py-3 border-b">
        <h3 className="font-semibold">Chats</h3>
        <input
          type="text"
          placeholder="Search users..."
          className="mt-2 w-full rounded border px-3 py-2 text-sm"
          onChange={() => {}}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {users.map((u) => {
          const last = lastMessageOf(u.id);
          return (
            <button
              key={u.id}
              onClick={() => {
                onSelectUser(u.id);
                setReplyTo(null);
                setFiles([]);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-amber-50 ${
                u.id === activeUserId ? "bg-amber-100" : ""
              }`}
            >
              <img src={u.avatar} alt={u.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="min-w-0">
                <p className="font-medium truncate">{u.name}</p>
                <p className="text-xs text-gray-500 truncate">
                  {last?.text || "No messages yet"}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default UserList;
