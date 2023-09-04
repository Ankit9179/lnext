export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-green-300 justify-between p-24">
      <h1>hello</h1>
      <NewFunc name="raja" />
      <NewFunc name="rani" />
      <NewFunc name="kali" />
      <NewFunc name="hatim" />
    </main>
  );
}

const NewFunc = (val) => {
  return <h1>my name is {val.name}</h1>;
};
