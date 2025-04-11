import createServiceClient from "@/utils/supabase/service";

export default async function AdminPage() {

  const supabase = createServiceClient();

  const { data, error } = await supabase
    .from("onboarding_components")
    .select("name, onboarding_step")

  if (error) {
    console.error(error.cause);
    console.error(error.message);
    console.error(error.details);
    throw error
  }

  console.log(data);

  return (
    <main id="admin-page">
      Admin
    </main>
  )
}