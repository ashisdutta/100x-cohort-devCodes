import { useEffect} from "react";
import useFetch from "../customHook/useFetch";
import { useState } from "react";
import "./Card.css";
export default function Card({name}){
    const apiData = useFetch(name);
    
    if (!apiData) return <div className="card">Loading…</div>;


    const date = new Date(apiData.created_at);
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    console.log(apiData)



    return <div className="card">
        <div className="pic-name-info">
            <div className="profile-pic">
                <img src={apiData.avatar_url} alt="img" />
            </div>

            <div>
                <h2>{apiData.name}</h2>
                <p>{`@${apiData.login}`}</p>
                <p>{`Since ${month} ${year}`}</p>
            </div>
        </div>

        <div className="bio">
            {apiData.bio}
        </div>

        <div className="social">
            {`Twitter: ${apiData.twitter_username}`}
        </div>
        <div className="follow-info">
            <div>
                <div>Repos</div>
                <div>{apiData.public_repos}</div>
            </div>
            
            <div>
                <div>Followers</div>
                <div>{apiData.followers}</div>
            </div>
            
            <div>
                <div>following</div>
                <div>{apiData.following}</div>
            </div>
        </div>

        <div className="profile-button">
            <button onClick={() => window.open(apiData.html_url, "_blank")}>View Profile</button>
        </div>
    </div>
}