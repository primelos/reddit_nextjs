import Image from "next/image";

const Info = () => {
  const style = {
    wrapper: "flex items-center space-x-1 text-xs text-[#818384]",
    profilePic: "rounded-full",
  };
  return (
    <div className={style.wrapper}>
      <Image
        width={20}
        height={20}
        className={style.profilePic}
        src="https://carlosfvenegas.com/images/gitPic.jpg"
        alt="user-image"
      />
      <div>primelos</div>
      <div>•</div>
      <span>Posted by Carlos Venegas </span>
      <span> • </span>
      <span> Aug 31</span>
    </div>
  );
};

export default Info;
