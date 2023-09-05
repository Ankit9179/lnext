"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  const navigat = (rout) => {
    router.push("/about/" + rout);
  };

  return (
    <div>
      <h1>About page</h1>
      <br />
      <br />
      <Link href="/">go to home</Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => navigat("/aboutStudent")}>
        go to about student page with navigation
      </button>
    </div>
  );
};

export default About;
