import EditOnboardingStep from "../components/EditOnboarding.Step"

type OnboardingContainerProps = {
  maxSteps: number
  componentData: {
    name: string,
    onboarding_step: number | null
  }[]
}

export default function EditOnboardingContainer(props: OnboardingContainerProps) {

  const { maxSteps, componentData } = props;

  const onboardingStepsDisplay: React.ReactNode[] = [];
  const unassignedComponents: React.ReactNode[] = [];

  for (let i = 0; i < maxSteps; i++) {

    const components = componentData.map((component) => {
      if (component.onboarding_step === i + 1) {
        return (
          <div key={`edit-step-${i + 1}-onboarding-component-${component.name}`}>
            <EditOnboardingStep
              maxSteps={maxSteps}
              step={component.onboarding_step}
              component={component.name} />
          </div>
        )
      }
    }).filter(val => val !== undefined)

    onboardingStepsDisplay.push((
      <div key={`onboarding-step-${i + 1}-display`}>
        <p className={`text-xl font-bold`}>
          {`Onboarding Step ${i + 1}: `}
        </p>
        {components}
      </div>
    ))
  }

  const unassigned = componentData.map((component) => {
    if (component.onboarding_step === null) {
      return (
        <div key={`edit-unassigned-step-onboarding-component-${component.name}`}>
          <EditOnboardingStep
            maxSteps={maxSteps}
            step={component.onboarding_step}
            component={component.name} />
        </div>
      )
    }
  }).filter(val => val !== undefined)

  unassignedComponents.push((
    <div key={`onboarding-step-unassigned-display`}>
      <p className={`text-xl font-bold`}>
        {`Unassigned: `}
      </p>
      {unassigned}
    </div>
  ))


  // componentData.forEach((step, idx) => {

  //   const currStep = step.onboarding_step
  //   const component = (
  //     <div key={`edit-onboarding-component-${idx + 1}`}>
  //       <p className={`text-xl font-bold`}>
  //         {step.onboarding_step ? `Onboarding Step ${step.onboarding_step}: ` : `Unassigned: `}
  //       </p>
  //       <EditOnboardingStep
  //         maxSteps={maxSteps}
  //         step={step.onboarding_step}
  //         component={step.name} />
  //     </div>
  //   )

  //   if (currStep) {
  //     if (onboardingStepsDisplay[currStep - 1]) {
  //       onboardingStepsDisplay[currStep - 1].push(component)
  //     } else {
  //       onboardingStepsDisplay[currStep - 1] = [component]
  //     }
  //   } else {
  //     unassignedComponents.push(component);
  //   }
  // })

  return (
    <>
      {onboardingStepsDisplay}
      {unassignedComponents}
    </>
  )
}