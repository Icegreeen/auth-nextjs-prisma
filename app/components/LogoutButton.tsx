'use client';

import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button 
            onClick={() => signOut({ callbackUrl: `${window.location.origin}/` })} // auth
            className="mt-4 sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
            Log out
        </button>
    )
}