type Props = {
  children: string;
};

export default function Subtitle({ children }: Props) {
  return <h2 className="font-medium text-lg my-[16px]">{children}</h2>;
}
