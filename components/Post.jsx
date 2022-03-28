import { BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as BookmarkIconFilled } from "@heroicons/react/solid";
import Nextlink from "next/link";

const Post = ({ id, img, caption, prefectures, placeInfo, shopName }) => {
  return (
    <div className="bg-white m-1 rounded-3xl relative ">
      {/* img */}
      {/* <Nextlink passHref href={`/postdetail/${id}`}> */}
      <div className="bg-gray-100 p-10 rounded-3xl">
        <div className=" bg-white shadow-2xl shadow-gray-900">
          <img src={img} alt="" className="object-cover w-full" />
        </div>
      </div>
      {/* </Nextlink> */}
      {/* buttons */}
      {/* caption */}
      <p className="px-10 py-5 truncate ">
        {prefectures}
        {placeInfo}
      </p>
      <p className="px-10 py-5 truncate font-bold">
        <span>{caption}</span>
      </p>
    </div>
  );
};

export default Post;
