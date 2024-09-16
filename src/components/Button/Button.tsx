export const Button = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <button
    className={`bg-main text-white font-semibold px-6 py-4 rounded-xl ${className}`}
  >
    {text}
  </button>
);
