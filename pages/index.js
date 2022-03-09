import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar' 
import Map from '../components/Map' 
import LocationSelector from '../components/LocationSelector'
import styles from '../styles/Home.module.css' 
import Confirm from '../components/Confirm'

const style = {
  wrapper: 'h-screen w-screen flex flex-col',  
  main: 'h-full w-screen flex-1 z-10', 
  mapContainer : 'flex-1 w-full h-full', 
  rideReqestContainer: 'h-[700px] w-[400px] ml-[0rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20 ' , 
  rideRequest: 'h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-hidden'

}

export default function Home() {
  return (
    <div className={style.wrapper}>
        <Navbar/>  
        <div className={style.main}>
          <Map/>
        </div>  
        <div className={style.rideReqestContainer}>
          <div className={style.rideRequest}>
            <LocationSelector/>
            <Confirm/>
          </div>
        </div>

           

          
    </div>
  )
}
