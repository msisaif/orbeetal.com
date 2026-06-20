import { AlertCircle } from "lucide-react";

export function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
      <AlertCircle className="w-3 h-3 shrink-0" />
      {message}
    </p>
  );
}
