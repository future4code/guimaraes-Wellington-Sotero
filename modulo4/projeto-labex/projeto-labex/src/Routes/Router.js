import React from 'react';
import { BrowserRouter, Routes, Route } from ''
import AdminHomePage from '../pages/AdminHomePage';
import ApplicationFormPage from '../pages/ApplicationFormPage';
import CreateTripePage from '../pages/CreateTripePage';
import HomePage from '../pages/HomePage';
import ListaTripsPage from '../pages/ListaTripsPage';
import LoginPage from '../pages/LoginPage';
Import TripDetailsPage from '../pages/TripDetailsPage';

export default function Router() {
  return (
      <BrowserRouter>
      <Routes>
          <Route index path='/'element={<HomePage/>}/>
          <Route exact path='/trips/list'element={<ListaTripsPage/>}/>
          <Route exact path='/admin/trips/:id'element={<TripDetailsPage/>}/>
          <Route exact path='/admin/trips/list'element={<AdminHomePage/>}/>
          <Route exact path='/trips/application'element={<ApplicationFormPage/>}/>
          <Route exact path='/admin/trips/create'element={<CreateTripePage/>}/>
          <Route exact path='/login'element={<LoginPage/>}/>
      </Routes>

      </BrowserRouter>
    
  )
}
