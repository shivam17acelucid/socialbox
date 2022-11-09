import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./routes.scss";
const Welcome = React.lazy(() => import("../Components/Welcome/welcome"));
const InfluencersList = React.lazy(() => import("../Components/SearchResults/influencerlists"));
const ProfileData = React.lazy(() => import("../Components/ProfileData/profile"));
const Login = React.lazy(() => import("../Components/Login/login"));

function RouteF() {

    return (
        <div>
            <Suspense
                fallback={<div className="load_parent">
                    <div className="loaderss"></div>
                </div>}
            >
                <Routes>
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/influencerslist/:inputField" element={<InfluencersList />} />
                    <Route path="/profile/:profilename" element={<ProfileData />} />
                </Routes>
            </Suspense>
        </div>
    )
}
export default RouteF;