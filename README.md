# video no. 4

EVENTS , FUNCTIONS , STATE

<br>
events - if you want event on your page than you must write this code in page.js on top
<br>
functions - you can use
<br>
state - you can use same to same react js

<br>
<br>
<br>
<br>

# video no. 5

FILE AND FOLDER STRUCTURE

1. next.config.js - configration file for next.js

2. jsconfig.jsom - configration file for javascript

3. .eslintrc.json - configration file for ESLint

4. package.json - it takes all information about your project likes dependencies and scripts

# video no. 6

COMPONENETS TYPE , SERVER AND CLIENT COMPONENTS

you can read on next js doc

# video no. 7

BASIC ROUTING ,CREATE NEW PAGES

here is no need any third party libraries for routing like in react js , react-router-dom

# video no. 8

LINKING AND NAVIGATION

1. with the helep of link you can go from one page to another page u need to inport Link from next/link

import Link from "next/link";

   <Link href="/">go to home</Link>

2.

import { useRouter } from "next/navigation";

    <button
        onClick={() => navigat.push("/login")}
        className="bg-black text-white p-5 rounded-lg"
      >
        go to loin with navigation
    </button>

# video no. 9

NESTED ROUTING WIT LINK AND NAVIGATION

file structure

     src/about/about-student/page.js
     src/about/about-teacher/page.js

# video no. 10

COMMON LAYOUT

we can create common code and component in next js with the help of layout.js . common layout like navbar , footer ,sidebar...

    file structure -

    src/about/layout.js

    import Link from "next/link";

    <br>
    <br>
    <br>
         import React from "react";

         const layout = ({ children }) => {
         return (
           <div>
             <div className="bg-blue-300">
               <ul className="flex gap-9 ml-36 p-3">
                 <li>
                   <Link href="/about/aboutStudent">student</Link>
                 </li>
                 <li>
                   <Link href="/about/aboutSchool">school</Link>
                 </li>
                 <li>
                   <Link href="/about/aboutCollege">college</Link>
                 </li>
               </ul>
             </div>
             {children}
           </div>
         );
       };

       export default layout;

# video no. 11

CONDITIONAL LAYOUT

check my conditional-layout branch
conditional layout with pathname

    import { usePathname } from "next/navigation";

    <div className="bg-blue-300">
        {path != "/about/aboutCollege" ? (
          <ul className="flex gap-9 ml-36 p-3">
            <li>
              <Link href="/about/aboutStudent">student</Link>
            </li>
            <li>
              <Link href="/about/aboutSchool">school</Link>
            </li>
            <li>
              <Link href="/about/aboutCollege">college</Link>
            </li>
          </ul>
        ) : (
          <Link href="/about">
            <h1 className="text-blue-600">go to about main</h1>
          </Link>
        )}
      </div>

# video no. 12

DYNAMIC ROUTING

we use dynamic routing when we have long list of student and you want to show each student details on your page

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


       "use client";

     import React from "react";

     export default function studet({ params }) {
       console.log(params);
       return (
         <div>
           <h1>student details</h1>
           <h1>name:{params.student}</h1>
         </div>
       );
     }

# video no. 13

ALL-SEGMENT IN ROUTE

with giving this type of name of folder [...lacture]

# video no. 14

404 PAGE ,GLOBAL PAGE ,SPECIFIC

     GLOBAL 404 = src/app/not-found.js - your code
     SPACIFIC 404 = src/app/about/[...not-found]/page.js - your code

# video no.15

MIDDLEWARE IN NEXT JS

     src/middleware.js/

     import { NextResponse } from "next/server";

       export default function middleware(request) {
         //   if (request.nextUrl.pathname != "/login") {
         return NextResponse.redirect(new URL("/login", request.url));
         //   }
       }
       export const config = {
         matcher: "/about/:path*",
       };

# video no. 16

RENDERING

1. when your all code convert into html page on your page called rendering
   <br>
2. pre-rending - cenerate html in advance on the server side
   <br>
3. static generation - use run build
   <br>
4. server-side rendring - dynamic
   <br>
5. rendering environments -client side rendering and server side rendering

<br>

# video no. 17

CLIENT SIDE AND PRE-RENDERING

client side rendering like your code convert into html page on browser and rew-rendering like server side rendering on your server

some questions in my phone about that

# video no. 18

FETCH API DATA IN CLIENT COMPONENT

     src/app/products/page.js

     "use client";
      import { useEffect, useState } from "react";
      export default function productlist() {
          const [products, setProducts] = useState([]);
          useEffect(async () => {
              const res = await fetch("https://dummyjson.com/products");
              const data = await res.json();
              setProducts(data.products);
          }, []);
      return (
              <div>
                  <h1 className="text-center font-bold">productlist</h1>
                  {products.map((item) => {
                      return (
                          <>

                              <h1>
                                  Product Name : {item.title}
                              </h1>
                              <img src={item.thumbnail} alt="img" />
                          </>
                      );
                  })}
              </div>
          );
      }

# video no. 19

FETCH API DATA IN SERVER COMPONENT

     src/app/productlistserver/page.js


      //we could wright this function in other components
      const findData = async () => {
          const res = await fetch("https://dummyjson.com/products");
          const data = await res.json();
          return data.products;
      };
      export default async function prodeuctlistserver() {
          const fdata = await findData();
          console.log(fdata);
          return (
              <div>
                  <h1 className="text-center font-bold">product list from server</h1>
                  {fdata.map((item) => {
                      return (
                          <div className="text-center">
                              <h1>{item.title}</h1>
                              <img src={item.thumbnail} className="mx-auto" alt="img" />
                          </div>
                      );
                  })}
              </div>
          );
      }

# video no. 20

CLIENT COMPONENTS INSIDE SERVER COMPONENTS

         src/app/productlistserver/page.js

         import CheckPrice from "./checkprice/page";

            //we could wright this function in other components
            const findData = async () => {
                const res = await fetch("https://dummyjson.com/products");
                const data = await res.json();
                return data.products;
            };
            export default async function prodeuctlistserver() {
                const fdata = await findData();
                console.log(fdata);
                return (
                    <div>
                        <h1 className="text-center font-bold">product list from server</h1>
                        {fdata.map((item) => {
                            return (
                                <div className="text-center">
                                    <h1>{item.title}</h1>
                                    <img src={item.thumbnail} className="mx-auto" alt="img" />
                                    <CheckPrice price={item.price} />
                                </div>
                            );
                        })}
                    </div>
                );
            }



            src/app/productlistserver/checkprice/page.js


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



<hr>
<hr>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
