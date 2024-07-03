import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"

export const HeroePage = () => {

  const navigate = useNavigate();
  const { id } = useParams()
  

  const heroImg = `Heroes-App/heroes/${id}.jpg`

  const heroById = getHeroById( id );

  
  if (!heroById) {
    return <Navigate to={"/"} />
  }

  const onReturnBack = () =>{
    navigate(-1)
  }
  
  return (
    <div className="row mt-5 animate__animated  animate__fadeInLeft">
      <div className="col-4">
        <img 
          src={ heroImg } 
          alt={ heroById.superhero } 
          className="img-thumbnail"
          // style={{ height : 500}}
        />
        
      </div>


      <div className="col-8">
        <h3> { heroById.superhero }</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b> alter ego : </b>  { heroById.alter_ego }</li>
          <li className="list-group-item"> <b> publisher: </b>  { heroById.publisher }</li>
          <li className="list-group-item"> <b> first appearance : </b>  { heroById.first_appearance }</li>
        </ul>


        <h5 className="mt-3"> Characters</h5>
        <p> { heroById.characters }</p>

        <button 
          className="btn btn-outline-info"
          onClick={ onReturnBack }
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
