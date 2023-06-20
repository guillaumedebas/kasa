import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.scss"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/Footer"
import Accueil from "./Pages/Accueil"
import APropos from "./Pages/APropos"
import RentalSheetSelect from "./Pages/RentalSheetSelect"
import Error from "./Pages/Error"
import { LogementList } from "./datas/LogementList"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/RentalSheetSelect/:id" element={<IdVerification />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

function IdVerification() {
  const { id } = useParams()
  for (let i = 0; i < LogementList.length; i++) {
    if (LogementList[i].id === id) {
      return <RentalSheetSelect />
    }
  }
  return <Error />
}
