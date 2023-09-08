import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
// import image form public
import photo from "../../../public/vercel.svg";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";

const roboto = Roboto({
    weight: "100",
    subsets: ["latin"],
    display: "swap"
})
const page = () => {
    console.log(photo);

    return (
        <div>
            <h1>image optimization</h1>
            <p className={roboto.className}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga labore, reprehenderit, aut impedit praesentium error veniam id perferendis assumenda eveniet laudantium quis recusandae mollitia delectus dolore molestias ullam maiores. Laboriosam ducimus et, corrupti totam vitae ullam omnis nisi necessitatibus minima, veritatis soluta, commodi similique veniam. Distinctio autem reprehenderit et quo voluptatum. Quibusdam ipsum accusamus illum nostrum consequuntur sit, culpa nemo eius delectus iste. Error vero libero ea assumenda quis, porro quam officia tempora ullam cum est esse consectetur et optio modi neque nostrum enim tenetur deserunt at accusantium odio? Debitis enim iure amet aliquid dolorum quam fugiat exercitationem? Vel, ab?</p>
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
