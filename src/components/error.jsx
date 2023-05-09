import React from "react";

const Error = ({message}) => {
    
    return (
        <>
            <div className="bg-red-100 border border-red-600 p-4 rounded-xl mb-8 ">
                <p className="text-center text-red-900 font-bold">{message}</p>
            </div>
        </>
    )
}


export default Error;