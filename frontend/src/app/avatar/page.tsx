"use client";
import { useEffect, useRef } from "react";

// Types for messages from ReadyPlayerMe
interface ReadyPlayerMeMessage {
  source: string;
  eventName: string;
  data: {
    url: string;
  };
}

export default function CreateAvatarPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data as ReadyPlayerMeMessage;

      if (data?.source !== "readyplayerme") return;

      if (data.eventName === "v1.frame.ready") {
        console.log("✅ Frame ready, subscribing to avatar export...");
        iframeRef.current?.contentWindow?.postMessage(
          {
            target: "readyplayerme",
            type: "subscribe",
            eventName: "v1.avatar.exported",
          },
          "*"
        );
      }

      if (data.eventName === "v1.avatar.exported") {
        console.log("🎯 Avatar URL received:", data.data.url);
        // TODO: You can redirect the user, save the avatar URL, or move to next step!
        // Example: Redirect to the 3D scene
        // router.push(`/avatar-preview?url=${encodeURIComponent(data.data.url)}`);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
      <iframe
        ref={iframeRef}
        src="https://demo.readyplayer.me/avatar?frameApi"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          backgroundColor: "black",
        }}
        allow="camera *; microphone *"
        title="Ready Player Me Avatar Creator"
      />
    </div>
  );
}
