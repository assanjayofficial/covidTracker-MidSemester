import React from 'react'

function Card({pos, semb, men}) {
    return (
      <div>
        <div className="card" style={{width : '18rem'}}>
          <div className="card-header">
            Kasus Covid di indonesia
          </div>
          <ul class="list-group list-group-flush">
          <p classNam="list-group-item">Positif : {pos}</p>      
    <p classNam="list-group-item">Sembuh : {semb}</p>
    <p className="list-group-item">Meninggal : {men}</p>
          </ul>
  </div>
</div>
    )
}

export default Card
