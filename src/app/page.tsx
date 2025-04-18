// import Image from "next/image";
import AuthDetails from "@/features/onboarding/components/AuthDetails";
import Stepper from "@/features/onboarding/components/Stepper";

export default async function HomePage() {

  return (
    <div className={`flex flex-col justify-center items-center`}>
      <p className={`my-4 text-2xl font-bold`}>
        Welcome Aboard!
      </p>
      <AuthDetails />
      <br />
      <br />
      <Stepper activeStep={1} />
    </div>
  );
}
