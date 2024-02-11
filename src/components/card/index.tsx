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
    next: <i className="devicon-nextjs-original" />,
    react: <i className="devicon-react-original colored" />,
    reactnative: <i className="devicon-react-original" />,
    typescript: <i className="devicon-typescript-plain colored" />,
    javascript: <i className="devicon-javascript-plain colored" />,
    firebase: <i className="devicon-firebase-plain colored" />,
    android: <i className="devicon-android-plain colored" />,
    ios: <i className="devicon-apple-original" />,
    php: <i className="devicon-php-plain" />,
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
