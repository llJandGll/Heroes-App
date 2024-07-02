import { heroes } from "../data/heroes";


export const getHeroByName = ( name ) => {
  
    if( !name ) return []
    const nameHeroesShearched = heroes.filter( hero => hero.superhero.toLowerCase().includes( name  ));
    
    return nameHeroesShearched;
};