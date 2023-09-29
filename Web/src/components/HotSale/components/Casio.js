import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function Casio(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('Casio');
    const [hotCasio, setHotCasio] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotCasio(data)
            } catch (error) {
            }
        }
        FetchApi()
    }, [])

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                   hotCasio ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotCasio)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Casio;