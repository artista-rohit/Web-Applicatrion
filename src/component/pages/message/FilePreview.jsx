import React from "react";
import { X } from "lucide-react";

const FilePreview = ({ files, setFiles }) => {
  return (
    <div className="border-t px-4 py-2 flex gap-2 flex-wrap">
      {files.map((file, i) => (
        <div key={i} className="relative">
          {file.type?.startsWith("image/") ? (
            <img
              src={file.url}
              alt="preview"
              className="w-16 h-16 object-cover rounded-lg"
            />
          ) : (
            <p className="text-sm text-gray-600">📄 {file.name}</p>
          )}
          <button
            onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs"
          >
            <X size={12} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilePreview;
