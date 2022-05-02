import React from "react"
import Board from "./Board"
import * as Minesweeper from "../minesweeper.js"

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        // this.adjacentBombCount = this.adjacentBombCount.bind(this)
    }
      handleClick(e,value) {
          if (e.altKey) {
              console.log(this.props.updateGame)
              this.props.updateGame(this.props.tile,true)
            //   console.log(this.props.pos,true)
       } else {
            this.props.updateGame(this.props.tile,false)
            // console.log(this.props.pos,false)
       }
           
        }
    render() {

      

        // console.log(this.props)
        // console.log(Minesweeper)
        // console.log(Minesweeper.adjacentBombCount())
        let result;
        // this.props.tile.explored = true
        if (this.props.tile.explored) {
            // if (this.props.tile.explore) {
            if (this.props.tile.bombed) {
                // console.log(this.props.tile.bombed)
                result = "💣"
            } else {
                result = this.props.tile.adjacentBombCount()
            } 
        }

        if (this.props.tile.flagged) {
            // console.log(this.props.tile.bombed)
            result = "🇺🇦"
        }
        return(
           
                <div onClick={this.handleClick} className="tile" >
                    	{result}
                </div>
           
        )
    }
}

export default Tile