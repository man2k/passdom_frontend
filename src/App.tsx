import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, Encrypt, Decrypt, Steganograph, DeSteganograph } from "./pages";
import { FC } from "react";

const App: FC = () => {
  return (
    <div
      data-theme="cyberpunk"
      className="w-full bg-teal-700 h-full overflow-hidden"
    >
      <div className="flex justify-center items-center w-full">
        <div className="xl:max-w-[1920px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/encrypt" element={<Encrypt />} />
            <Route path="/decrypt" element={<Decrypt />} />
            <Route path="/steganograph" element={<Steganograph />} />
            <Route path="/desteganograph" element={<DeSteganograph />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
