
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../utils/auth";
import LoginWrapper from "../components/LoginWrapper";
import Footer from "../components/Footer";

export default async function AuthRoute(){
    const session = await getServerSession(authOptions);

    if (session) {
        return redirect("/");
    }

    return (
        <div className="relative min-h-screen flex-col items-center px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto">
            <div className="absolute top-0 start-1/2 w-full h-full bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] bg-no-repeat bg-top bg-cover z-0 transform -translate-x-1/2"></div>
            <LoginWrapper />

            <Footer />
        </div>
    )
}
