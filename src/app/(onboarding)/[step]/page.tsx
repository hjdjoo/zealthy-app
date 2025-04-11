import createClientSupabase from "@/utils/supabase/client";
import OnboardingContainer from "@/features/onboarding/containers/Onboarding.Container";
import Stepper from "@/features/onboarding/components/Stepper";

export const dynamic = "force-dynamic"

export default async function OnboardingStep(
  { params }:
    { params: Promise<{ step: string }> }
) {
  const { step } = await params;

  const supabase = createClientSupabase();

  const { data: componentData, error: componentError } = await supabase
    .from("onboarding_components")
    .select("name")
    .eq("onboarding_step", Number(step));

  if (componentError) {
    throw componentError
  }

  const components = componentData.map(entry => entry.name).filter(value => value !== null)

  return (
    <div className={`flex flex-col`}>
      <OnboardingContainer step={Number(step)} components={components} />
      <br />
      <br />
      <Stepper activeStep={Number(step)} />
    </div>
  )

}