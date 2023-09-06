"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      <div className="bg-blue-300">
        {path != "/about/aboutCollege" ? (
          <ul className="flex gap-9 ml-36 p-3">
            <li>
              <Link href="/about/aboutStudent">student</Link>
            </li>
            <li>
              <Link href="/about/aboutSchool">school</Link>
            </li>
            <li>
              <Link href="/about/aboutCollege">college</Link>
            </li>
          </ul>
        ) : (
          <Link href="/about">
            <h1 className="text-blue-600">go to about main</h1>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};

export default layout;
