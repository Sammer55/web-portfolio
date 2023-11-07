type Props = {
  className?: string;
  children: string;
};

export default function Description({ className, children }: Props) {
  return <p className={`text-md font-light ${className}`}>{children}</p>;
}
