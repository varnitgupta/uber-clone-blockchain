import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar' 
import Map from '../components/Map'
import styles from '../styles/Home.module.css' 

const style = {
  wrapper: 'h-screen w-screen flex flex-col', 

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
            {/* loacation selector */}
            {/* confirm ride */}
          </div>
        </div>

           

          
    </div>
  )
}
