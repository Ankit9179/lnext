export default function Lacture({ params }) {
  console.log(params);
  return (
    <div>
      <h2> lecture page</h2>
      <br></br>
      <h1>{params.lacture[1]}</h1>
      <h1>{params.lacture[2]}</h1>
    </div>
  );
}
