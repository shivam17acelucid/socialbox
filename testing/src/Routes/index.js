import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./routes.scss";
const InfluencersList = React.lazy(() => import("../Components/SearchResults/influencerlists"));
const ProfileData = React.lazy(() => import("../Components/ProfileData/profile"));
const Login = React.lazy(() => import("../Components/Login/login"));
const Signup = React.lazy(() => import("../Components/Signup/signup"));
const Lists = React.lazy(() => import("../Components/List Page/listcomponent"));
const BasketInfluencers = React.lazy(() => import("../Components/BasketInfluencers/index"));
const CalculateCost = React.lazy(() => import("../Components/Calculator/CalculateInfluencers/calculateinf"));
const UserLists = React.lazy(() => import("../Components/UserLists/lists"));
const CompareInfluencers = React.lazy(() => import("../Components/Compare/CompareInfluencers/compareinfluencers"));
const CompareLists = React.lazy(() => import("../Components/Compare/CompareList/comparelists"));
const ProfileSettings = React.lazy(() => import("../Components/ProfileSettings/index"));

function RouteF() {

    return (
        <div>
            <Suspense
                fallback={<div className="load_parent">
                    <div className="loaderss"></div>
                </div>}
            >
                <Routes>
                    <Route path="/home/:id" element={<Lists />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/calculate" element={<CalculateCost />} />
                    <Route path="/influencerslist/" element={<InfluencersList />} />
                    <Route path="/influencerslist/:inputField" element={<InfluencersList />} />
                    <Route path="/influencerslist/:inputField/:er" element={<InfluencersList />} />
                    <Route path="/influencerslist//:er" element={<InfluencersList />} />
                    <Route path="/influencerslist//:followerRange" element={<InfluencersList />} />
                    <Route path="/influencerslist/:inputField/:followerRange" element={<InfluencersList />} />
                    <Route path="/influencerslist//:er/:followerRange" element={<InfluencersList />} />
                    <Route path="/influencerslist/:inputField/:er/:followerRange" element={<InfluencersList />} />
                    <Route path="/basketInfluencers/:categoryName" element={<BasketInfluencers />} />
                    <Route path="/userLists/:listname" element={<UserLists />} />
                    <Route path="/profile/:profilename" element={<ProfileData />} />
                    <Route path="/CompareInfluencers/:influencers" element={<CompareInfluencers />} />
                    <Route path="/CompareInfluencers" element={<CompareInfluencers />} />
                    <Route path="/CompareLists" element={<CompareLists />} />
                    <Route path="/CompareLists/:lists" element={<CompareLists />} />
                    <Route path="/updateprofile/:id" element={<ProfileSettings />} />
                </Routes>
            </Suspense>
        </div>
    )
}
export default RouteF;