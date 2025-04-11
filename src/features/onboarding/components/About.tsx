export default function AboutMe() {

  return (
    <>
      <p className={`text-2xl font-bold underline`}>About Me: </p>
      <textarea id="about-me" name="about_me"
        className={`border border-gray h-36 w-72 my-4`} />
    </>
  )
}