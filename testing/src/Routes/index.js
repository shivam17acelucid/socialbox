import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./routes.scss";
const Welcome = React.lazy(() => import("../Components/Welcome/welcome"));

function RouteF () {

    return(
        <div>
            <Suspense
                    fallback={ <div className="load_parent">
                    <div className="loaderss"></div>
                </div>}
            >
                <Routes>
                    <Route path="/" element={<Welcome />} />
                </Routes>
            </Suspense>
        </div>
    )
}
export default RouteF;