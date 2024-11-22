import { HTMLAttributes } from "react";
import clsx from "clsx";

export default function H3({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={clsx(
        "text-black text-[32px] md:text-[20px] md:leading-[20px] leading-[36px] lg:text-[48px] lg:leading-[53px] font-semibold capitalize tracking-[1.44px]",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
