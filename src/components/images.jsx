import { useState, useEffect } from 'react'

//helpers

import weatherDescription from '../helpers/weatherdesc'

const Images = ({status, alt}) => {
    
    
    const weatherStatus = weatherDescription(status);
 
    console.log('weather status ---> : ' + weatherStatus);
    return(
        <> 
            <img src={weatherStatus} alt={alt}></img>
        </>
    )
}

export default Images;