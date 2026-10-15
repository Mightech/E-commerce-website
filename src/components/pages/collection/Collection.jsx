import {useState} from 'react'
import '../collection/collection.css'
import All from '../collection/All.jsx'
import Seating from './Seating.jsx'
import Dining from './Dining.jsx'
import Storage from './Storage.jsx'

const Collection = () => {
    const [category, setCategory] = useState("all");
  return (
    <div className='collection-container'>
        <div className='collection-header-wrapper'>
        <div className='collection-heading-wrapper'>
            <h6>HANDPICKED</h6>
            <h2>The Collection</h2>
        </div>
        <div className='collection-btns-wrapper'>
            <button type='button' onClick={()=> setCategory("all")} className={category === "all" ? "active" : ""}><h5>ALL</h5></button>
            <button type='button'  onClick={()=> setCategory("seating")} className={category === "seating"? "active" : ""}><h5>SEATING</h5></button>
            <button type='button' onClick={()=> setCategory("dining")} className={category ==="dining" ? "active" : ""}><h5>DINING</h5></button>
            <button type='button'  onClick={()=> setCategory("storage")} className={category === "storage" ? "active" : ""}><h5>STORAGE</h5></button>
        </div>
      

        </div>
        <div className='collection-image-container'>
            <div className='collection-image-wrapper'>
                {category === "all" && <All/>}
                {category === "seating" && <Seating/>}
                {category === "dining" && <Dining/>}
                {category === "storage" && <Storage/>}
                {/* <All/> */}
                <div className='view-all-pieces-wrapper'>
                      <button>VEIW ALL PIECES</button>
                    </div>
            </div>

        </div>
        
    </div>
  )
}

export default Collection
