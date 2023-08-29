import { StaticImageData } from "next/image";

export interface LogoProps {
  textLogo?: string;
  image?: {
    alt: string;
    src: string | StaticImageData;
    height: number;
    width: number;
  };
  className?: string;
}
