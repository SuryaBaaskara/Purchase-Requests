import QuantityInput from "@/components/ui/QuantityInput";
import { formatCurrency } from "@/utils/currency";

export default function CartItem({
  item,
  onQuantityChange,
  onRemove,
}) {
  return (
    <article className="flex gap-2 border-b border-[#eeeeef] py-2">
      <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] bg-[#f0f0f2]">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex justify-between gap-2">
          <div>
            <h3 className="mb-0.5 text-[12px] font-medium">{item.name}</h3>
            <span className="text-[8px] text-[#999]">
              {formatCurrency(item.price)} × {item.quantity}
            </span>
          </div>

          <button
            type="button"
            className="h-fit border-0 bg-transparent p-0 text-[12px] leading-none text-[#ff4864]"
            aria-label={`Hapus ${item.name}`}
            onClick={onRemove}
          >
            ×
          </button>
        </div>

        <div className="mt-[12px] flex items-center justify-between">
          <QuantityInput
            value={item.quantity}
            max={item.stock}
            onChange={onQuantityChange}
          />
          <strong className="text-[12px]">
            {formatCurrency(item.price * item.quantity)}
          </strong>
        </div>
      </div>
    </article>
  );
}
