"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("ankit");
  const apple = (items) => {
    setName(items);
  };
  const InnerComponent = () => {
    return <h1>innercomponent</h1>;
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello {name}</h1>
      <button
        onClick={() => apple("rahi")}
        className="bg-black text-white p-4 rounded-sm"
      >
        Click Me
      </button>
      {/* <InnerComponent /> */}
      {InnerComponent()}
    </main>
  );
}
