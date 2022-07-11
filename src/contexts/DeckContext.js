import React, { createContext, useContext, useState } from 'react'
const StateContext = createContext()

export const DeckContext = ({ children }) => {
    const [computerDeck, setComputerDeck] = useState([
        {
            "id": 1,
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
            "id": 2,
            "name": {
                "english": "Ivysaur",
                "japanese": "フシギソウ",
                "chinese": "妙蛙草",
                "french": "Herbizarre"
            },
            "type": [
                "Grass",
                "Poison"
            ],
            "base": {
                "HP": 60,
                "Attack": 62,
                "Defense": 63,
                "Sp. Attack": 80,
                "Sp. Defense": 80,
                "Speed": 60
            }
        }
    ])

    const [humanDeck, setHumanDeck] = useState(
        [
            {
                "id": "Bulbasaur_1657491866016",
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
                "id": "Ivysaur_1657491867214",
                "name": {
                    "english": "Ivysaur",
                    "japanese": "フシギソウ",
                    "chinese": "妙蛙草",
                    "french": "Herbizarre"
                },
                "type": [
                    "Grass",
                    "Poison"
                ],
                "base": {
                    "HP": 60,
                    "Attack": 62,
                    "Defense": 63,
                    "Sp. Attack": 80,
                    "Sp. Defense": 80,
                    "Speed": 60
                }
            },
            {
                "id": "Venusaur_1657491867791",
                "name": {
                    "english": "Venusaur",
                    "japanese": "フシギバナ",
                    "chinese": "妙蛙花",
                    "french": "Florizarre"
                },
                "type": [
                    "Grass",
                    "Poison"
                ],
                "base": {
                    "HP": 80,
                    "Attack": 82,
                    "Defense": 83,
                    "Sp. Attack": 100,
                    "Sp. Defense": 100,
                    "Speed": 80
                }
            }
        ]
    )



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