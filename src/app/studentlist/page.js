import Link from "next/link";

export default function StudentList() {
  return (
    <div className="ml-6">
      <h1 className="m-4">student list</h1>
      <ul className="text-blue-700">
        <li>
          <Link href="/studentlist/ankit">ankit</Link>
        </li>
        <li>
          <Link href="/studentlist/iron">iron</Link>
        </li>
        <li>
          <Link href="/studentlist/jon">jon</Link>
        </li>
        <li>
          <Link href="/studentlist/nick">nick</Link>
        </li>
      </ul>
    </div>
  );
}
