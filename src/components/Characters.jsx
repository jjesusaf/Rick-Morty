import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Characters = ({ url }) => {
    const [dataResidents, setDataResidents] = useState({})

    const [statusC, setStatusC] = useState("circle")

    


    useEffect(() => {
        axios.get(url)
            .then(res => setDataResidents(res.data))
    }, [])

    const status = dataResidents.status

    const changeColor = () =>{
        
        if ( status === "Dead"){
            return(setStatusC("circle dead"))
        }else if (status === "Alive"){
            return(setStatusC('circle alive'))
        }else if (status === "unknown"){
            return(setStatusC('circle'))
        }
    }

    useEffect(()=>{  
        changeColor()
    },[status])

    console.log(dataResidents.status)
    
    return (
        <div className='cha2'>
            <img src={dataResidents.image} alt="" />
            <div className='status'>
                <div className={statusC}></div>
                <p>
                    {dataResidents.status}
                </p>
            </div>
            <p>
                Race: {dataResidents.name}
            </p>
            <p>
                Origin: {dataResidents.origin?.name}
            </p>
            <p>
                No. Episode: {dataResidents.episode?.length}
            </p>
        </div>
    );
};

export default Characters;