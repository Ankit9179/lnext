import Link from "next/link";

export default function StudentList() {
  const arr = [ankit, iron, jon, nick];
  return (
    <div className="ml-6">
      <h1 className="m-4">student list</h1>
      <ul className="text-blue-700">
        {arr.map((item) => {
          return (
            <li>
              <Link href="/studentlist/ankit">{item}</Link>
            </li>
          );
        })}
        {/* <li>
          <Link href="/studentlist/iron">iron</Link>
        </li>
        <li>
          <Link href="/studentlist/jon">jon</Link>
        </li>
        <li>
          <Link href="/studentlist/nick">nick</Link>
        </li> */}
      </ul>
    </div>
  );
}
