import {Outlet} from "react-router-dom";
import Header from "../components/Header";

function RouteLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RouteLayout;