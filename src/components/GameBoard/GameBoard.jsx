import "./GameBoard.scss"

const GameBoard = ({values, handleClick, currentTurn}) => {

    return ( 
        <div className="container">
            <div className="row justify-content-center">
                <button className="col-3" onClick={() => handleClick(1)} data-toggle="modal">{values[0][0]}</button>
                <button className="col-3" onClick={() => handleClick(2)}>{values[0][1]}</button>
                <button className="col-3" onClick={() => handleClick(3)}>{values[0][2]}</button>
            </div>
            <div className="row justify-content-center">
                <button className="col-3" onClick={() => handleClick(4)}>{values[1][0]}</button>
                <button className="col-3" onClick={() => handleClick(5)}>{values[1][1]}</button>
                <button className="col-3" onClick={() => handleClick(6)}>{values[1][2]}</button>
            </div>
            <div className="row justify-content-center">
                <button className="col-3" onClick={() => handleClick(7)}>{values[2][0]}</button>
                <button className="col-3" onClick={() => handleClick(8)}>{values[2][1]}</button>
                <button className="col-3" onClick={() => handleClick(9)}>{values[2][2]}</button>
            </div>
        </div> 
    );
}
 
export default GameBoard;