
type EditOnboardingSelectProps = {
  component: string
  step: number | null
  maxSteps: number
}

export default function EditOnboardingSelect(props: EditOnboardingSelectProps) {

  const { maxSteps, step, component } = props;

  const radioInputs: React.ReactNode[] = [];

  for (let i = 1; i < maxSteps; i++) {

    if (step === 1) {
      return;
    }
    radioInputs.push((
      <label key={`${component}-select-step-${i + 1}`} htmlFor={`${component}-select-step-${i + 1}`}
        className={`w-full flex justify-evenly`}>
        <p className={`flex grow text-sm`}>{`Step ${i + 1}`}</p>
        <input id={`${component}-select-step-${i + 1}`} name={`onboarding_step`} value={i + 1} type="radio" disabled={step === 1} />
      </label>
    ))
  }
  if (step !== 1) {
    radioInputs.push((
      <label key={`${component}-select-step-unassign`} htmlFor={`${component}-select-step-unassign`}
        className={`w-full flex justify-evenly`}>
        <p className={`flex grow text-sm`}>{`Unassign`}</p>
        <input id={`${component}-select-step-unassign`} name={`onboarding_step`}
          value="null" type="radio" />
      </label>
    ))
  }

  return (
    <>
      {radioInputs}
    </>
  )
}