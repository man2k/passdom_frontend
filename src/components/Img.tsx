import { FC } from "react";

interface prop {
  url: string;
  title?: string;
}
const Img: FC<prop> = ({ url, title }) => {
  return (
    <>
      {console.log(url)}
      <img src={url} alt={`${title}`} className="w-48 h-48 p-1" />
    </>
  );
};

export default Img;
