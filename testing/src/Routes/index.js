import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./routes.scss";
const Welcome = React.lazy(() => import("../Components/Welcome/welcome"));
const InfluencersList = React.lazy(() => import("../Components/SearchResults/influencerlists"));

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
                    <Route path="/influencerslist/:inputField" element={<InfluencersList />} />
                </Routes>
            </Suspense>
        </div>
    )
}
export default RouteF;