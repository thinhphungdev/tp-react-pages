import React, {useEffect} from 'react';
import axios from 'axios';

function Table() {

    useEffect(() => {
        axios.get('https://6102b82b79ed6800174822b8.mockapi.io/employees')
        .then(res => console.log(res))
        .catch(err => console.err(err))
    }, [])

    return (
        <div>
            Table
        </div>
    )
}

export default Table;
