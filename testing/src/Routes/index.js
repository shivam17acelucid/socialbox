import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./routes.scss";
const InfluencersList = React.lazy(() => import("../Components/SearchResults/influencerlists"));
const ProfileData = React.lazy(() => import("../Components/ProfileData/profile"));
const Login = React.lazy(() => import("../Components/Login/login"));
const Lists = React.lazy(() => import("../Components/List Page/listcomponent"));
const BasketInfluencers = React.lazy(() => import("../Components/BasketInfluencers/index"));
const Compare = React.lazy(() => import("../Components/Compare/compare"));
const Calculator = React.lazy(() => import("../Components/Calculator/calculator"));
const UserLists = React.lazy(() => import("../Components/UserLists/lists"));

function RouteF() {

    return (
        <div>
            <Suspense
                fallback={<div className="load_parent">
                    <div className="loaderss"></div>
                </div>}
            >
                <Routes>
                    <Route path="/welcome" element={<Lists />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/influencerslist/" element={<InfluencersList />} />
                    <Route path="/influencerslist/:inputField" element={<InfluencersList />} />
                    <Route path="/basketInfluencers/:categoryName" element={<BasketInfluencers />} />
                    <Route path="/userLists/:listname" element={<UserLists />} />
                    <Route path="/profile/:profilename" element={<ProfileData />} />
                </Routes>
            </Suspense>
        </div>
    )
}
export default RouteF;