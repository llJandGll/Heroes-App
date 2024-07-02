import { heroes } from "../data/heroes";



export const getHeroByPublisher = ( publisher ) => {

  if (!publisher) throw new Error("no se escribio ningun publisher") 

  
    
  const onlyPublisher = heroes.filter( hero => hero.publisher === publisher );
    


  return onlyPublisher;
};