import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../constants/urls'
import { MainContainer, ButtonHome, CardContainer, CardMainContainer } from './styled'
const PlanetDetailPage = () => {
    const [planetDetail, setPlanetDetail] = useState([])
    useEffect(() => {
        getDetailPlanet()
    }, [])
    const navigate = useNavigate()
    const goToPlanetsPage = () => {
        navigate('/planets-page')
    }
    const params = useParams()
    const getDetailPlanet = () => {
        axios
            .get(`${BASE_URL}/planets/${params.i}`)
            .then((res) => setPlanetDetail(res.data))
            .catch((err) => console.log(err.message))
    }

    return (
        <MainContainer>
            <ButtonHome onClick={goToPlanetsPage}>Lista de Planetas</ButtonHome>
            <ButtonHome onClick={goToPlanetsPage}>Planets List</ButtonHome>
            <CardMainContainer>
                <CardContainer>
                    <h2>{planetDetail.name}</h2>
                    <h4>Clima: {planetDetail.climate}</h4>
                    <h4>População: {planetDetail.population}</h4>
                    <h4>Terreno: {planetDetail.terrain}</h4>
                    <h4>Climate: {planetDetail.climate}</h4>
                    <h4>Population: {planetDetail.population}</h4>
                    <h4>Terrain: {planetDetail.terrain}</h4>
                </CardContainer>
            </CardMainContainer>
        </MainContainer>
    )
}
export default PlanetDetailPage