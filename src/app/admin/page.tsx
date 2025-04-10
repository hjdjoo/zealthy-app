import createServiceClient from "@/utils/supabase/service";

export default async function AdminPage() {

  const supabase = createServiceClient();

  const { data, error } = await supabase
    .from("website_configs")
    .select("config")
    .eq("name", "onboarding")
    .single();

  if (error) {
    console.error(error.cause);
    console.error(error.message);
    console.error(error.details);
    throw error
  }

  console.log(data);

  return (
    <div>
      Admin
    </div>
  )
}