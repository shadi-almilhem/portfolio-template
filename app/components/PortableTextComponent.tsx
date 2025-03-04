/* eslint-disable @typescript-eslint/no-explicit-any */
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const SanityImage = ({ value }: any) => {
  if (!value?.asset?._ref) {
    return null;
  }

  return (
    <div className="my-8 relative w-full aspect-video">
      <Image
        src={urlFor(value).url() || "/placeholder.svg"}
        alt={value.alt || "Blog image"}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  );
};

export const PortableTextComponent = {
  types: {
    image: SanityImage,
  },
  block: {
    // Default for paragraphs
    normal: ({ children }: any) => (
      <p className="text-zinc-800 dark:text-zinc-200 mb-4">{children}</p>
    ),
    // Headings
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 mt-6">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 mt-4">
        {children}
      </h4>
    ),
    // Blockquotes
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic text-zinc-700 dark:text-zinc-300 my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    // Lists
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-5 text-zinc-800 dark:text-zinc-200 mb-4">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-5 text-zinc-800 dark:text-zinc-200 mb-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    // List items
    bullet: ({ children }: any) => (
      <li className="text-zinc-800 dark:text-zinc-200 mb-1">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-zinc-800 dark:text-zinc-200 mb-1">{children}</li>
    ),
  },
  marks: {
    // Marks (inline formatting)
    strong: ({ children }: any) => (
      <strong className="font-bold text-zinc-900 dark:text-zinc-100">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-zinc-800 dark:text-zinc-200">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-zinc-100 dark:bg-zinc-800 rounded px-1 py-0.5 font-mono text-sm text-zinc-800 dark:text-zinc-200">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};
