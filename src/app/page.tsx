// import Image from "next/image";
import AuthDetails from "@/features/onboarding/components/AuthDetails";

export default async function HomePage() {

  // fetch user info;
  // const supabase = createClientSupabase();
  // const {data, error} = await supabase.

  return (
    <div className={`flex flex-col items-center`}>
      <p className={`my-4 text-2xl font-bold`}>
        Welcome Aboard!
      </p>
      <AuthDetails />
    </div>
  );
}
