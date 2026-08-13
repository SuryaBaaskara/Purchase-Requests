export default function Button({
  children,
  variant = "primary",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex min-h-[27px] items-center justify-center rounded-[7px] px-3 text-[9px] font-semibold transition";

  const variants = {
    primary: "bg-[#1d16ff] text-white hover:bg-[#1510d9]",
    outline:
      "border border-[#251cff] bg-white text-[#1712ff] hover:bg-[#f5f4ff]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Memproses..." : children}
    </button>
  );
}
