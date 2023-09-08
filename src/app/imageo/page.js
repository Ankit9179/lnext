import React from "react";
import Image from "next/image";
// import image form public
import photo from "../../../public/vercel.svg";

const page = () => {
  console.log(photo);
  return (
    <div>
      <h1>image optimization</h1>
      {/* <Image src={photo} width={500} height={500} /> */}
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVb7M3-kkwI9AScXHaC0hrJJJ4N3uK2edSZxOQLFce&s"
        width={200}
        height={200}
      />
    </div>
  );
};

export default page;
