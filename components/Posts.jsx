import React from "react";
import Post from "./Post";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const posts = [
  {
    id: "123",
    shopName: "ジーズアカデミーFUKUOKA／エンジニア養成学校",
    shopImg: "/gs-logo.png",
    image: "https://gsacademy.jp/uploads/og-3.png",
    caption:
      "福岡市エンジニアフレンドリーシティに所属。エンジニアとしての就職だけでなく、フリーランスになるためのお仕事紹介や共同受託仲間探しまでサポート。",
    prefectures: "福岡県",
    placeInfo: "福岡県福岡市中央区大名 1-3-41 プリオ大名 1F・2F",
    shopTel: "092-761-5777",
    shopEmail: "fukuoka@gsacademy.jp",
  },
  {
    id: "123",
    shopName: "ジーズアカデミーFUKUOKA／エンジニア養成学校",
    shopImg: "/gs-logo.png",
    image: "https://gsacademy.jp/uploads/og-3.png",
    caption:
      "福岡市エンジニアフレンドリーシティに所属。エンジニアとしての就職だけでなく、フリーランスになるためのお仕事紹介や共同受託仲間探しまでサポート。",
    prefectures: "福岡県",
    placeInfo: "福岡県福岡市中央区大名 1-3-41 プリオ大名 1F・2F",
    shopTel: "092-761-5777",
    shopEmail: "fukuoka@gsacademy.jp",
  },
];

const Posts = () => {
  return (
    <div>
      <Masonry
        className="flex animate-slide-fwd"
        breakpointCols={breakpointColumnsObj}
      >
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            img={post.image}
            caption={post.caption}
            prefectures={post.prefectures}
            placeInfo={post.placeInfo}
            shopName={post.shopName}
            //   accountName={post.data().accountName}
            //   profileImg={post.data().profileImg}
            // shopEmail={ post.data().shopEmail}
            // shopTel={ post.data().shopTel}
            // shopHomepage={ post.data().shopHomepage}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default Posts;
