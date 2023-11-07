type Props = {
  children: string;
};

export default function Title({ children }: Props) {
  return <h1 className="font-semibold text-lg text-center">{children}</h1>;
}
