import { Toaster } from "@/components/ui/toaster";

export default function CvSubmitLayout({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
