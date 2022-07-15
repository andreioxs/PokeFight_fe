import React, { createContext, useContext, useState } from 'react'
const StateContext = createContext()

export const DeckContext = ({ children }) => {
    const [computerDeck, setComputerDeck] = useState(
        [
            {
                "id": "1_1657870220980",
                "name": {
                    "english": "Bulbasaur",
                    "japanese": "フシギダネ",
                    "chinese": "妙蛙种子",
                    "french": "Bulbizarre"
                },
                "type": [
                    "Grass",
                    "Poison"
                ],
                "base": {
                    "HP": 45,
                    "Attack": 49,
                    "Defense": 49,
                    "Sp. Attack": 65,
                    "Sp. Defense": 65,
                    "Speed": 45
                }
            },
            {
                "id": "4_1657870250907",
                "name": {
                    "english": "Charmander",
                    "japanese": "ヒトカゲ",
                    "chinese": "小火龙",
                    "french": "Salamèche"
                },
                "type": [
                    "Fire"
                ],
                "base": {
                    "HP": 39,
                    "Attack": 52,
                    "Defense": 43,
                    "Sp. Attack": 60,
                    "Sp. Defense": 50,
                    "Speed": 65
                }
            },
            {
                "id": "7_1657870255669",
                "name": {
                    "english": "Squirtle",
                    "japanese": "ゼニガメ",
                    "chinese": "杰尼龟",
                    "french": "Carapuce"
                },
                "type": [
                    "Water"
                ],
                "base": {
                    "HP": 44,
                    "Attack": 48,
                    "Defense": 65,
                    "Sp. Attack": 50,
                    "Sp. Defense": 64,
                    "Speed": 43
                }
            },
            {
                "id": "10_1657870263764",
                "name": {
                    "english": "Caterpie",
                    "japanese": "キャタピー",
                    "chinese": "绿毛虫",
                    "french": "Chenipan"
                },
                "type": [
                    "Bug"
                ],
                "base": {
                    "HP": 45,
                    "Attack": 30,
                    "Defense": 35,
                    "Sp. Attack": 20,
                    "Sp. Defense": 20,
                    "Speed": 45
                }
            },
            {
                "id": "25_1657870267845",
                "name": {
                    "english": "Pikachu",
                    "japanese": "ピカチュウ",
                    "chinese": "皮卡丘",
                    "french": "Pikachu"
                },
                "type": [
                    "Electric"
                ],
                "base": {
                    "HP": 35,
                    "Attack": 55,
                    "Defense": 40,
                    "Sp. Attack": 50,
                    "Sp. Defense": 50,
                    "Speed": 90
                }
            }
        ]
    )

    const [humanDeck, setHumanDeck] = useState([
        
    ])



    return (
        <StateContext.Provider
            value={{
                computerDeck, setComputerDeck,

                humanDeck, setHumanDeck,

            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useDeckContext = () => useContext(StateContext)