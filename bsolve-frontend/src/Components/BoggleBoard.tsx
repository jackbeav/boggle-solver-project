import './BoggleBoard.css'
import { ResultTable } from './ResultTable'
import { ChangeEventHandler, useState } from 'react'

export const BoggleBoard:React.FC = () => {
    const [board, setBoard] = useState<string[][]>([
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""]
    ])

    const [finalBoard, setFinalBoard] = useState<string[][]>([])
    
    const saveBoard = (event:React.ChangeEvent<HTMLInputElement>) => {
        let letter = event.target.value
        let row:number = Number(event.target.getAttribute('data-row'))
        let col:number = Number(event.target.getAttribute('data-col'))
        console.log("setting block " + row + ", " + col)
        
        let localBoard = board
        localBoard[row][col] = letter
        setBoard(localBoard)
    }

    const submitBoard = () => {
        setFinalBoard(board)
        console.log("solving!")
    }

    return(
        <div id='container'>
            <div id='board'>
                {board.map((row, index1) => {
                    return row.map((str, index2) => (
                        <input className='boggleBlock' 
                        type='text' 
                        maxLength={2}
                        key={index1 + (index2*4)}
                        data-col={index2}
                        data-row={index1}
                        onChange={saveBoard}/>
                    ))
                })}
            </div>
            <button id='solveBtn' onClick={submitBoard}>Solve!</button>
            
            <ResultTable boggleBoard={finalBoard}/>
        </div>
    )
}