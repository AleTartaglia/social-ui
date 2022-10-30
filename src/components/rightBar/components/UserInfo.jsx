import { Buttons } from "./Buttons";

export const UserInfo = ({ text, time, cta, online }) => {
  const onlineDiv = (online) => {
    if (online) {
      return (
        <>
          <div className="online" />
          <span>Jane Doe</span>
        </>
      );
    } else {
      return <span>Jane Doe</span>;
    }
  };

  return (
    <div className="user">
      <div className="userInfo">
        <img
          src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        {text ? (
          <p>
            <span>Jane Doe</span> {text}
          </p>
        ) : (
          onlineDiv(online)
        )}
      </div>
      {time && <span>{time}</span>}
      {cta && <Buttons />}
    </div>
  );
};
