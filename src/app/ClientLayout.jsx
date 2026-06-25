"use client";

import { useState, useCallback } from "react";
import { useTheme } from "../hooks/useTheme";
import { useKeyboard } from "../hooks/useKeyboard";
import Nav from "../components/Nav/Nav";
import CmdK from "../components/CmdK/CmdK";
import { useRouter } from "next/navigation";

export default function ClientLayout({ children }) {
  const { toggleTheme } = useTheme();
  const [cmdkOpen, setCmdkOpen] = useState(false);
  const router = useRouter();

  const toggleCmdk = useCallback(() => setCmdkOpen((o) => !o), []);
  useKeyboard("k", toggleCmdk, { meta: true });

  const jump = useCallback((id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // We navigate to /#id if it's not a new page
    router.push(`/${id === "changelog" ? "" : id}`);
  }, [router]);

  return (
    <>
      <Nav
        onToggleTheme={toggleTheme}
        onOpenCmdk={() => setCmdkOpen(true)}
      />
      {children}
      {cmdkOpen && (
        <CmdK
          onClose={() => setCmdkOpen(false)}
          onJump={jump}
          onToggleTheme={toggleTheme}
        />
      )}
    </>
  );
}
