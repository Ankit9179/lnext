import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="bg-blue-300">
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
      </div>
      {children}
    </div>
  );
};

export default layout;
