import React from "react";
import axios from "axios";
import { styled, useEffect, useParams, useState, getDetails} from 'react';
import Detail from './src/CharacterDetailPage';
import Fundo from '../assets/fundo starwars.jpg';


const Container = styled.div`
    background-image: url(${Fundo});
    background-position: center center;
    

`

const DetailPage = () => {
    const [details, setDetails] = useState({})

    const params = useParams()

    useEffect(() => {
        getDetails()
    }, [])

    console.log(params)

    const getDetail = () => {
        axios.get(`https://swapi.dev/api/people/${params.i}`)
        .then((res) => {
            setDetails(res.data)
        })
        .catch((err) => { console.log(err) })
    }

    
    
}


export default DetailPage;