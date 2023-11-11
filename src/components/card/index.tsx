"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
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

  const CustomIcon = ({
    src,
    style,
  }: {
    src: string;
    style?: React.CSSProperties;
  }) => (
    <Image width={18} height={18} style={style} alt="Tech Icon" src={src} />
  );

  const techIcon = {
    next: (
      <CustomIcon
        style={{ filter: "invert(1)" }}
        src={`${devicon}/nextjs/nextjs-original.svg`}
      />
    ),
    react: <CustomIcon src={`${devicon}/react/react-original.svg`} />,
    typescript: (
      <CustomIcon src={`${devicon}/typescript/typescript-original.svg`} />
    ),
    javascript: (
      <CustomIcon src={`${devicon}/javascript/javascript-original.svg`} />
    ),
    firebase: <CustomIcon src={`${devicon}/firebase/firebase-plain.svg`} />,
    android: <CustomIcon src={`${devicon}/android/android-plain.svg`} />,
    ios: (
      <CustomIcon
        style={{ filter: "invert(1)" }}
        src={`${devicon}/apple/apple-original.svg`}
      />
    ),
  };

  return (
    <div
      onClick={handleGoToProject}
      className="hover:translate-y-[-3px] transition ease-in-out cursor-pointer card rounded-md bg-base-100 drop-shadow-lg"
    >
      {!isResume && (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            style={{ width: "100%", objectFit: "cover", height: 160 }}
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
              <div
                key={tech}
                className="tooltip tooltip-bottom"
                data-tip={tech}
              >
                {techIcon[tech]}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
