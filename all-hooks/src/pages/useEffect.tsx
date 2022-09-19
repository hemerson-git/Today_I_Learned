import { useEffect, useState } from "react";
import { GoBack } from "../components/GoBack";
import { Shuffle } from "phosphor-react";

import "./styles/useEffect.css";

export function UseEffectExample() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    console.log(`Hello, ${name}`);
  }, [name]);

  useEffect(() => {
    // .then()

    // if (!image) {
    //   fetch("https://api.waifu.pics/sfw/waifu").then((response) => {
    //     response.json().then((body) => {
    //       setImage(body.url);
    //     });
    //   });
    // }

    // create function and call it

    // if (!image) {
    //   async function getImage() {
    //     const response = await fetch("https://api.waifu.pics/sfw/waifu");
    //     const { url } = await response.json();
    //     setImage(url);
    //   }

    //   getImage();
    // }

    // IIFE Immediately Invoked Function Expression

    if (!image) {
      (async () => {
        const response = await fetch("https://api.waifu.pics/sfw/waifu");
        const { url } = await response.json();
        setImage(url);
      })();
    }
  }, [image]);

  useEffect(() => {
    return () => {
      console.log("Vai desmontar");
    };
  }, []);

  return (
    <>
      <GoBack />

      <span className="name">{name || "Type On Input"}</span>

      <img src={image} alt="" />

      <button type="button" onClick={() => setImage("")} className="random-img">
        Random Image
        <Shuffle weight="bold" size={18} />
      </button>

      <input
        type="text"
        placeholder="Type What you want"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
