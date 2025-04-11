export default function Birthdate() {

  return (
    <>
      <p className={`text-xl font-bold underline mb-2`}>
        Birthdate:
      </p>
      <input type="date" name="birthdate"
        className={`bg-gray-100 py-1 px-2 rounded-md mb-2`} />
    </>
  )
}