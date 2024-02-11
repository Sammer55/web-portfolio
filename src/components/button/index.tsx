type Props = {
  children: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
};

export default function Button({ children, icon, onClick }: Props) {
  return (
    <button className="btn btn-active btn-primary btn-sm" onClick={onClick}>
      {icon}
      {children}
    </button>
  );
}
