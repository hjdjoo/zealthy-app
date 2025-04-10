
export default async function OnboardingStep(
  { params }:
    { params: Promise<{ step: string }> }
) {
  const { step } = await params;



  return (
    <div>
      <p>{step}</p>
    </div>
  )

}