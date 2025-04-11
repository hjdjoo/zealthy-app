import { JSX } from "react";
import AuthDetails from "./features/onboarding/components/AuthDetails";
import AboutMe from "./features/onboarding/components/About";
import AddressForm from "./features/onboarding/components/Address";
import Birthdate from "./features/onboarding/components/Birthdate";


export const ComponentMap: {[key: string]: () => JSX.Element} = {
  authDetails: AuthDetails,
  aboutMe: AboutMe,
  address: AddressForm,
  birthdate: Birthdate
}