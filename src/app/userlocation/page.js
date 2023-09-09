"use client";
import Script from "next/script";

export default function page() {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file loaded in page .js");
        }}
      />
      <h1> get user location</h1>
    </div>
  );
}
