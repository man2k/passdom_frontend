import Card from "../components/Card";
import { FC } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const Home: FC = () => {
  return (
    <div className="w-full h-full bg-teal-600 flex flex-col justify-center">
      <div className="bg-teal-600 w-full justify-center">
        <div className="flex justify-center pb-2">
          <h1 className="card text-8xl flex flex-wrap font-extralight font-mono text-slate-950">
            <TypeAnimation
              sequence={[
                ".Encrypt.",
                800,
                ".Decrypt.",
                800,
                ".Steganograph.",
                800,
                ".De-Steganograph.",
                800,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="h1"
              cursor={false}
            />
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-12">
          <Link to="/encrypt">
            <Card title="Encrypt" />
          </Link>
          <Link to="/decrypt">
            <Card title="Decrypt" />
          </Link>
          <Link to="/steganograph">
            <Card title="Steganograph" />
          </Link>
          <Link to="/desteganogrph">
            <Card title="De-Steganograph" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
