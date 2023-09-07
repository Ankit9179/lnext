"use client";
export default function CheckPrice(props) {
  console.log(props.price);
  return (
    <div>
      <button
        onClick={() => alert(`${props.price} $`)}
        className="m-8 bg-black text-white p-4 rounded-lg border-yellow-300"
      >
        Check Price
      </button>
    </div>
  );
}
