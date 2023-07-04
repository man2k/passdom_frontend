import { FC } from "react";
import encryption from "../assets/encryption (1).png";
import decryption from "../assets/browser.png";
import steg from "../assets/steg.png";
import desteg from "../assets/password.png";

interface CardProp {
  title: string;
}

const Card: FC<CardProp> = ({ title }) => {
  return (
    <div className="card w-96 h-72 bg-teal-400 rounded-xl mx-5 my-2">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{title}</h2>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        {title === "Encrypt" ? (
          <img src={encryption} alt="Encrypt" className="w-48 h-48 p-2" />
        ) : (
          <></>
        )}
        {title === "Decrypt" ? (
          <img src={decryption} alt="Encrypt" className="w-48 h-48 p-2" />
        ) : (
          <></>
        )}
        {title === "Steganograph" ? (
          <img src={steg} alt="Encrypt" className="w-48 h-48 p-2" />
        ) : (
          <></>
        )}
        {title === "De-Steganograph" ? (
          <img src={desteg} alt="Encrypt" className="w-48 h-48 p-2" />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Card;
