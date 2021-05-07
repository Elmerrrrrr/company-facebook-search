import React from 'react';



const Card = ({name, email, id, gender, photo}) => {

    
    return (

        <div className='bg-light-gray dib br3 ma3 pa3 grow bw2 shadow-5' >

            <img src={`https://randomuser.me/api/portraits/women/${photo}.jpg`} alt="profile_picture" width="200px"/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>

        </div>


    )

    
}

export default Card;