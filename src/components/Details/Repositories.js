import React, { useState, useEffect, useCallback } from "react";
import { RiGitRepositoryLine, RiStarFill } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { IoResizeSharp } from "react-icons/io5";
// import { v1 as uuidv1 } from 'uuid';
import { v4 as uuidv4 } from 'uuid';
import './Repo.css';


const Repositories = ({ username }) => {
    const [repoData, setRepoData] = useState(null);
    // console.log('Repositories', repoData);
    let finalData = [];

    const apiHandler = async () => {
        const resp = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        const data = await resp.json()
        setRepoData(data)
    }

    useEffect(() => {
        apiHandler();
    }, []);

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
// const AllRepoContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   max-width: 2200px;
// `;
// const RepoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   background: #fff;
//   border-radius: 10px;
//   font-size: 1.25rem;
//   height: 20rem;
//   width: 33.5rem;
//   margin: 1rem;
//   padding: 4rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
//   :hover {
//     box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
//   }
//   h2 {
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
//   p {
//     color: #2e2e2e;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
//   @media only screen and (max-width: 600px) {
//         width: 45rem;
//   }
// `;

// const RepoBottom = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
export default Repositories;
