import { cls } from "../libs/utils";

interface MessageProps {
  message: string;
  reversed?: boolean;
  avatarUrl?: string;
}

export default function Message({
  message,
  avatarUrl,
  reversed,
}: MessageProps) {
  return (
    <div
      className={cls(
        "flex  items-start space-x-2",
        reversed ? "flex-row-reverse space-x-reverse" : ""
      )}
    >
      {!reversed ? <div className="w-8 h-8 rounded-full bg-slate-200" /> : null}
      <div
        className={cls(
          "w-1/2 text-sm text-gray-700 p-2 border  rounded-md",
          reversed ? "border-orange-400" : "border-gray-200"
        )}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}
