import React from "react";
import Beer from './Beer';

const BeerList = ({beerList, isShown, setShown, favouritesList, setFavouritesList, ifFavourite, handelFavourite, setSelectedBeer, handelDeFavourite}) => {

    const beers = beerList.map((beer, index) => {
        return <Beer setSelectedBeer={setSelectedBeer} isShown={isShown} beer={beer} key={beer.id} index={index} setShown={setShown} handelDeFavourite={handelDeFavourite} handelFavourite={handelFavourite} ifFavourite={ifFavourite} favouritesList={favouritesList} setFavouritesList={setFavouritesList}/>
    })





    return (
        <div>
            {beers}
        </div>
    );


}


export default BeerList