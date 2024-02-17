
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello from the index page, this is a public route</h1>

      {session ? (
        <div>
          <h1>You are logged in!</h1>
          <LogoutButton />
        </div>
      ): (
        <div>
          <h1>Please log in to see something special</h1>

          <button className="mt-4 bg-white text-black">
            <Link href="/auth">Login</Link>
          </button>
        </div>
      )}
  
    </main>
  );
}
