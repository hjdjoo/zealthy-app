import createClientSupabase from "@/utils/supabase/client"

export const dynamic = "force-dynamic"

export default async function DataPage() {

  const supabase = createClientSupabase();

  const { data, error } = await supabase
    .from("users")
    .select("*");

  if (error) {
    console.log(error.message);
    throw error
  }

  const headers = Object.keys(data[0]).map((col, idx) => {
    return (
      <th key={`table-header-col-${col}-${idx + 1}`} scope="col" className={`border border-gray-300 px-2 py-1`}>
        <p>{col}</p>
      </th>
    )
  })

  const tableRows = data.map((entry, idx) => {

    const data = Object.values(entry).map((value, idx) => {
      return (
        <td key={`entry-${entry.id}-item-${idx + 1}`}
          className={`border border-gray-300 px-2 py-1`}>
          <p className={`text-sm`}>{value}</p>
        </td>
      )
    });

    return (
      <tr key={`entry-${idx + 1}-data`}>
        {data}
      </tr>
    )

  })

  return (
    <table className={`table-auto border-collapse my-4`}>
      <caption>
        <p className={`text-2xl font-bold underline mb-2`}>
          User Data:
        </p>
      </caption>
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}