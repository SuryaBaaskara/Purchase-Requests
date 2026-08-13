import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";
import { formatCurrency } from "@/utils/currency";
import CartItem from "./CartItem";

export default function OrderSummary({
  items,
  subtotal,
  tax,
  shipping,
  total,
  paymentMethod,
  paymentMethods,
  submitting,
  onPaymentChange,
  onQuantityChange,
  onRemove,
  onClear,
  onSubmit,
}) {
  return (
    <aside aria-labelledby="summary-title">
      <h2 id="summary-title" className="mb-[10px] text-[16px] font-bold">
        Ringkasan Pesanan (Cart)
      </h2>

      <div className="rounded-[11px] border border-[#e0e0e3] bg-white p-[10px] shadow-[0_2px_5px_rgba(0,0,0,.07)]">
        <div className="mb-[7px] flex items-center justify-between">
          <strong className="text-[12px]">
            Item Terpilih ({items.length})
          </strong>

          {items.length > 0 && (
            <button
            type="button"
            className="flex items-center gap-[5px] border-0 bg-transparent p-0 text-[8px] text-[#ff4864]"
            onClick={onClear}
          >
            <img
              src="/assets/icon/Delete.png"
              alt=""
              className="h-[12px] w-[12px] object-contain"
              aria-hidden="true"
            />

            Hapus Semua
          </button>
          )}
        </div>

        {items.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={(quantity) =>
                    onQuantityChange(item.id, quantity)
                  }
                  onRemove={() => onRemove(item.id)}
                />
              ))}
            </div>

            <div className="border-b border-[#eeeeef] py-2">
              <div className="my-1 flex justify-between gap-2 text-[12px]">
                <span className="text-[#000]">Subtotal</span>
                <strong>{formatCurrency(subtotal)}</strong>
              </div>
              <div className="my-1 flex justify-between gap-2 text-[12px]">
                <span className="text-[#888]">Tax (11%)</span>
                <span>{formatCurrency(tax)}</span>
              </div>
              <div className="my-1 flex justify-between gap-2 text-[12px]">
                <span className="text-[#888]">Ekspedisi (Kode JNR)</span>
                <span>{formatCurrency(0)}</span>
              </div>
              <div className="my-1 flex justify-between gap-2 text-[12px]">
                <span className="text-[#888]">Est. Ongkir</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
            </div>

            <div className="my-2 flex justify-between rounded-[7px] border border-[#241cff] px-[9px] py-2 text-[16px] text-[#2119ff]">
              <span>Total Tagihan</span>
              <strong>{formatCurrency(total)}</strong>
            </div>

            <fieldset className="mb-[10px] border-0 p-0">
              <legend className="mb-[6px] text-[12px] font-semibold">
                Metode Pembayaran
              </legend>

              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className="my-[5px] flex items-center gap-[6px] text-[12px]"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={() => onPaymentChange(method.id)}
                    className="m-0 h-[10px] w-[10px]"
                  />
                  <span>{method.label}</span>
                </label>
              ))}
            </fieldset>

            <Button
              type="button"
              onClick={onSubmit}
              loading={submitting}
              disabled={!paymentMethod || !items.length}
              className="flex w-full items-center justify-center gap-[6px]"
            >
              <img
                src="/assets/icon/Send.png"
                alt=""
                className="h-[14px] w-[14px] object-contain"
                aria-hidden="true"
              />

              Submit Order / Bayar
            </Button>
          </>
        )}
      </div>
    </aside>
  );
}
