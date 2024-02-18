import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import Link from "next/link";
import Footer from "./components/Footer";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="relative min-h-screen flex-col items-center px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto">
      <div className="absolute top-0 start-1/2 w-full h-full bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] bg-no-repeat bg-top bg-cover z-0 transform -translate-x-1/2"></div>
        <main  className="relative max-w-2xl min-h-screen flex-col items-center px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto size-full ">
          {session ? (
            <div className="grid">
              <div className="flex justify-center items-center mb-4">
                <img className="h-68 rounded-lg" src="rock.gif" alt="gaara vs rock lee" />
              </div>
              <h1 className="text-center">You are logged in!</h1>
              <LogoutButton />
            </div>
          ): (
            <div className="grid">
              <div className="flex justify-center items-center mb-4">
                <img className="h-16" src="teste2.svg" alt="black hole" />
              </div>

              <h1>Please log in to see something special</h1>

              <button className="mt-4 sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <Link href="/auth">Login</Link>
              </button>
            </div>
          )}
        </main>

        <Footer />
    </div>
  );
}
