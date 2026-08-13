export default function QuantityInput({
  value,
  min = 0,
  max,
  onChange,
  disabled = false,
}) {
  const updateQuantity = (nextValue) => {
    const next = Math.min(
      Math.max(Number(nextValue) || 0, min),
      max
    );

    onChange(next);
  };

  return (
    <div
      className="
        flex
        h-[27px]
        w-[120px]
        items-center
        overflow-hidden
        rounded-[6px]
        border
        border-[#a9a9ae]
        bg-white
      "
      aria-label="Jumlah produk"
    >
      <button
        type="button"
        disabled={disabled || value <= min}
        onClick={() => updateQuantity(value - 1)}
        aria-label="Kurangi jumlah"
        className="
          flex
          h-full
          w-[35px]
          items-center
          justify-center
          border-0
          bg-white
          text-[12px]
          text-black
        "
      >
        −
      </button>

      <span
        className="
          flex-1
          text-center
          text-[10px]
          text-black
        "
        aria-live="polite"
      >
        {value}
      </span>

      <button
        type="button"
        disabled={disabled || value >= max}
        onClick={() => updateQuantity(value + 1)}
        aria-label="Tambah jumlah"
        className="
          flex
          h-full
          w-[35px]
          items-center
          justify-center
          border-0
          bg-white
          text-[12px]
          text-black
        "
      >
        +
      </button>
    </div>
  );
}