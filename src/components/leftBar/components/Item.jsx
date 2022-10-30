export const Item = ({ src, text }) => {
  return (
    <div className="item">
      <img src={src} alt="" />
      <span>{text}</span>
    </div>
  );
};
