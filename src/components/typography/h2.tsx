import { HTMLAttributes } from "react";
import clsx from "clsx";

export default function H2({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={clsx(
        "text-[32px] font-semibold text-[#000] text-center leading-[36px] tracking-[0.96px] lg:text-left lg:text-[60px] lg:leading-[64px] lg:tracking-[1.8px]",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
