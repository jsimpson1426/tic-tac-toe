import "./GameBoard.scss"

const GameBoard = ({values, handleClick, currentTurn}) => {

    return ( 
        <div className="container">
            <div className="row justify-content-center">
                <button className="col-3" onClick={() => handleClick(1)}>1</button>
                <button className="col-3" onClick={() => handleClick(2)}>2</button>
                <button className="col-3" onClick={() => handleClick(3)}>3</button>
            </div>
            <div className="row justify-content-center">
                <button className="col-3" onClick={() => handleClick(4)}>4</button>
                <button className="col-3" onClick={() => handleClick(5)}>5</button>
                <button className="col-3" onClick={() => handleClick(6)}>6</button>
            </div>
            <div className="row justify-content-center">
                <button className="col-3" onClick={() => handleClick(7)}>7</button>
                <button className="col-3" onClick={() => handleClick(8)}>8</button>
                <button className="col-3" onClick={() => handleClick(9)}>9</button>
            </div>
        </div> 
    );
}
 
export default GameBoard;