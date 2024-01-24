import JoinUsersImage from "../../assets/join_users.svg";

const JoinUsers = () => {
  return (
    // fit image contain
    <div className="h-[34px]">
      <img src={JoinUsersImage} alt="Join Users" className="w-full h-full" />
    </div>
  );
};

export default JoinUsers;
