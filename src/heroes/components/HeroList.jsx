
import PropTypes from 'prop-types';

import { getHeroByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard"

export const HeroList = ( { publisher }) => {
  

  const heroesByPublisher = getHeroByPublisher( publisher )

  
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
    {
      heroesByPublisher.map( ( hero ) => {
        return <HeroCard 
          key={ hero.id } 
          {...hero} 
        />
      })
    }
  </div>
  )
}

HeroList.propTypes ={
  publisher : PropTypes.string
}
