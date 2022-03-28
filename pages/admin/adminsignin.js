import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

export default function AdminSignIn({ providers }) {
  return (
    <div className="bg-gradient-to-br from-gray-700 to-black h-screen overflow-y-scroll scrollbar-hide">
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center min-h-screen -mt-32 py-2  px-14">
        <img src="/logo-main-white.svg" className="w-60" />

        <p className="font-lg italic mt-5 text-gray-100">leafletsへようこそ!</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/admin/adminindex" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
