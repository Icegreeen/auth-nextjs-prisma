'use client'
import { signIn } from "next-auth/react";
import { useState } from "react"

export default function SignInForm() {
    const [ email, setEmail ] = useState<null | string>(null);

    async function SignInWithEmail() {
        const signInResult = await signIn('email', {
            email: email,
            callbackUrl: `${window.location.origin}`,
            redirect: false, 
        })

        {/*
    if(!signInResult?.ok) {
            return toast({
                title: "Well this did not work...",
                description: "Something went wrong, please try again",
                variant: "destructive"
            });
        }

        return toast({
            title: "Check your email",
            description: "A magic link has been sent to you!"
        });
        */}
    };
 
    return (
        <form action={SignInWithEmail}>
            <div className="flex flex-col gap-y-2">
                <label>Email</label>
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    name="email" 
                    type="email" 
                    placeholder="name@example.com" 
                />
            </div>

            <button type="submit" className="mt-4 bg-white text-black" >Login with Email</button>
        </form>
    )
}