type Props = {
  options: string[];
};

export default function List({ options }: Props) {
  return (
    <ul className="space-y-1 mb-[24px] list-disc list-inside font-light">
      {options.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
