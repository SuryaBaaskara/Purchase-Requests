import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import QuantityInput from "@/components/ui/QuantityInput";
import { formatCurrency } from "@/utils/currency";

export default function ProductCard({
  product,
  quantity,
  onQuantityChange,
  onAdd,
}) {
  const isOutOfStock = product.stock <= 0;

  return (
    <article className="flex min-h-[100px] w-full items-center gap-[10px] rounded-[11px] border border-[#e2e2e5] bg-white p-[10px] shadow-[0_2px_5px_rgba(0,0,0,0.06)]">

      {/* IMAGE */}
      <div className="flex h-[124px] w-[124px] shrink-0 items-center justify-center overflow-hidden rounded-[7px] bg-[#f0f0f2]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="flex min-w-0 flex-1 self-stretch flex-col justify-between">

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">
            <h3 className="text-[16px] font-medium leading-[1.2] text-black">
              {product.name}
            </h3>

            <p className="mt-[12px] text-[12px] text-[#888]">
              Stock HO : {product.stock} Pcs
            </p>
          </div>

          <Badge variant={isOutOfStock ? "out" : "available"}>
            {isOutOfStock ? "Stok Habis" : "Tersedia"}
          </Badge>

        </div>

        <div className="flex items-end justify-between gap-4">

          <div className="flex flex-col items-start">

            <div className="flex items-baseline gap-[4px]">
              <strong className="text-[12px] font-bold text-[#2119ff]">
                {formatCurrency(product.price)}
              </strong>

              <span className="text-[10px] text-[#888]">
                / pcs
              </span>
            </div>

            {!isOutOfStock && (
              <div className="mt-[8px]">
                <QuantityInput
                  value={quantity}
                  max={product.stock}
                  onChange={onQuantityChange}
                />
              </div>
            )}

          </div>

          <div className="flex flex-col items-end">

            <div className="text-right">
              <span className="block text-[8px] text-[#999]">
                Subtotal
              </span>

              <strong className="text-[12px] font-semibold text-black">
                {formatCurrency(product.price * quantity)}
              </strong>
            </div>

            <div className="mt-[6px]">

              {isOutOfStock ? (

                <button
                  type="button"
                  disabled
                  className="flex h-[25px] min-w-[80px] items-center justify-center gap-[8px] rounded-[8px] border border-[#ff5369] bg-white px-[8px] text-[8px] font-medium text-[#ff5369]"
                >
                  <img
                    src="/assets/icon/Danger.png"
                    alt=""
                    className="h-[12px] w-[12px] object-contain"
                    aria-hidden="true"
                  />

                  Stok Habis
                </button>

              ) : (

                <Button
                  type="button"
                  variant="outline"
                  disabled={quantity <= 0}
                  onClick={onAdd}
                  className="flex h-[24px] min-w-[80px] items-center justify-center gap-[8px] px-[8px]"
                >
                  <img
                    src="/assets/icon/buy.png"
                    alt=""
                    className="h-[12px] w-[12px] object-contain"
                    aria-hidden="true"
                  />

                  Tambah
                </Button>

              )}

            </div>
          </div>

        </div>
      </div>
    </article>
  );
}