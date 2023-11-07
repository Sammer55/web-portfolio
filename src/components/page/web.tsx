import Image from "next/image";

type Props = {
  url: string;
  src: string;
  alt: string;
};

export default function Web({ url, src, alt }: Props) {
  return (
    <div className="mockup-browser border bg-base-300">
      <div className="mockup-browser-toolbar">
        <div className="input">{url}</div>
      </div>
      <div className="min-h-[440px] bg-base-200 relative">
        <Image
          src={src}
          className="object-cover object-left lg:object-top"
          alt={alt}
          fill
        />
      </div>
    </div>
  );
}
