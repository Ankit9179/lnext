"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigat = useRouter();
  const [name, setName] = useState("ankit");
  const apple = (items) => {
    setName(items);
  };
  const InnerComponent = () => {
    return <h1>innercomponent</h1>;
  };
  //route fuc

  const routeing = (rout) => {
    navigat.push(rout);
  };
  return (
    <main className="">
      <h1>hello {name}</h1>
      <button
        onClick={() => apple("rahi")}
        className="bg-black text-white p-4 rounded-sm"
      >
        Click Me
      </button>
      {/* <InnerComponent /> */}
      {InnerComponent()}
      <br />
      <br />
      <br />
      <Link className="text-blue-500" href="/login">
        go to login
      </Link>
      <br />
      <br />
      <Link className="text-blue-500" href="/about">
        go to about
      </Link>
      <br />
      <br />
      <Link href="/productlist" className="text-blue-500">
        go to products page
      </Link>
      <br />
      <br />
      <button
        onClick={() => routeing("/login")}
        className="bg-black text-white p-5 rounded-lg"
      >
        go to loin with navigation
      </button>
    </main>
  );
}
