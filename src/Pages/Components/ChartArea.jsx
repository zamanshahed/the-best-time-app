import React from 'react';
import useGeneralStore from '../../App/Store/GeneralStore';
import AnalysisChart from './AnalysisChart';
import CrowdAnalysis from './CrowdAnalysis';
import LineChartC from './LineChartC';

function ChartArea() {
    const { selectedSection } = useGeneralStore();
    return (
        <div>
            {
                selectedSection === "dashboard" ? <Dashboard /> : ""
            }
            {
                selectedSection === "data_analysis" ? (
                    <>
                        <div className="text-3xl font-medium pb-5">Data Analysis</div>
                        <AnalysisChart />
                    </>
                ) : ""
            }
            {
                selectedSection === <CrowdAnalysis /> ? "crowd_analysis" : ""
            }
            {
                selectedSection === "settings" ? "settings" : ""
            }

        </div>
    );
}

export default ChartArea

function Dashboard() {
    return (
        <>
            <div className="text-3xl font-medium pb-5">Weekly Data Summery</div>
            <div>
                <LineChartC />
            </div>
        </>
    )
}