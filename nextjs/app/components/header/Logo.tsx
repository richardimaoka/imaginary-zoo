import Image from "next/image";
import logo from "./logo.svg";

export function Logo() {
  return <Image src={logo} alt="logo" width="151" height="35" />;
}
