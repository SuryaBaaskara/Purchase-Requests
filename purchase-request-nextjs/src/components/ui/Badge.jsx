export default function Badge({ children, variant = "available" }) {
  const classes =
    variant === "out"
      ? "bg-[#fff0f2] text-[#fa5b72]"
      : "bg-[#edf2ff] text-[#4c76df]";

  return (
    <span className={`whitespace-nowrap rounded-[5px] px-[5px] py-[2px] text-[12px] ${classes}`}>
      {children}
    </span>
  );
}
