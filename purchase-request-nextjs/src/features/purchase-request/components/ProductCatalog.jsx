import Input from "@/components/ui/Input";
import ProductCard from "./ProductCard";

export default function ProductCatalog({
  products,
  quantities,
  search,
  category,
  onSearchChange,
  onCategoryChange,
  onQuantityChange,
  onAdd,
}) {
  return (
    <section aria-labelledby="catalog-title">
      <h2 id="catalog-title" className="mb-[12px] text-[16px] font-bold">
        Katalog Produk HO
      </h2>

      <div className="mb-2 grid h-[35px] grid-cols-[minmax(0,1fr)_130px_34px] gap-2 max-[430px]:grid-cols-[1fr_34px]">
        <Input
          type="search"
          placeholder="Cari produk, kode, atau kategori"
          aria-label="Cari produk"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          icon="/assets/icon/search.png"
        />

        <div className="relative max-[430px]:hidden">
            <select
              className="h-full w-full appearance-none rounded-[7px] border border-[#bdbdc3] bg-white px-[10px] pr-[28px] text-[9px] outline-none"
              aria-label="Filter kategori"
              value={category}
              onChange={(event) => onCategoryChange(event.target.value)}
            >
              <option value="all">Semua Kategori</option>
              <option value="modul">Modul</option>
              <option value="perlengkapan">Perlengkapan</option>
            </select>

            <img
              src="/assets/icon/Arrow.png"
              alt=""
              className="pointer-events-none absolute right-[10px] top-1/2 h-[12px] w-[12px] -translate-y-1/2 object-contain"
              aria-hidden="true"
            />
          </div>

        <button
          type="button"
          className="flex h-[34px] w-[34px] items-center justify-center rounded-[7px] border border-[#bdbdc3] bg-white"
          aria-label="Filter tambahan"
        >
          <img
            src="/assets/icon/filter.png"
            alt=""
            className="h-[16px] w-[16px] object-contain"
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="scrollbar-thin max-h-[600px] space-y-2 overflow-y-auto rounded-[10px] border border-[#ededf0] p-[9px] max-lg:max-h-none">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={quantities[product.id] ?? 0}
              onQuantityChange={(quantity) =>
                onQuantityChange(product.id, quantity)
              }
              onAdd={() => onAdd(product.id)}
            />
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-[#d8d8dd] p-10 text-center text-[10px] text-[#777]">
            Produk tidak ditemukan.
          </div>
        )}
      </div>
    </section>
  );
}
