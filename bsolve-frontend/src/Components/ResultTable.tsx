import './ResultTable.css'
import { useEffect, useState } from "react"

interface resultProps{
    boggleBoard:string[][]
}

export const ResultTable:React.FC<resultProps> = ({ boggleBoard }) => {
    
    const [word3, setWord3] = useState<Set<string>>(new Set<string>())
    const [word4, setWord4] = useState<Set<string>>(new Set<string>())
    const [word5, setWord5] = useState<Set<string>>(new Set<string>())
    const [word6, setWord6] = useState<Set<string>>(new Set<string>())
    const [word7, setWord7] = useState<Set<string>>(new Set<string>())
    const [word8, setWord8] = useState<Set<string>>(new Set<string>())

    useEffect(() => {
        if(boggleBoard.length != 0){
            findWords()
        }
    }, [boggleBoard])

    const findWords = async () => {

    }

    return(
        <table>
            <thead>
                <tr>
                    <th>3 Letters</th>
                    <th>4 Letters</th>
                    <th>5 Letters</th>
                    <th>6 Letters</th>
                    <th>7 Letters</th>
                    <th>8 Letters</th>
                </tr>
            </thead>
            <tbody>
                {/* max words in a boggle game is 459, average is about 100, so design around that */}
            </tbody>
        </table>
    )
}