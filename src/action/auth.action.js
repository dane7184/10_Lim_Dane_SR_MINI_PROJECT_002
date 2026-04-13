"use server";

import {signIn, signOut} from "../auth";
import {isRedirectError} from "next/dist/client/components/redirect-error";

export async function loginAction(data){
    const {email, password} = data;

    try {
        const res = await signIn("credentials", {
            email,
            password,
            // redirect: false,
            redirectTo: "/"
        });

        if (res && res.error){
            throw new Error("Invalid credentials");
        }

        return res;
    } catch(err){
        if (isRedirectError(err)){
            throw err;
        }

        return { error: err.message };
    }
}

export async function logOutAction() {
  await signOut({ redirectTo: "/" });
  router.refresh();
}