import { UpvoteIcon } from "../common/UpvoteIcon";
import { DownvoteIcon } from "../common/DownvoteIcon";

const Vote = () => {
  const style = {
    wrapper: "flex flex-col items-center",
    votes: "py-1 text-xs ",
  };
  null;
  return (
    <div className={style.wrapper}>
      <button>
        <UpvoteIcon />
      </button>
      <p className={style.votes}>{10 - 5}</p>
      <button>
        <DownvoteIcon />
      </button>
    </div>
  );
};

export default Vote;
