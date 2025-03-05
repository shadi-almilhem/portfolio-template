import { forwardRef, ReactNode, CSSProperties } from "react";
import clsx from "clsx";

interface ContainerProps {
  className?: string;
  children: ReactNode;
  style?: CSSProperties; // Add style prop type
}

export const ContainerOuter = forwardRef<HTMLDivElement, ContainerProps>(
  function OuterContainer({ className, children, style, ...props }, ref) {
    return (
      <div ref={ref} className={clsx("", className)} {...props} style={style}>
        <div className="mx-auto  w-full max-w-[90rem] lg:px-8">{children}</div>
      </div>
    );
  }
);

export const ContainerInner = forwardRef<HTMLDivElement, ContainerProps>(
  function InnerContainer({ className, children, style, ...props }, ref) {
    return (
      <div
        ref={ref}
        style={style}
        className={clsx("relative  px-4 lg:px-12", className)}
        {...props}
      >
        <div className="mx-auto  max-w-2xl lg:max-w-6xl">{children}</div>
      </div>
    );
  }
);

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ children, className, style, ...props }, ref) {
    return (
      <ContainerOuter ref={ref} className={className} style={style} {...props}>
        <ContainerInner>{children}</ContainerInner>
      </ContainerOuter>
    );
  }
);
