import Awards from "../pages/Awards";
import Driver from "../pages/Driver";
import Drivers from "../pages/Drivers";
import Home from "../pages/Home";
import RaceResult from "../pages/RaceResult";
import Races from "../pages/Races";
import Teams from "../pages/Teams";

// Public Routes
const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/races", element: <Races /> },
    { path: "/race-result/:year/:grandPrix", element: <RaceResult /> },
    { path: "/drivers", element: <Drivers /> },
    { path: "/drivers/:driver", element: <Driver /> },
    { path: "/teams", element: <Teams /> },
    { path: "/awards", element: <Awards /> },
];
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
