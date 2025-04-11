
type StepperProps = {
  activeStep: number
}

export default function Stepper(props: StepperProps) {

  const { activeStep } = props;
  const maxSteps = 3;

  const steppers: React.ReactNode[] = [];

  for (let i = 0; i < maxSteps + 1; i++) {

    const activeStyle = `w-12 h-12 bg-sky-300 rounded-full flex items-center justify-center`
    const defaultStyle = `w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center`

    const stepper = (
      <div className={`${i + 1 === activeStep ? activeStyle : defaultStyle}`} key={`stepper-step-${i + 1}`}>
        <p>{i + 1}</p>
      </div>
    )

    steppers.push((
      stepper
    ))

  }

  return (
    <div className={`flex flex-col w-full items-center`}>
      <p className={`text-sm italic mb-4`}>
        Onboarding Progress:
      </p>
      <div id="stepper"
        className={`flex w-full justify-between`}>
        {steppers}
      </div>
    </div>
  )
}