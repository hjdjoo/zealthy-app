"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import { ComponentMap } from "@/const";
import createClientSupabase from "@/utils/supabase/client";

type OnboardingContainerProps = {
  step: number
  components: string[]
}

export default function OnboardingContainer(props: OnboardingContainerProps) {

  const { step, components } = props;
  const router = useRouter();
  const { user } = useUser();

  const renderedComponents = components.map((name, idx) => {

    const Component = ComponentMap[name];
    return (
      <Component key={`step-${step}-component-${idx + 1}`} />
    )

  })

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) return;
    const currentTarget = e.currentTarget;
    try {

      const formData = new FormData(currentTarget);
      formData.append("completed_steps", String(step + 1))
      const form = Object.fromEntries(formData.entries());

      const supabase = createClientSupabase();

      const { error } = await supabase
        .from("users")
        .update(form)
        .eq("id", user.id)

      if (error) {
        console.log(error.message);
        throw error
      }
      // nav to next onboarding step;
      router.push(`/${step + 1}`);
    } catch (e) {
      console.error(e);
      currentTarget.reset();
    }
  }

  if (step > 3) {
    return (
      <div id="onboarding-complete" className={`flex flex-col items-center`}>
        <p className={`text-xl font-bold`}>
          All signed up!
        </p>
        <p>
          Thank you for your information!
        </p>
      </div>
    )
  }

  return (
    <div id="onboarding-container">
      <form action="submit"
        className={`flex flex-col`}
        onSubmit={handleFormSubmit}>
        {renderedComponents}
        <button id="continue-onboarding-button"
          className={`bg-sky-200 px-4 py-1.5 rounded-md`}>
          Save & Continue
        </button>
      </form>
    </div>
  )
}