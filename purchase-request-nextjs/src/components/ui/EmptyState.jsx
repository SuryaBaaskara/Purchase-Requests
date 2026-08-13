export default function EmptyState() {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-[#d8d8dd] p-6 text-center text-[#777]">
      
      <div className="mb-1 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f1f1f5]">
        <img
          src="/assets/icon/Buy.png"
          alt=""
          className="h-[20px] w-[20px] object-contain"
          aria-hidden="true"
        />
      </div>

      <strong className="text-[12px] text-[#222]">
        Keranjang masih kosong
      </strong>

      <span className="max-w-[190px] text-[12px] leading-relaxed">
        Tambahkan produk dari katalog untuk membuat pesanan.
      </span>
    </div>
  );
}