"use client";

import { useMemo, useState } from "react";
import { products, paymentMethods } from "@/data/products";
import Header from "@/components/layout/Header";
import ProductCatalog from "@/features/purchase-request/components/ProductCatalog";
import OrderSummary from "@/features/purchase-request/components/OrderSummary";
import {
  clampQuantity,
  getCartItems,
  getShipping,
  getSubtotal,
  getTax,
} from "@/utils/cart";

export default function PurchaseRequestPage() {
  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("transfer");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [submitting, setSubmitting] = useState(false);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.code.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const cartItems = useMemo(
    () => getCartItems(cart, products),
    [cart]
  );

  const subtotal = useMemo(
    () => getSubtotal(cartItems),
    [cartItems]
  );

  const tax = useMemo(() => getTax(subtotal), [subtotal]);
  const shipping = useMemo(() => getShipping(cartItems), [cartItems]);
  const total = subtotal + tax + shipping;

  function updateCatalogQuantity(productId, nextQuantity) {
    const product = products.find((item) => item.id === productId);
    if (!product) return;

    setQuantities((current) => ({
      ...current,
      [productId]: clampQuantity(nextQuantity, product.stock),
    }));
  }

  function addToCart(productId) {
    const product = products.find((item) => item.id === productId);
    if (!product || product.stock <= 0) return;

    const selectedQuantity = quantities[productId] ?? 0;
    if (selectedQuantity <= 0) return;

    setCart((current) => ({
      ...current,
      [productId]: clampQuantity(
        (current[productId] ?? 0) + selectedQuantity,
        product.stock
      ),
    }));
  }

  function updateCartQuantity(productId, nextQuantity) {
    const product = products.find((item) => item.id === productId);
    if (!product) return;

    const quantity = clampQuantity(nextQuantity, product.stock);

    setCart((current) => {
      if (quantity === 0) {
        const next = { ...current };
        delete next[productId];
        return next;
      }

      return { ...current, [productId]: quantity };
    });
  }

  function removeFromCart(productId) {
    setCart((current) => {
      const next = { ...current };
      delete next[productId];
      return next;
    });
  }

  function clearCart() {
    setCart({});
  }

  async function submitOrder() {
    if (!cartItems.length || submitting) return;

    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setSubmitting(false);
    window.alert("Pesanan berhasil disimulasikan.");
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="mx-auto w-[calc(100%-48px)] max-w-[1440px] py-8 sm:py-10">
        <section className="mb-5">
          <h1 className="text-[24px] font-bold leading-tight">
            Form Pemesanan Stock Cabang (Purchase Order)
          </h1>
          <p className="mt-1 text-[16px] text-[#888]">
            Pilih produk yang dibutuhkan untuk operasional outlet anda
          </p>
        </section>

        <div className="grid items-start gap-[18px] lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
          <ProductCatalog
            products={filteredProducts}
            quantities={quantities}
            search={search}
            category={category}
            onSearchChange={setSearch}
            onCategoryChange={setCategory}
            onQuantityChange={updateCatalogQuantity}
            onAdd={addToCart}
          />

          <OrderSummary
            items={cartItems}
            subtotal={subtotal}
            tax={tax}
            shipping={shipping}
            total={total}
            paymentMethod={paymentMethod}
            paymentMethods={paymentMethods}
            submitting={submitting}
            onPaymentChange={setPaymentMethod}
            onQuantityChange={updateCartQuantity}
            onRemove={removeFromCart}
            onClear={clearCart}
            onSubmit={submitOrder}
          />
        </div>
      </main>
    </div>
  );
}
