"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { memo } from "react";
import { Projects, Techs } from "src/types/projects";

type Props = {
  project?: Projects;
  techs: Techs[];
  title: string;
  description: string;
  badge?: string | number;
  isResume?: boolean;
};

const devicon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// eslint-disable-next-line react/display-name
export const CustomDevicon = memo(
  ({ src, style }: { src: string; style?: React.CSSProperties }) => (
    <Image
      width={18}
      height={18}
      style={style}
      alt="Tech Icon"
      src={`${devicon}/${src}`}
    />
  )
);

export default function Card({
  project,
  techs,
  title,
  description,
  badge,
  isResume,
}: Props) {
  const router = useRouter();
  const handleGoToProject = () => router.push(`/${project}`);

  const techIcon = {
    next: (
      <CustomDevicon
        style={{ filter: "invert(1)" }}
        src={`nextjs/nextjs-original.svg`}
      />
    ),
    react: <CustomDevicon src={`react/react-original.svg`} />,
    typescript: <CustomDevicon src={`typescript/typescript-original.svg`} />,
    javascript: <CustomDevicon src={`javascript/javascript-original.svg`} />,
    firebase: <CustomDevicon src={`firebase/firebase-plain.svg`} />,
    android: <CustomDevicon src={`android/android-plain.svg`} />,
    ios: (
      <CustomDevicon
        style={{ filter: "invert(1)" }}
        src={`apple/apple-original.svg`}
      />
    ),
  };

  return (
    <div
      onClick={handleGoToProject}
      className="hover:translate-y-[-3px] transition ease-in-out cursor-pointer card rounded-md bg-base-100 drop-shadow-lg"
    >
      {!isResume && (
        <figure className="h-[160px] relative">
          <Image
            fill
            loading="eager"
            objectFit="cover"
            src={`/${project}/logo.svg`}
            alt={`Imagem representando o projeto ${project}`}
          />
        </figure>
      )}
      <div className="card-body p-[16px]">
        <h2 className="card-title">
          {title}
          {badge && <div className="badge badge-secondary">{badge}</div>}
        </h2>
        <p>{description}</p>
        {techs && (
          <div className="card-actions justify-end">
            {techs?.map((tech: Techs) => (
              <div key={tech} data-tip={tech}>
                {techIcon[tech]}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
