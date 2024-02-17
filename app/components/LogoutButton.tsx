'use client';

import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button 
            onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })}
            className="mt-4 bg-white text-black"
        >
            Log out
        </button>
    )
}