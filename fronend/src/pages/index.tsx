import type { NextPage } from "next";
import Head from "next/head";
// import axios from "axios";
// import { useState } from "react";
import Hello from "../components/hello";

const Home: NextPage = () => {
  // let test = "1" //
  // const [state, setstate] = useState(""); ///เอาไวเปลี่ยนค่าในinput
  // const [buttoncolor, setbuttoncolor] = useState("bg-blue-500"); ///เอาไวเปลี่ยนค่าในinput
  // const functionA = () => {
  //   setbuttoncolor("bg-red-500");
  // };

  // axios.get('http://localhost:1337/leave-details').then(response => {
  //   console.log(response.data);
  // });
  return (
    <div className="p-8 justify-center items-center h-screen flex bg-black">
      <Head>
        <title>TEST</title>
        <meta name="description" content="TEST" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-6xl text-white font-black	">
        <Hello text="Coming Soon" />
      </div>
      <br />
      <br />
      {/* <input value={state} onChange={(event) => setstate(event.target.value)} /> */}
      <br />
      <br />
      {/* <div>{state}</div> */}

      {/* <button onClick={functionA} className={[buttoncolor, 'text-white font-bold py-2 px-4 rounded'].join(" ")} >
          Button
        </button> */}
    </div>
  );
};

export default Home;
