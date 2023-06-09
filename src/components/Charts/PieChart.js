import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import GhPolyglot from "gh-polyglot";
import './chart.css';

ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = ({ username }) => {

    const [langData, setLangData] = useState(null);
    let userData = [];
    let userLabels = [];

    useEffect(() => {
        let me = new GhPolyglot(`${username}`);
        me.userStats((err, stats) => {
            if (err) {
                console.log(err);
            } else {
                setLangData(stats);
            }
        });
    }, [username]);

    if (langData) {
        userData = langData.map((val) => val.value);
        userLabels = langData.map((val) => val.label);
    }
    
    return (
        <div className="piechart-container">
            {langData && (
                <Pie
                    data={{
                        labels: userLabels,
                        datasets: [
                            {
                                label: "# of Votes",
                                data: userData,
                                backgroundColor: [
                                    "#272643",
                                    "#3a82e4",
                                    "#40b2a4",
                                    "#eff2ec",
                                    "#dedad0",
                                    "#d0e6da",
                                    "#085856",
                                    "#24366e",
                                    "#143e50",
                                    "#7e245c",
                                    "#eeca4a",
                                ],
                                borderColor: [
                                    "#272643",
                                    "#3a82e4",
                                    "#40b2a4",
                                    "#eff2ec",
                                    "#dedad0",
                                    "#d0e6da",
                                    "#085856",
                                    "#24366e",
                                    "#143e50",
                                    "#7e245c",
                                    "#eeca4a",
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }}
                    width={600}
                    height={400}
                    options={{
                        maintainAspectRatio: false, responsive: true, plugins: {
                            title: {
                                display: true,
                                text: 'TOP LANGUAGES',
                            }
                        }
                    }}
                />
            )}
        </div>
    );
};

export default PieChart;
