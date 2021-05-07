import React from 'react';
import Card from './Card';
import { randomArray } from '../containers/App.jsx';

const CardList = ({employees}) =>{

    return(

        <>
            {  
            
                employees.map((employee, i) => {

                    return <Card 
                                key={i}
                                id={employees[i].id}
                                name={employees[i].name}
                                email={employees[i].email}
                                gender={employees[i].gender}
                                photo={randomArray[employees[i].id]}
                            />
                })
            }
            
        </>

    )

}

export default CardList;