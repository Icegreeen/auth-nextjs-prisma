
import { getServerSession } from "next-auth";
import SignInWithGithub from "../components/SignInWithGithub";
import { redirect } from "next/navigation";
import { authOptions } from "../utils/auth";
import SignInForm from "../components/SignInForm";

export default async function AuthRoute(){
    const session = await getServerSession(authOptions);

    if (session) {
        return redirect("/");
    }

    return (
        <div className="w-screen flex items-center justify-center flex-col">
            <div>
                <h1>Please sign in</h1>
                <h2>To acess the private page you have to be authenticated</h2>
            </div>

            <div className="flex flex-col">
                <SignInForm />

                <SignInWithGithub />
            </div>
        </div>
    )
}