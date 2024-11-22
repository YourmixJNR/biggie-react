import { HTMLAttributes } from "react";
import clsx from "clsx";

export default function H1({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={clsx(
        "text-[36px] font-normal leading-[34px] lg:text-[96px] lg:leading-[32.143px] lg:font-medium text-black",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
