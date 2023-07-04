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
                ".ENCRYPT.",
                800,
                ".DECRYPT.",
                800,
                ".STEGANOGRAPH.",
                800,
                ".DE STEGANOGRAPH.",
                800,
                ".ENCODE.",
                800,
                ".DECODE.",
                800,
              ]}
              // omitDeletionAnimation={true}
              speed={50}
              deletionSpeed={70}
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
          <Link to="/desteganograph">
            <Card title="De-Steganograph" />
          </Link>
          <Link to="/encode">
            <Card title="Encode" />
          </Link>
          <Link to="/decode">
            <Card title="Decode" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
