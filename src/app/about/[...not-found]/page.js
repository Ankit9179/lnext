import Link from "next/link";

export default function AboutNotFound() {
  return (
    <div className="flex justify-center flex-col  align-middle h-[500px]">
      <h1 className="mx-auto"> this about page not found</h1>
      <Link href="/about" className="text-blue-300 text-center">
        click here to about page
      </Link>
    </div>
  );
}
