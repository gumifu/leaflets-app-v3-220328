import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Suggestions from "./Suggestions";

const Flyers = () => {
  const { data: session } = useSession();
  return (
    <main
      className={` grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 mx-auto ${
        !session && "!grid-cols-2"
      }`}
    >
      {/* section */}
      <section className="col-span-4 mt-5">
        {/* Stories */}
        {/* Posts */}
        <Posts />
      </section>
      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          {/* MiniProfile */}
          <div className="fixed top-30 ml-10">
            <MiniProfile />
            {/* Suggestion */}
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
};

export default Flyers;
