

import { Outlet } from "react-router-dom";
import MainNavgation from '../components/MainNavgation';
const RootLayout = () => {
    return <>

        <MainNavgation />
        <main><Outlet /></main>
    </>
}
export default RootLayout