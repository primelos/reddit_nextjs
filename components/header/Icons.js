import { IconItem } from "../common/IconItem";

import {
  HiOutlineSparkles,
  HiOutlineGlobe,
  HiOutlineVideoCamera,
  HiOutlineChat,
  HiOutlineBell,
  HiOutlinePlus,
  HiOutlineSpeakerphone,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

const style = {
  wrapper: "flex items-center space-x-2 divide-x divide-[#343536]",
  iconsLeft: "flex items-center space-x-2",
  iconsRight: "flex items-center space-x-2 pl-2",
  freeBtn:
    "bg-coin shadow-coin flex items-center space-x-1 rounded-full py-1 pl-2 pr-4 text-gray-800",
  smallText: "text-sm",
  dollarIcon: "h-4 w-4",
};

const Icons = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.iconsLeft}>
        <IconItem Icon={HiOutlineSparkles} />
        <IconItem Icon={HiOutlineGlobe} />
        <IconItem Icon={HiOutlineVideoCamera} />
      </div>
      <div className={style.iconsRight}>
        <IconItem Icon={HiOutlineChat} />
        <IconItem Icon={HiOutlineBell} />
        <IconItem Icon={HiOutlinePlus} />
        <IconItem Icon={HiOutlineSpeakerphone} />

        <button className={style.freeBtn}>
          <HiOutlineCurrencyDollar className={style.dollarIcon} />
          <span className={style.smallText}>Free</span>
        </button>
      </div>
    </div>
  );
};

export default Icons;
