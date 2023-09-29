import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch} from 'react-redux';


function Citizen(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('Citizen');
    const [hotCitizen, setHotCitizen] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotCitizen(data)
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
                    hotCitizen ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotCitizen)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Citizen;