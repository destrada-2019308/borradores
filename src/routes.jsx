import App from "./App";
import { ContentRole } from "./Components/ContentRole";
import {NotFoundPage} from './Pages/NotFoundPage/NotFoundPage.jsx'
//Rutas de cliente
import { RoomsClient } from "./Pages/HomePages/ClientPage/RoomsClient";
import { HotelsClient } from "./Pages/HomePages/ClientPage/HotelsClient";
import { ServicesClient } from "./Pages/HomePages/ClientPage/ServicesClient.jsx";
import { ReservasClient } from "./Pages/HomePages/ClientPage/ReservasClient.jsx";
import { ProfileClient } from "./Pages/HomePages/ClientPage/ProfileClient.jsx";
import { HomeClient  } from "./Pages/HomePages/ClientPage/HomeClient";
import { element } from "prop-types";
import { HomeAdminHotel } from "./Pages/HomePages/AdminHotelPage/HomeAdminHotel.jsx";

export const routes = [
    {
        path: '/',
        element: <App />
    }, 
    {
        path: '/home/*',
        element: <ContentRole/>
    }, 
    {
        path: '*', 
        element: <NotFoundPage/>
    },
    //Parte de Cliente (Pampichi)
    {
        path:'/home/zaru/rooms',
        element: <RoomsClient/>
    },
    {
        path: '/home/zaru/hotels',
        element: <HotelsClient/>
    },
    {
        path: '/home/zaru/services',
        element: <ServicesClient/>
    },
    {
        path: '/home/zaru/reservas',
        element: <ReservasClient/>
    },
    //Cliente opciones user  
    {
        path: '/home/zaru/profile',
        element: <ProfileClient/>
    },
    {
        path: '/home/zaru/home',
        element: <HomeClient/>
    },
    //Admin Hotel
    {
        path: '/home/zaru/homeAdminHotel',
        element: <HomeAdminHotel/>
    }

]