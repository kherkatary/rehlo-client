import { useState } from 'react';
import { AuthProvider } from './Context/auth';
import { Home, Private, Profile, RoomDetails, Login, SignUp, MyBookings, BookingPage } from './pages';
import { Footer, Navbar } from './Components'; 
import { Routes, Route } from 'react-router-dom'; 


function App() {

  return (
    <div>
      <AuthProvider>
        <Navbar />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<RoomDetails />} />
            <Route path="/sign-in" element={<Login />} /> 
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="/user" element={<Private/>}>
              <Route path="profile" element={<Profile/>} /> 
              <Route path="my-bookings" element={<MyBookings/>} /> 
            </Route>
            <Route path="/booking" element={<Private/>}>
              <Route path="form/:id" element={<BookingPage/>} /> 
              
            </Route>
          </Routes>
        </div>

        <div>
          <Footer />
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
