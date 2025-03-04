import clsx from "clsx";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Prose({ className, ...props }: any) {
  return (
    <div className={clsx(className, "prose dark:prose-invert")} {...props} />
  );
}
