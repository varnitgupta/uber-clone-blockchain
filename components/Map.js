import React, { useEffect } from 'react' 
import mapboxgl from 'mapbox-gl'   
import 'mapbox-gl/dist/mapbox-gl.css';  


const style = {
  wrapper: 'flex-1 h-full w-full'
} 

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN 
console.log(process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN );



const Map = () => { 

  useEffect(() => {
    const map = new mapboxgl.Map({ 
      container : 'map',
      style: 'mapbox://styles/mapbox/streets-v11', 
      center : [-74.5, 40], 
      zoom : 9, 
    })
  },[])
  return (
    <div className={style.wrapper} id = 'map'/>
  )
}

export default Map