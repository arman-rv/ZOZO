const Items = ({ title, link }) => {
  return (
    <a
      href={link}
      className="text-primary-600 text-2xl cursor-pointer font-bold"
    >
      {title}
    </a>
  );
};

export { Items };
