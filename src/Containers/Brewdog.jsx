import React, {useState, useEffect} from "react";
import BeerList from "../Components/BeerList";

const Brewdog = () => {

    const [beerList, setBeerList] = useState(null);
    const page = 1;
    const [isShown, setShown] = useState(0); 
    const [showFavourites, setShowFavourites] = useState(false);
    const [favouritesList, setFavouritesList] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    console.log(favouritesList);
    // useEffect(() => {
    //     loadBeerList(page)
    // }, [page])

    useEffect(() => {
        loadBeerList()
    }, [], [isShown], [favouritesList]);

    const loadBeerList = () => {
        console.log(page);
        fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
        .then(res => res.json())
        .then(beerList => setBeerList(beerList))
        
    }

    const isBeerFavourite = (beer) => {
        return favouritesList.some(favBeer => favBeer.id === beer.id)
    }

    const handelFavourite = (beer) => {
        // document.getElementById(beer.id).innerHTML = "&#9733;";
        const favouriteCopy = [...favouritesList];
        favouriteCopy.push(beer);
        setFavouritesList(favouriteCopy);
        setSelectedBeer(beer);
        isBeerFavourite(beer);
    }

    const handelDeFavourite = (beer, index) => {
        const favouriteCopy = [...favouritesList];
        favouriteCopy.splice(index, 1)
        setFavouritesList(favouriteCopy);
        isBeerFavourite(beer)
    }

    if (!beerList) return "Loading..."
    console.log(beerList);

    return(
        <>
        <h1>Brewdog Beers!</h1>
        <button>Show Favourites</button>
        {/* <BeerList beerList={showFavourites ? {beerList} : {favouritesList}} isShown={isShown} setShown={setShown}/> */}
        <BeerList beerList={beerList} isShown={isShown} setShown={setShown} handelFavourite={handelFavourite} handelDeFavourite={handelDeFavourite} setSelectedBeer={setSelectedBeer} favouritesList={favouritesList} setFavouritesList={setFavouritesList}/>
        </>
    );

}

export default Brewdog;