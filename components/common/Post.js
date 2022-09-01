import Vote from "../feed/Vote";
import Actions from "../feed/Actions";
import Info from "../feed/Info";

const Post = () => {
  const style = {
    wrapper:
      " flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]",
    post: "flex flex-col space-y-1 cursor-pointer",
    postTitle: "text-lg font-medium text-[#d&dadc]",
    postContent: "text-sm font-light text-gray-400",
  };

  return (
    <div className={style.wrapper}>
      <Vote />
      <div className={style.post}>
        <Info />
        <h1 className={style.postTitle}>
          How to build a Reddit clone with Next.js 👀
        </h1>
        <p className={style.postContent}>
          This post will show a you how to build frontend and backend with
          supabase
        </p>
        <Actions />
      </div>
    </div>
  );
};

export default Post;
