'use client'
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginWrapper() {
    const [ email, setEmail ] = useState<null | string>(null);

    async function SignInWithEmail() {
        const signInResult = await signIn('email', {
            email: email,
            callbackUrl: `${window.location.origin}`,
            redirect: false, 
        })

        // toast
    };

    return (
        <main id="content" role="main" className="relative max-w-2xl min-h-screen flex-col items-center px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto size-full ">
                    <div className="text-center py-8 px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-center items-center mb-4">
                            <img className="h-16" src="teste2.svg" alt="black hole" />
                        </div>
                            <h1 className="text-2xl text-white sm:text-4xl">
                            Prisma / supabase
                            </h1>
                        <h2 className="mt-1 sm:mt-3 text-4xl font-bold text-white sm:text-6xl">
                            <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">Authentication in Next.js</span>
                        </h2>

                        <form action={SignInWithEmail}>
                            <div className="mt-8 space-y-4">
                                <div className="grid">
                                    <label htmlFor="hs-cover-with-gradient-form-email-1" className="sr-only">Email address</label>
                                    <div className="relative">
                                        <input 
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            name="email" 
                                            id="hs-cover-with-gradient-form-email-1" 
                                            className="py-3 ps-11 pe-4 block w-full bg-white/[.03] border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11" 
                                            placeholder="Email address" 
                                        />
                                        
                                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                            <svg className="flex-shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                        </div>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="mt-4 sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >
                                        Login with Email
                                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                    </button>
                                </div>

                                <span className="relative flex justify-center my-6">
                                    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
                                    <span className="relative z-10  px-6"></span>
                                </span>

                                <div className="grid">
                                    <button 
                                        onClick={() => 
                                            signIn('github', {
                                                callbackUrl: `${window.location.origin}`
                                            })
                                        }  
                                        type="submit" 
                                        className="sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                        Continue with Github
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
    )
}