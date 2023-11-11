import Image from "next/image";
import Link from "next/link";

const username = "Sammer55";
const twitter = "https://twitter.com/sammerduarte";
const linkedin = "https://www.linkedin.com/in/sammer-duarte/";
const github = `https://github.com/${username}`;
const developeach = "https://developeach.com/";

export default function User() {
  return (
    <div className="text-white pb-[16px] pt-[38px] px-[8px] relative mb-[16px] rounded-md bg-base-100">
      <div className="absolute left-[8px] top-[-30px] drop-shadow-lg">
        <Image
          style={{ borderRadius: "8px" }}
          width={60}
          height={60}
          src="/avatar.svg"
          alt="Sammer avatar."
        />
      </div>
      <h1 className="text-lg font-semibold">Oi, eu sou o Sammer! 👋🏻</h1>
      <p className="font-extralight">
        Desenvolvedor Front-end com 3 anos de experiência com foco em aplicações
        mobile utilizando React Native. Sou especialista em HTML, CSS,
        JavaScript, TypeScript, ReactJs, e NextJs tendo o React Native como meu
        principal domínio.
      </p>
      <div className="mt-[24px] flex justify-end mr-[8px]">
        <div className="tooltip" data-tip="Twitter / X">
          <Link aria-label="Twitter" href={twitter} target="_blank">
            <i className="text-md p-[16px] devicon-twitter-original" />
          </Link>
        </div>

        <div className="tooltip" data-tip="LinkedIn">
          <Link aria-label="LinkedIn" href={linkedin} target="_blank">
            <i className="text-lg p-[16px] devicon-linkedin-plain" />
          </Link>
        </div>

        <div className="tooltip" data-tip="GitHub">
          <Link aria-label="GitHub" href={github} target="_blank">
            <i className="text-xl p-[16px] devicon-github-original" />
          </Link>
        </div>

        <div className="tooltip" data-tip="Developeach">
          <Link aria-label="Developeach" href={developeach} target="_blank">
            <Image
              src="/developeach.svg"
              width={24}
              height={24}
              alt="developeach"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
