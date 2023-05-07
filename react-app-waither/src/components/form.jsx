import React, { useState } from "react";

//helpers

import countriesList from './../helpers/list'


const Form = ({ setDataForm }) => {


    function handledSubmit(e) {
        
        e.preventDefault();

       
        if(e.target.city.value.trim() === '' || e.target.country.value.trim() === ''){
            setError(true);
            return;
        } 

        setDataForm({
            city : e.target.city.value,
            country : e.target.country.value,
        })

    }

  

    return (
        <>
            <div>
               
                <form onSubmit={handledSubmit}>
                    <div className='form-wrapper'>
                        <div className='input-wrapper'>
                            <label from="city" className='label'>Ciudad</label>
                            <input  type='text' id='city' name='city' required placeholder='Ej: Medellín' className='input' ></input>
                        </div>
                        <div className='input-wrapper'>
                            <label from="country" className='label'>País</label>
                            <select name="country" id="country" className='input-select'  defaultValue={'CO'} required>
                                {
                                    countriesList.map((country) => {
                                        return <option key={country.code} value={country.code}>{country.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className='input-wrapper'>
                            <button type="submit" className='w-full uppercase text-lg bg-blue-500 rounded-lg py-2 mt-4 font-bold text-white tracking-widest'>BUSCAR</button>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Form;