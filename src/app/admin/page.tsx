import createServiceClient from "@/utils/supabase/service";
import EditOnboardingContainer from "@/features/admin/containers/EditOnboarding.Container";

export default async function AdminPage() {

  const supabase = createServiceClient();

  let maxSteps: number = 0;
  const componentNames: string[] = [];

  const { data, error } = await supabase
    .from("onboarding_components")
    .select("name, onboarding_step")

  if (error) {
    console.error(error.cause);
    console.error(error.message);
    console.error(error.details);
    throw error
  }

  data.forEach(component => {
    componentNames.push(component.name);
    if (component.onboarding_step) {
      maxSteps = Math.max(maxSteps, component.onboarding_step)
    }
  })


  return (
    <main id="admin-page" className={`py-4`}>
      <p className={`text-2xl font-bold underline my-4`}>
        Onboarding Settings:
      </p>
      <EditOnboardingContainer
        maxSteps={maxSteps}
        componentData={data} />
    </main>
  )
}