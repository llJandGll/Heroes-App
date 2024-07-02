import { heroes } from "../data/heroes";


export const getHeroById = ( id ) => {
  

  let heroId = heroes.find( hero => hero.id === id )
    
  return heroId;
};