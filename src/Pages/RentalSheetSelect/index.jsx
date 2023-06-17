import RentalSheet from "../../components/RentalSheet"
import { useParams } from "react-router-dom"
import { LogementList } from "../../datas/LogementList"
import Error from "../../components/Error"

function searchRental(id) {
  for (let i = 0; i < LogementList.length; i++) {
    if (LogementList[i].id === id) {
      return i
    }
  }
  return -1
}

function RentalSheetSelect() {
  const { id } = useParams()
  const sheet = searchRental(id)

  if (sheet === -1) {
    return <Error />
  }

  return (
    <main>
      <RentalSheet sheet={sheet} />
    </main>
  )
}

export default RentalSheetSelect
