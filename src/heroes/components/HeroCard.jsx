import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const GetCharacters = ({ alter_ego , characters }) => {
  
  if(alter_ego === characters) return (<></>)

  if (alter_ego != characters) return characters;   
};



export const HeroCard = ({
  id,
  superhero,
  // publisher,
  alter_ego,
  first_appearance,
  characters,

}) => {


  const imgUrl = `/heroes/${id}.jpg`



  return (

    <div className="col animate__animated animate__fadeIn">
    <div className="row no-gutters">
      <div className="col-4" >
        <img src={ imgUrl } className="card-img" alt={ superhero }/>
      </div>

      <div className="col-8">
        <div className="card-body">
          <h5 className="card-title"> { superhero }</h5>

          <p className="card-text"> { alter_ego }</p>


          {/* Formas de hacer */}
          
          <GetCharacters alter_ego={ alter_ego } characters={ characters } />


          <p className="card-text">
            <small className="text-muted"> { first_appearance }</small>
          </p>


          <Link to={ `/hero/${id}` }>
            Ver más...
          </Link>
        </div>
      </div>
    </div>
  </div>

  )
}

HeroCard.propTypes = {
  id : PropTypes.string,
  superhero : PropTypes.string,
  publisher : PropTypes.string,
  alter_ego : PropTypes.string,
  first_appearance : PropTypes.string,
  characters : PropTypes.string,
}

GetCharacters.propTypes = {
  alter_ego : PropTypes.string,
  characters : PropTypes.string,
}

