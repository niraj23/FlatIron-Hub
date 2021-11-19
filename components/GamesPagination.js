import styled from "styled-components"

const GamesPagination = ({gamesPerPage, totalGames, paginate}) => {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <PaginationContainer>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </PaginationContainer>

    )
}

export default GamesPagination

const PaginationContainer = styled.div`
    display: inline-block;
`
