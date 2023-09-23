import React from 'react'
const card  = ({item,handleClick}) => {
    const {name,image,price}=item;
    
  return (
    <div className='card'>
        <div>
            <img src={image}/>

        </div>
        <div className='detail'>
            <p>
                Name:{name}
            </p>
            <p>
                Price:{price}Rs
            </p>
            <button onClick={()=>handleClick
            (item)}>

            </button>

        </div>
      
    </div>
  )
}

export default  card;


