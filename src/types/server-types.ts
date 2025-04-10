export type OnboardingSteps = {
  id: string
  components: string[]
}

export type OnboardingConfig = {
  steps: OnboardingSteps[]
}