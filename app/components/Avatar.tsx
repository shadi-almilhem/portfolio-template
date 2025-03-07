import Image from "next/image";
import { Link } from "next-view-transitions";

export default function Avatar() {
  return (
    <Link href="/" aria-label="Home" className="pointer-events-auto relative">
      <div className="h-10  w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-2 ring-emerald-500 backdrop-blur dark:bg-zinc-800/90 hover:scale-105 dark:ring-emerald-500  duration-300 transition-all">
        <Image
          src={"/avatar.png"}
          alt=""
          width={100}
          height={100}
          className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
          priority
        />
      </div>
    </Link>
  );
}
