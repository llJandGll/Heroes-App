import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks"
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const  location = useLocation()
  const navigate = useNavigate()
  

 
  const { q = "" } = queryString.parse(location.search)

  
  const heroSearched = getHeroByName( q.toLowerCase() );
 
  
  const { search , onChangeInput } = useForm({
    search : q
  });


  const onSubmitSearch = ( e ) => {
    e.preventDefault();
    navigate(`?q=${search}`)
  };

  return (
    <>
      <div className="row">

        <h1>Busqueda</h1>
        <hr />

        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form action=""  onSubmit={ onSubmitSearch }>
            <input 
              type="text" 
              placeholder="buscar heroe"
              className="form-control"
              autoComplete="off"
              name="search"
              value={ search }
              onChange={ onChangeInput }

              
              />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>

          </form>
        </div>

        <div className="col-7">
          <h4> Results </h4>
          <hr />

        {/* {
          !q ? <div className="alert alert-info"> Search a hero  </div> 
            :
          
            heroSearched.length <= 0 ? <div className="alert alert-danger"> There is no results with   </div>  
            :

            heroSearched.map( hero => (
              <HeroCard key={hero.id} {...hero } />
             ))

        } */}

        
          <div className="alert alert-info" style={{display : `${!q ? "" : "none"}`}}> Search a hero  </div> 
         
          <div className="alert alert-danger" style={{display : `${ q && heroSearched.length <= 0 ? "" : "none" }`}}> There is no results with   </div>  
        
        {
            heroSearched.map( hero => (
              <HeroCard key={hero.id} {...hero } />
             ))
        }

          

        </div>
      </div>
    </>
  )
}
