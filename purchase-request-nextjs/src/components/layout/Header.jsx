export default function Header() {
  return (
    <header className="h-16 border-b border-[#dedee4] bg-white shadow-[0_1px_5px_rgba(0,0,0,.06)]">
      <div className="mx-auto flex h-full w-[calc(100%-48px)] max-w-[1440px] items-center gap-[18px]">
        <a
          href="/"
          className="relative flex h-9 w-[100px] items-center"
          aria-label="Aemome"
        >
          <img
            src="/assets/logo.png"
            className="max-h-8 w-[141px] object-contain"
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.nextElementSibling.style.display = "block";
            }}
          />
        </a>

        <div className="h-[30px] w-px bg-[#d1d1d1]" />

        <div className="flex min-w-0 flex-col gap-px">
          <span className="text-[12px] text-[#8c8c8c]">Cabang</span>
          <button
            type="button"
            className="flex items-center justify-between gap-4 border-0 bg-transparent p-0 text-left !text-[16px] !font-semibold"
          >
            Outlet Denpasar Utara

          </button>
        </div>

        <button
          type="button"
          className="ml-auto flex items-center gap-[7px] rounded-2xl border border-[#a8a8a8] bg-white px-[13px] py-[7px] text-[10px]"
        >
          <img
            src="/assets/icon/bag.png"
            alt=""
            className="h-[13px] w-[13px] object-contain"
            aria-hidden="true"
          />
          <span className="hidden sm:inline">Order History</span>
        </button>
      </div>
    </header>
  );
}
