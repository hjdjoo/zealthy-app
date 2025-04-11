"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import EditOnboardingSelect from "./EditOnboarding.Select";
import camelToTitle from "@/utils/camelToTitle";
import createClientSupabase from "@/utils/supabase/client";

type OnboardingStepProps = {
  maxSteps: number
  step: number | null
  component: string
}

export default function EditOnboardingStep(props: OnboardingStepProps) {

  const router = useRouter();
  const { step, maxSteps, component } = props;

  const displayName = camelToTitle(component);

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    try {

      const supabase = createClientSupabase();

      const formData = new FormData(currentTarget);
      const form = Object.fromEntries(formData);

      const query: { [key: string]: number } = {};
      for (const key in form) {
        query[key] = Number(form[key]);
      }

      const { error } = await supabase
        .from("onboarding_components")
        .update(query)
        .eq("name", component)

      if (error) {
        console.log("editing onboarding steps: ", error.message);
        throw error
      }

      router.refresh();
      currentTarget.reset();
      return;

    } catch (e) {
      console.error(e);
      currentTarget.reset();
    }
  }


  return (
    <div id={`${component}-information-display`}
      className={`border border-gray p-4 rounded-md mb-1`}>
      <p>Component: {displayName}</p>
      {step === 1 ?
        <>
          <p className={`text-sm italic`}>
            This component cannot be changed.
          </p>
        </> :
        <>
          <p>Assign to step:</p>
          <form action="submit"
            className={`flex flex-col items-center`}
            onSubmit={handleFormSubmit}>
            <EditOnboardingSelect
              step={step}
              component={component}
              maxSteps={maxSteps} />
            <button
              className={`bg-sky-200 hover:bg-sky-300 hover:cursor-pointer px-2 py-1 rounded-md text-sm`}>
              Save
            </button>
          </form>
        </>
      }
    </div>
  )
}