'use client';

import { signIn } from "next-auth/react";

export default function SignInWithGithub() {
    return (
        <button 
            onClick={() => 
                signIn('github', {
                    callbackUrl: `${window.location.origin}`
                })
            }  
            className="mt-4 bg-white text-black"
        >
            Login with github!
        </button>
    )
}