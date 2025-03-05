"use client";

import { useState, useEffect } from "react";
import PreLoader from "./PreLoader";

interface PreLoaderWrapperProps {
  children: React.ReactNode;
}

export default function PreLoaderWrapper({ children }: PreLoaderWrapperProps) {
  const [loading, setLoading] = useState(true);

  // Function to handle when the preloader is complete
  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  // We want to show the preloader only on initial page load
  useEffect(() => {
    // If we're in the browser and not in an iframe
    if (typeof window !== "undefined" && window.self === window.top) {
      // Check if this is the first visit in this session
      const hasVisited = sessionStorage.getItem("hasVisited");

      if (!hasVisited) {
        // First visit - show preloader
        sessionStorage.setItem("hasVisited", "true");
        setLoading(true);
      } else {
        // Returning visit - skip preloader
        setLoading(false);
      }
    } else {
      // Skip preloader for non-browser environments or iframes
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && <PreLoader onComplete={handlePreloaderComplete} />}
      {children}
    </>
  );
}
