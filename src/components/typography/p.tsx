import { HTMLAttributes } from "react";
import clsx from "clsx";

export default function P({
  children,
  className,
  onClick,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      onClick={onClick}
      className={clsx(
        "text-[18px] leading-[28px] tracking-[0.54px] font-normal text-black md:text-[14px] md:leading-[18px] lg:text-[22px] lg:leading-[34px] lg:tracking-[0.66px] lg:text-left",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
