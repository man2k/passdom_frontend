import { FC } from "react";
import encryption from "../assets/encryption (1).png";
import { ChipherList } from "../constants";

const Encrypt: FC = () => {
  return (
    <div className="bg-teal-600 w-screen h-screen">
      <div className="flex justify-center">
        <div className="card w-96 bg-amber-600 shadow-xl mt-32 rounded-lg">
          <figure>
            <img src={encryption} alt="Shoes" className="w-48 h-48" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Encrypt</h2>
            <input
              type="file"
              className="file-input file-input-error w-full max-w-xs bg-slate-300 rounded-lg font-mono"
            />
            <select className="select select-secondary w-full max-w-xs uppercase">
              <option disabled selected className="lowercase">
                Select your algorithm!
              </option>
              {ChipherList.map((item) => (
                <option>{item.value}</option>
              ))}
            </select>

            <div className="card-actions justify-end">
              <button className="btn bg-slate-400 hover:bg-teal-400 w-full h-full rounded-lg">
                Encrypt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encrypt;
