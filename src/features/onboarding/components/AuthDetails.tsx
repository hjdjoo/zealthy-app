"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import createClientSupabase from "@/utils/supabase/client";


export default function AuthDetails() {

  const router = useRouter();

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    try {
      // console.log(name, value);
      const formData = new FormData(currentTarget);
      const form = Object.fromEntries(formData.entries());

      const { email, password } = form;

      const supabase = createClientSupabase();

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", String(email))
        .eq("password", String(password))
        .single();

      if (!data) {
        console.log(error.message);
        console.log("No user found - initializing profile..");
        const { error: insertError } = await supabase
          .from("users")
          .insert({
            email: String(email),
            password: String(password)
          })

        if (insertError) {
          console.error(insertError.message);
          throw insertError
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      currentTarget.reset();
      router.push("/onboarding/2");
    }
  }

  return (
    <form id="auth-details"
      className={`flex flex-col items-center justify-between min-w-[350px]`}
      action="submit"
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="email"
        className={`flex w-full mb-2`}>
        <p className={`flex grow justify-end mr-2`}>
          email:
        </p>
        <input id="email"
          type="text"
          name="email"
          autoComplete="off"
          className={`w-3/5 border border-black rounded-sm px-2`}
        />
      </label>
      <label htmlFor="password"
        className={`flex w-full mb-2`}>
        <p className={`flex grow justify-end mr-2`}>
          password:
        </p>
        <input id="password"
          type="password"
          name="password"
          autoComplete="off"
          className={`w-3/5 border border-black rounded-sm px-2`}
        />
      </label>
      <button className={`bg-sky-200 hover:bg-sky-300 hover:cursor-pointer border-gray-50 my-2 py-1.5 px-3 rounded-md`}>
        Submit
      </button>
    </form>
  )

}