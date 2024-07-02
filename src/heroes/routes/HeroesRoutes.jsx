import { Navigate, Route, Routes } from "react-router-dom"
import { DcPage, HeroePage, MarvelPage, SearchPage } from "../pages"
import { Navbar } from "../../UI/components/Navbar"

export const HeroesRoutes = () => {
  return (
    <>
      
      <Navbar/>

      <Routes>
        <Route path="marvel" element={ <MarvelPage/> } > </Route>
        <Route path="dc" element={ <DcPage/> } > </Route>
        <Route path="search" element={ <SearchPage/> } > </Route>
        <Route path="hero/:id" element={ <HeroePage/> } > </Route>
        <Route path="*" element={ <Navigate to={"/marvel"} /> } > </Route>
      </Routes>
    </>
  )
}
