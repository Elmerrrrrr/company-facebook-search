import React from 'react';

const SearchBox = ({searchChange}) =>{

    return(

        <div>
            <input
            className='ma3 pa3 ba b--gray bg-lightest-bleu'
            type='search'
            placeholder='search employees'
            onChange={searchChange}
            />
        </div>

    )

}
export default SearchBox;