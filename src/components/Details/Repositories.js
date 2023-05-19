import React, { useState, useEffect, useCallback } from "react";
import { RiGitRepositoryLine, RiStarFill } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { IoResizeSharp } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
import './Repo.css';


const Repositories = ({ username }) => {
    const [repoData, setRepoData] = useState(null);
    // console.log('Repositories', repoData);
    let finalData = [];

    const apiHandler = useCallback(async () => {
        const resp = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const data = await resp.json();
        setRepoData(data);
    }, [username]);

    useEffect(() => {
        apiHandler();
    }, [apiHandler]);

    if (repoData) {
        finalData = repoData.map((repo) => ({
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            language: repo.language,
            size: repo.size,
        }));
        finalData = finalData
            .filter((repo) => !repo.fork)
            .sort((a, b) => b["stars"] - a["stars"])
            .slice(0, 12)
        // console.log('finalData', finalData.filter((repo) => !repo.fork).sort((a, b) => b["stars"] - a["stars"]).slice(0, 12));
    }
    return (
        <div className="flex justify-center items-center flex-wrap">
            {finalData.map((data) => (
                <div className="RepoContainer" key={uuidv4()}>
                    <div>
                        <h2>
                            <RiGitRepositoryLine /> &nbsp; {data.name}
                        </h2>
                        <p>{data.description}</p>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <span>
                                <GrLanguage /> &nbsp; {data.language}
                            </span>
                            {/* <br /> */}
                            <span>
                                <RiStarFill /> &nbsp; {data.stars}
                            </span>
                        </div>
                        <div>
                            <span>
                                <IoResizeSharp /> &nbsp; {data.size}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Repositories;
