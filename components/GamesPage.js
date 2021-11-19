import {useEffect, useState} from 'react'
import styled from 'styled-components'
import GamesContainer from './GamesContainer'
import GamesSearch from './GamesSearch'
import {CgGames} from 'react-icons/cg'

function GamesPage(){
    const [games, setGames] = useState([])
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(20)

    
    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://www.freetogame.com/api/games';
        
        fetch(proxyurl + url)
        .then((res) => res.json())
        .then((games) => setGames(games))
    }, [])
    
    
    const indexOfLastGame = currentPage * gamesPerPage
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame)

    const filteredGames = currentGames.filter((game) => game.title.toLowerCase().includes(search.toLowerCase()))

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return(
        <>
        <TitleContainer>
            <h1> <CgGames color="white" /> Free PC and Browser Games <CgGames color="white"/></h1>
        </TitleContainer>
            <GamesSearch search={search} onSearch={setSearch}/>
            <GamesContainer filteredGames={filteredGames} />
            <GamesPagination gamesPerPage={gamesPerPage} totalGames={games.length} paginate={paginate}/>
        </>
        
    )
}

export default GamesPage

const TitleContainer = styled.div`
    h1{
        text-align: center;
        font-size: 4rem;
        font-family: 'Permanent Marker', cursive;
        background: -webkit-linear-gradient(#0058fc, #94b9ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding-bottom: 20px;
    }
`
