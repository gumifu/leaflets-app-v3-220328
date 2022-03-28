import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

function signIn({ providers }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen -mt-16 py-2  px-14 text-center">
        <img src="/logo-main-black.svg" className="w-60" />

        <p className="font-lg italic mt-5 text-gray-900">
          leaflets Upロードページ！
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, {
                    callbackUrl: "/admin/adminindex",
                  })
                }
              >
                {/* <button onClick={() => SignIntoProvider(provider.id)}> */}
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signIn;
