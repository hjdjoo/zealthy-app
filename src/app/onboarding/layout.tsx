export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <div id="onboarding" className={`flex flex-col grow items-center`}>
      <main id="home-page" className={`flex grow items-center justify-center`}>
        {children}
      </main>
    </div>
  );
}
