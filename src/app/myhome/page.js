export default function Myhome() {
  return (
    <div>
      <h1>my home page</h1>
    </div>
  );
}

// dynamic meta data with the help of

export function generateMetadata() {
  return {
    title: "my home title",
    discription: "this is my home discription",
  };
}
