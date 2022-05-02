import React from "react"
import * as Minesweeper from "../minesweeper.js"
import Board from "./Board.jsx"

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = { board: new Minesweeper.Board(10,1) }
        this.updateGame = this.updateGame.bind(this)


    }

    updateGame(tile,boolean) {
        if (boolean) {
            tile.toggleFlag() 
        } else {
            tile.explore()
        }
        
        this.setState({board: this.state.board}, () => {
        if (this.state.board.won()) {
            alert("you win")
            this.restartGame()
        } else if (this.state.board.lost()) {
            alert("you lose")
            this.restartGame()
        }})
    }
    // componentDidUpdate() {
    //     if (this.state.board.won()) {
    //         alert("you win")
    //         this.restartGame()
    //     } else if (this.state.board.lost()) {
    //         alert("you lose")
    //         this.restartGame()
    //     }
    // }
    restartGame() {
        console.log("attempting restart")
        this.setState ({ board: new Minesweeper.Board(10,10) })
        console.log(this.state)
        
        // this.render()
    }

    render() {
        return (
            <Board board={this.state.board} updateGame={this.updateGame}/>
        )
    }

} 

export default Game