import React from 'react'  
import RideSelector from './RideSelector'

const style = {
    wrapper: 'flex-1 h-full flex flex-col justify-between', 
    rideSelectorContainer : 'h-full flex flex-col overflow-hidden',
    confirmButtonContainer: 'border-t-2 cursor-pointer z-10', 
    confirmButton:'bg-black text-white m-4 py-4 text-enter text-xl'
}

const Confirm = () => { 
    const storeTripDetails = async ()=>{}
  return (
    <div className={style.wrapper}>
        <div className={style.rideSelectorContainer}>
            <RideSelector/>
        </div>  
        <div className={style.confirmButtonContainer}>
            <div 
                className={style.confirmButton}
                onClick={()=>storeTripDetails()}
            >
            confirm Uberx    
            </div>
        </div>

    </div>
  )
}

export default Confirm