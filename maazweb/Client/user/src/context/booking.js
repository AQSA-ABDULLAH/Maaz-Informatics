import { useState, useContext, createContext, useEffect } from "react";
const BookingContext = createContext();
const BookingProvider = ({ children }) =>{
    const [booking,setBooking] = useState([]);
    useEffect(()=>{
        let existingBooking = localStorage.getItem('booking')
        if (existingBooking) {
            setBooking(JSON.parse(existingBooking))
        }
    }, []);
    
    return(
        <BookingContext.Provider value={[booking,setBooking]}>
            {children}
        </BookingContext.Provider>
    );
};
const useBooking = () => useContext(BookingContext);
export {useBooking,BookingProvider};
