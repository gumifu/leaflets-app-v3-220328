import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Suggestions from "./Suggestions";

const Flyers = () => {
  return (
    <main
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto"
      //   className={` grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 mx-auto ${
      //     !session && "!grid-cols-2"
      //   }`}
    >
      {/* section */}
      <section className="col-span-2 mt-5">
        {/* Stories */}
        {/* Posts */}
        <Posts />
      </section>
      <section className="hidden xl:inline-grid md:col-span-1">
        {/* MiniProfile */}
        <div className="fixed top-30">
          <MiniProfile />
          {/* Suggestion */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Flyers;
