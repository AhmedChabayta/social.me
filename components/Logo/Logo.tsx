import Image from "next/image";
import { LogoProps } from "./types";

const Logo = (props: LogoProps) => {
  const { className, image, textLogo } = props;
  if (textLogo && !image) {
    return <h1 className={className}>{textLogo}</h1>;
  } else if (image && !textLogo) {
    <Image
      className={className}
      height={image.height}
      width={image.width}
      alt={image?.alt}
      src={image?.src}
    />;
  }
};
export default Logo;
