import React from 'react';

const Card = ({name, email, id, gender}) => {


    let randomNr= Math.floor(Math.random() *100);

    // let randomGender = () => {
        
    //    console.log( Math.floor(Math.random() *2));
    // //    ${gender} men / women
    // }
    // randomGender();


    return (

        <div className='bg-light-gray dib br3 ma3 pa3 grow bw2 shadow-5' >

            <img src={`https://randomuser.me/api/portraits/women/${randomNr}.jpg`} alt="photos"   width="200px"/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>

        </div>


    )

    
}

export default Card;