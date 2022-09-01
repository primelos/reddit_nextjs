import {
  HiOutlineAnnotation,
  HiOutlineGift,
  HiOutlineShare,
} from "react-icons/hi";

const Actions = () => {
  const style = {
    wrapper: "flex items-center space-x-4 p-2",
    icon: "h-4 w-4",
    iconContainer: "flex items-center space-x-1 text-[#818384]",
  };

  return (
    <div className={style.wrapper}>
      <div className={style.iconContainer}>
        <HiOutlineAnnotation className={style.icon} />
        <span className="text-xs">19 comments</span>
      </div>
      <div className={style.iconContainer}>
        <HiOutlineGift />
        <span className="text-xs">Awards</span>
      </div>
      <div className={style.iconContainer}>
        <HiOutlineShare />
        <span className="text-xs">Share</span>
      </div>
    </div>
  );
};

export default Actions;
