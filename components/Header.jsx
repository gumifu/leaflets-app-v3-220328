import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  //   const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  return (
    <div className="shadow-md border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-5 xl:mx-auto">
        {/* left */}
        <div className="w-24 h-24 relative hidden lg:inline-grid cursor-pointer">
          <Image src="/logo-main-black.svg" layout="fill" objectFit="contain" />
        </div>
        <div className=" h-24 w-24 relative lg:hidden flex-shrink-0 cursor-pointer">
          <Image src="/logo-type-black.svg" layout="fill" objectFit="contain" />
        </div>
        {/* midddle */}
        <div className="relative mt-1 p-3 rounded-md max-w-xl">
          <div className=" absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="検索"
            className="flex-grow w-full transparent h-14 bg-gray-50 block pl-10 sm:text-sm border-gray-500 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50 rounded-full"
          />
        </div>
        {/* right */}
        <div className="flex items-center mr-5 justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer " />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45 " />
                <div className=" absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex justify-center items-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn "
              />
              <UserGroupIcon className="navBtn " />
              <HeartIcon className="navBtn " />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile pic"
                className="h-10 w-10 object-cover rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button className="text-blue-400 text-lg" onClick={signIn}>
              サインイン
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
