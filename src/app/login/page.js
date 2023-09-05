import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>login page</h1>
      <br />
      <br />
      <Link href="/">go to home</Link>
      <br />
      <br />
      <br />
      <br />
      <Link href="/login/loginstudent">go to login student paga with link</Link>
    </div>
  );
};

export default page;
