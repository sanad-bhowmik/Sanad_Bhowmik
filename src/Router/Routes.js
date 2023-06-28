import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import CourseGuru from "../components/Projects/MotoVintage/CourseGuru";
import MotoVintage from "../components/Projects/MotoVintage/MotoVintage";
import ShutterUp from "../components/Projects/MotoVintage/ShutterUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/motovintage',
                element: <MotoVintage></MotoVintage>
            },
            {
                path: '/shutterup',
                element: <ShutterUp></ShutterUp>
            },
            {
                path: '/courseguru',
                element: <CourseGuru></CourseGuru>
            }
        ]
    }
])

export default router;