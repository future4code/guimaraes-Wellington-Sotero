import React from 'react'
import {useNavigate} from 'react-Router-dom'

export default function HomePage() {

    const navigate = useNavigate()
    const goToAdminHome = () => navigate('/admin/trips/list')
    const goToListTrips = () => navigate('/trips/list')




 return(
     <div>
         <h1>HomePage</h1>


         <button onClick={goToAdminHome}>Admin Login</button>
         <button onClick={goToListTrips}>Vizualizar Viagens</button>

         
     </div>
 )
}