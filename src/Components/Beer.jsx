import React from "react";

const Beer = ({beer,index, isShown, setShown, favouritesList, setFavouritesList, handelDeFavourite, ifFavourite, handelFavourite}) => {

    const displayBeerInfo = (id) => {
        setShown(id);
        if (isShown === id){
            setShown(0)
        }
    }
    console.log(ifFavourite);

    return(
        <div> 
            <div onClick={() => displayBeerInfo(beer.id)} className ='pointer'>
                <hr></hr>
                <h1>{beer.name}</h1>
                <img src={beer.image_url} alt=""></img>
                <h2>{beer.tagline}</h2>
                <div className={`beer-info ${isShown===beer.id ? "shown" : "hidden"}`}>
                    <p>{beer.description}</p>
                    <h5> First Brewed in {beer.first_brewed}</h5>
                    <h4> ABV: {beer.abv}</h4>
                </div>
            </div>
            {ifFavourite ? <h2 id={beer.id} onClick={() => handelFavourite(beer)}>&#9733;</h2> : <h2 id={beer.id} onClick={() => handelDeFavourite(beer, index)}>&#9734;</h2>}
        </div> 
    )
}


export default Beer;