export default function Input({ icon, ...props }) {
  return (
    <label className="flex min-w-0 items-center rounded-[7px] border border-[#bdbdc3] bg-white px-[10px]">
      {icon && (
        <img
          src={icon}
          alt=""
          className="mr-[7px] h-[14px] w-[14px] shrink-0 object-contain"
          aria-hidden="true"
        />
      )}

      <input
        {...props}
        className="w-full border-0 bg-transparent text-[9px] outline-none placeholder:text-[#999]"
      />
    </label>
  );
}
