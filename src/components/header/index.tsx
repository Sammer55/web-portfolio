"use client";

import Link from "next/link";
import Button from "../button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="flex justify-between ">
      <Link href="/">
        <Image width={40} height={40} src="/logo.svg" alt="Logo" quality={1} />
      </Link>
      <Button
        onClick={() =>
          router.push("https://api.whatsapp.com/send?phone=5511957149860")
        }
      >
        contato
      </Button>
    </div>
  );
}
