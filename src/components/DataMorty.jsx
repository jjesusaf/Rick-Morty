import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Characters from './Characters';

const DataMorty = () => {
    const [dataL, setDataL] = useState([])
    const [inputValue, setInputValue] = useState(0)
    const [search, setSearch] = useState(true)


    let idRandom = Math.floor(Math.random() * 125) + 1

    const vl = () => {
        if (inputValue < 1) {
            return (idRandom)
        } else {
            return (inputValue)
        }
    }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${vl()}`)
            .then(res => setDataL(res.data))
    }, [search])



    return (
        <div>
            <div className='type'>
                <p>
                    Name: <br /> {dataL.name}
                </p>
                <p>
                    Type: <br /> {dataL.type}
                </p>
                <p>
                    Dimension: <br /> {dataL.dimension}
                </p>
                <p>
                    Residents: <br /> {dataL.residents?.length}
                </p>
            </div>
            <div className="inputd">
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} className='input' />
                <button className='b1' onClick={() => setSearch(!search)}>Search</button>
            </div>

            <div className='characters'>
                {dataL?.residents?.map(url => (
                    <Characters
                        url={url}
                        key={url}
                    />
                ))}
            </div>

        </div>
    );
};

export default DataMorty;