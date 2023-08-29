import React from "react";
import { ButtonInterface } from "./Button.types";

const Button = React.forwardRef<HTMLButtonElement, ButtonInterface>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <button
        className={`mt-3 w-full flex-1 rounded-md border-[1px] border-[#E6C9A8] bg-white px-6 py-3 text-lg font-semibold text-[#333333] outline-none hover:bg-[#E6C9A8] hover:text-white ${className}`}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
