import { HTMLAttributes } from "react";
import clsx from "clsx";

export default function Text({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={clsx(
        "text-center font-normal text-[#3A3A3A] tracking-[0.48px] text-[16px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
