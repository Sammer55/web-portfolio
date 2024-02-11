import Image from "next/image";
import { Projects } from "src/types/projects";

type Props = {
  project: Projects;
};

export default function Picture({ project }: Props) {
  return (
    <Image
      src={`/${project}/logo.svg`}
      width={140}
      height={140}
      alt={`${project} logo.`}
      className="rounded-md m-auto mt-[8px] mb-[24px]"
    />
  );
}
