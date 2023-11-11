import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="flex items-center justify-center mt-[40px] mb-[24px]">
      <p className="text-white text-center">
        &copy; {year} · feito com ❤️ por{" "}
        <Link
          style={{ color: "#69d6fb", textDecoration: "underline" }}
          href="https://github.com/Sammer55"
          target="_blank"
        >
          Sammer
        </Link>
      </p>
    </div>
  );
}
