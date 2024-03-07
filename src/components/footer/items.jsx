const Items = ({ img, title, desc }) => {
  return (
    <div className="flex w-full items-center gap-4">
      <div className="w-[68px] brightness-95">
        <img src={img} className="w-full h-ull" />
      </div>
      <p className="text-primary-600 text-2xl">
        <span className="font-bold">{title}</span>
        {desc}
      </p>
    </div>
  );
};

export { Items };
