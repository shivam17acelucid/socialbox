import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProfileData = () => {
    const [influencersData, setInfluencersData] = useState([]);

    let { profilename } = useParams();

    const fetchProfiles = () => {
        const url = `http://localhost:4000/getrelatedinfluencers?inputField=${profilename}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        setInfluencersData(res)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchProfiles();
        influencersData.map((data) => {
            // console.log(data.edge_followed_by.count)  For Followers Count

            // let edges = data.edge_owner_to_timeline_media.edges;   For CPL
            // let averageLikesCount = 0;
            // edges.forEach((res) => {
            //     averageLikesCount += Math.trunc(res.node.edge_liked_by.count / 6);
            // })
            // console.log(averageLikesCount)

            // let edges = data.edge_owner_to_timeline_media.edges;  //For CCL
            // let averageCommentCount = 0;
            // edges.forEach((res) => {
            //     averageCommentCount += Math.trunc(res.node.edge_media_to_comment.count / 6);
            // })
            // console.log(averageCommentCount)

            // let edges = data.edge_felix_video_timeline.edges;  //For CPREELLIKE
            //     let averageReelLikeCount = 0;
            //     edges.forEach((res) => {
            //         averageReelLikeCount += Math.trunc(res.node.edge_liked_by.count / 6);
            //     })
            //     console.log(averageReelLikeCount)

            
            // let edges = data.edge_felix_video_timeline.edges; //FOR CPREELCOMMENT
            // let averageReelCommentCount = 0;
            // edges.forEach((res) => {
            //     averageReelCommentCount += Math.trunc(res.node.edge_media_to_comment.count / 6);
            // })
            // console.log(averageReelCommentCount)

            // let edges = data.edge_felix_video_timeline.edges; //FOR CPREELAverageView
            // let averageReelView = 0;
            // edges.forEach((res) => {
            //     averageReelView += Math.trunc(res.node.video_view_count / 6);
            // })
            // console.log(averageReelView)
        })
    }, []);

    const getCostPerReelView = () => {
            influencersData.forEach((data) => {
                let edges = data.edge_felix_video_timeline.edges;
                let averageReelView = 0;
                edges.forEach((res) => {
                    averageReelView += Math.trunc(res.node.video_view_count / 6);
                })
                console.log(averageReelView)
            })
    }

    return (
        <>
            <div>
                <div>
                    <button onClick={getCostPerReelView}>Testing</button>
                </div>
            </div>
        </>
    )
}
export default ProfileData; 