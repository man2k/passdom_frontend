import { FC } from "react";
import steg from "../assets/steg.png";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Steganograph: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  return (
    <div className="bg-teal-600 w-screen h-screen font-mono">
      <div className="flex justify-center h-full grow items-center">
        <div className="card bg-amber-600 shadow-2xl rounded-lg pt-2 w-auto">
          <figure>
            <img src={steg} alt="Shoes" className="w-48 h-44 p-2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-mono text-black text-2xl h-6 w-full">
              <span className="w-full">
                <TypeAnimation
                  sequence={["Steganograph", 800, "", 300]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                  cursor={false}
                />
              </span>
            </h2>

            <textarea
              className="textarea textarea-warning w-full max-w-xs bg-slate-500 rounded-lg font-mono text-black h-10 p-2 text-base"
              placeholder="Type your secret text here"
            />
            <div className="flex justify-center">
              <input
                className="input input-bordered textarea-warning w-full max-w-xs bg-slate-500 rounded-lg font-mono text-black h-10 p-2"
                placeholder="Type your password here"
                type={isShown ? "text" : "password"}
              />
              {isShown ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute bg-inherit text-black ml-80 mt-2"
                  onClick={() => {
                    setIsShown((prev) => !prev);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute bg-inherit text-black ml-80 mt-2"
                  onClick={() => {
                    setIsShown((prev) => !prev);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </div>

            <input
              type="file"
              className="file-input file-input-error w-full max-w-xs bg-slate-500 rounded-lg font-mono text-black"
              placeholder=""
            />

            <label className="text-black bg-amber-500 rounded-lg shadow-2xl w-40">
              <span className="italic p-2">Choose an Image:</span>
            </label>
            <div className="card-actions justify-end">
              <button
                className="btn bg-slate-400 hover:bg-teal-400 w-full h-full rounded-lg text-black"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steganograph;
