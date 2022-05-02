import React from 'react'
import Tile from "./Tile"
class Board extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props.board)
    }

    render() {
        return (
            <div className="container">
                {this.props.board.grid.map( (gridRow,i) => {
                    // console.log(`i = ${i}`)
                   return( gridRow.map((tile,j) => {
                         return (<Tile key={[i,j]} pos={[i,j]} tile={tile} updateGame={this.props.updateGame} />)

                    })
                   )
                })}
            </div>
        )
    }
}

export default Board