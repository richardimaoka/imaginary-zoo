import Image from "next/image";
import svgFile from "./chevron_right.svg";

export function RightArrow() {
  return <Image src={svgFile} alt="chevron right" />;
}
