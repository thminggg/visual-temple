export const Button = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <button
    className={`bg-accent text-white font-semibold min-w-[200px] min-h-[60px] rounded-xl ${className}`}
  >
    {text}
  </button>
);
