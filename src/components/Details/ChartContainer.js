import { useState, useEffect } from "react"
import BarChart from "../Charts/BarChart";
import DoughnutChart from "../Charts/DoughnutChart";
import PieChart from "../Charts/PieChart";

const ChartContainer = ({ username }) => {
    const [repoData, setRepoData] = useState(null);

    const apiHandler = async () => {
        const resp = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        const data = await resp.json()
        setRepoData(data)
    }

    useEffect(() => { apiHandler() }, [])

    return (
        <>
            <div className="flex justify-center items-center flex-wrap">
                <PieChart username={username} />
                <BarChart repoData={repoData} />
                <DoughnutChart repoData={repoData} />
            </div>
        </>
    )
}

export default ChartContainer