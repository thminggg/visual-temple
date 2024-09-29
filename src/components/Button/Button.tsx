export const Button = ({
  text,
  className,
  handleClick,
}: {
  text: string;
  className?: string;
  handleClick?: () => void;
}) => (
  <button
    className={`bg-accent text-white font-semibold min-w-[200px] min-h-[60px] rounded-xl ${className}`}
    onClick={handleClick}
  >
    {text}
  </button>
);
