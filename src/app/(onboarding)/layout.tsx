export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <main id="onboarding-section" className={`flex grow items-center justify-center`}>
      {children}
    </main>
  );
}
