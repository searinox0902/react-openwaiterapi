import React from "react";
import Images from "./images";

const Result = ({weather}) => {



    const { name, weather_desc, main, id, temp, temp_max, temp_min, date} = weather;
   
    return (
        <>  
            <h2 className='card__city-name'>{name}</h2>
            <div className='card-info'>
            <div className='card__content-info'>
            <p className='card__date'>{date}</p>
                <p className='card__temp'>{temp} </p>
                <p className='card__temp-max'>Temp Máx: {temp_max}</p>
                <p className='card__temp-min'>Temp Mín: {temp_min}</p>
            </div>
            <div className='card__content-image'>
                <figure>
                    <Images status={main} alt={weather_desc} />
                </figure>
                <p className="text-center font-bold text-sm">{weather_desc}</p>
            </div>
            </div>
        </>
    )
}

export default Result;