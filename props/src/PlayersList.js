import React from 'react'
import players from './players'
import Player from './player'

const PlayersList = () => {
  return (
    <div>{players.map((el)=>{
      return(
        <Player el={el}/>
      )
    
    
    })}</div>
  )
}

export default PlayersList