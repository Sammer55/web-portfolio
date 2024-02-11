import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  objectPosition?: "bottom" | "top";
};

export default function Mobile({ src, alt, objectPosition = "bottom" }: Props) {
  return (
    <div className="flex items-center my-[16px]">
      <div className="mockup-phone">
        <div className="camera" />
        <div className="display">
          <div className="relative artboard artboard-demo phone-1">
            <Image
              src={src}
              objectFit="cover"
              objectPosition={objectPosition}
              alt={alt}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
