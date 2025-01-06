import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import { material } from '../../library/material';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);


const barChartData = [
    ["Policy", "Non-Compliant Rules", "Compliant Rules"],
    ["ISO270001", 0, 0.25],
    ["GDPR", 0.25, 0.25],
    ["HIPAA", 0.5, 0.25],
    ["(Prod)-Corp", 0.75, 0.25],
];

const barChartOptions = {
    title: "Compliance by Policy",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
        title: "Compliance Percentage",
        minValue: 0,
        format: "percent",
    },
    vAxis: {
        title: "Policies",
    },
    legend: {
        position: "bottom",
    },
};

const lineChartData = [
    ["Time", "Non-Compliant Policy", "Potentially Non-Compliant Policy", "Violation"],
    [new Date(2023, 3, 1), 400, 1000, 200],
    [new Date(2023, 4, 1), 600, 1200, 400],
    [new Date(2023, 5, 1), 800, 1300, 500],
];

const lineChartOptions = {
    title: "Compliance Trends",
    curveType: "function",
    legend: { position: "bottom" },
    hAxis: {
        title: "Month",
        format: "MMM-yy",
        gridlines: { count: 3 },
        ticks: [
            new Date(2023, 3, 1),
            new Date(2023, 4, 1),
            new Date(2023, 5, 1),
        ],
    },
    series: {
        0: { color: "#ffff00", pointSize: 6 },
        1: { color: "#0000ff", pointSize: 6 },
        2: { color: "#ff0000", pointSize: 6 },
    },
};

const violations = [
    { label: "Critical Violations", count: 17, color: "#FF5252" },
    { label: "Moderate Violations", count: 3, color: "#FFB74D" },
    { label: "Marginal Violations", count: 5, color: "#FFEE58" },
];

const compliantPolicy = 80;
const failedPolicy = 15;

const doughnutChartData = {
    datasets: [
        {
            data: [compliantPolicy, failedPolicy],
            backgroundColor: ['#41bdf2', '#f3f31f'],
            borderWidth: 1,
            circumference: 270,
            rotation: 225,
            cutout: '80%',
        },
    ],
    labels: ['Compliant', 'Failed'],
};

const centerTextPlugin = {
    id: 'centerText',
    beforeDraw: (chart) => {
        const { width, height } = chart;
        const ctx = chart.ctx;

        ctx.save();
        const text = `${compliantPolicy}% Compliant`;
        console.log(text)
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#000';

        const textX = width / 2;
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.restore();
    },
};

const doughnutChartOptions = {
    responsive: true,
    plugins: {
        tooltip: {
            enabled: true,
        },
        legend: {
            display: true,
            position: 'bottom',
        },
    },
    maintainAspectRatio: false,
    plugins: [centerTextPlugin],
};

const complianceSummary = [
    { label: "Fully COmplaint Policies", count: 80, color: "#41bdf2" },
    { label: "Non COmplaint Policies", count: 3, color: "#FFB74D" },
    { label: "Existing Violations", count: 17, color: "#f52f42" },
];

const dataBarChart = {
    labels: ['Europe', 'UK'],
    datasets: [
        {
            // label: 'Compliance',
            data: [2, 1],
            backgroundColor: ['#f98cb8', '#fbc981'],
        },
    ],
};

const optionsBarChart = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "Compliance Trends",
            font: {
                weight: "bold",
                size: 18,
            },
            align: "start",
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            max: 5,
            title: {
                display: true,
                text: "Compliance Score",
                font: {
                    weight: "bold",
                    size: 12,
                },
            },
        },
        x: {
            title: {
                display: true,
                text: "Regions",
                font: {
                    weight: "bold",
                    size: 12,
                },
            },
        },
    },
};

function DashboardChart() {
    const [selectedOption, setSelectedOption] = useState("My Tasks");
    const chartData = {
        "My Tasks": [10, 20, 30],
        "My Department": [15, 25, 20],
        "My Organisation": [20, 15, 25],
    };

    const taskStatusSummaryData = {
        labels: ["Overdue", "Open", "Completed"],
        datasets: [
            {
                data: chartData[selectedOption],
                backgroundColor: ["#FF9999", "#FFCC99", "#99FFCC"],
                hoverBackgroundColor: ["#FF6666", "#FF9966", "#66FF99"],
                borderWidth: 1,
            },
        ],
    };

    const taskStatusSummaryOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "right",
            },
        },
        cutout: "70%",
    };

    const chartDataSource = [
        ["Task Status", "Count"],
        ["Overdue", 10],
        ["Open", 20],
        ["Completed", 30],
    ];

    // const options = {
    //     title: "Task Status Summary",
    //     is3D: false, 
    //     pieHole: 0.4, 
    //     slices: {
    //         0: { color: "#FF9999" },
    //         1: { color: "#FFCC99" }, 
    //         2: { color: "#99FFCC" }, 
    //     },
    //     legend: {
    //         position: "right", 
    //     },
    // };

    const chartDatachartData = [
        {
            label: "Green Level data consent",
            percentage: 31,
            color: "#58B947",
        },
        {
            label: "Amber Level data consent",
            percentage: 58,
            color: "#F9A825",
        },
        {
            label: "Red Level data consent",
            percentage: 11,
            color: "#D32F2F",
        },
    ];

    const dataChart = {
        labels: chartDatachartData.map((data) => data.label),
        datasets: [
            {
                data: chartDatachartData.map((data) => data.percentage),
                backgroundColor: chartDatachartData.map((data) => data.color),
                borderWidth: 0,
            },
        ],
    };

    const chartOptionsAcknowledgement = {
        cutout: "70%",
        plugins: {
            tooltip: { enabled: true },
            legend: { display: false },
        },
    };

    const lineChartConsentManagementData = [
        ["Time", "Red Data", "Amber Data", "Green Data"],
        [new Date(2023, 3, 1), 100, 1, 800],
        [new Date(2023, 4, 1), 300, 4111, 500],
        [new Date(2023, 5, 1), 600, 70, 100],
        [new Date(2023, 6, 1), 300, 4111, 500],
    ];

    const lineChartConsentManagementOptions = {
        title: "Compliance Trends",
        curveType: "function",
        legend: { position: "bottom" },
        hAxis: {
            title: "Month",
            format: "MMM-yy",
            gridlines: { count: 3 },
            ticks: [
                new Date(2023, 3, 1),
                new Date(2023, 4, 1),
                new Date(2023, 5, 1),
                new Date(2023, 6, 1),
            ],
        },
        series: {
            0: { color: "#ff0000" },
            1: { color: "#ffff00" },
            2: { color: "#00ff00" },
        },
    };

    const chartDataAcknowledgement = [
        {
            label: "Data Privacy Acknowledgement",
            percentage: 100,
            color: "#6A1B9A",
        },
    ];

    const dataChartAcknowledgement = {
        labels: chartDataAcknowledgement.map((data) => data.label),
        datasets: [
            {
                data: chartDataAcknowledgement.map((data) => data.percentage),
                backgroundColor: chartDataAcknowledgement.map((data) => data.color),
                borderWidth: 0,
            },
        ],
    };


    return (
        <div className='row m-3'>
            <div className='col-6 '>
                <material.Card elevation={3} className='' style={{ padding: "16px", marginBottom: "16px", minWidth: '200px', height: "auto", }}>
                    <Chart
                        chartType="BarChart"
                        width="100%"
                        height="400px"
                        data={barChartData}
                        options={barChartOptions}
                    />
                </material.Card>
            </div>
            <div className='col-6 '>
                <material.Card elevation={3} className='' style={{ padding: "16px", marginBottom: "16px", minWidth: '200px', height: "430px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                    <material.Typography className='fs-6 fw-bold' sx={{ textAlign: 'left', paddingLeft: 2, width: '100%' }} >Violations Summary</material.Typography>
                    <material.Grid container spacing={2} sx={{ marginTop: 2 }}>
                        {violations.length > 0 ? (
                            violations.map((violation, index) => (
                                <material.Grid item xs={4} key={index}>
                                    <material.Card
                                        elevation={2}
                                        sx={{
                                            padding: 2,
                                            textAlign: "center",
                                            backgroundColor: "#F5F5F5",
                                            borderRadius: "15px",
                                            "&:hover": {
                                                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                                            },
                                        }}
                                    >
                                        <material.Typography variant="h4" fontWeight="bold" sx={{ marginBottom: 1 }}>{violation.count} </material.Typography>
                                        <material.Typography variant="body1" sx={{ marginBottom: 1 }}>{violation.label}</material.Typography>
                                        <material.Box
                                            sx={{
                                                height: "10px",
                                                backgroundColor: violation.color,
                                                borderRadius: "4px",
                                            }}
                                        />
                                    </material.Card>
                                </material.Grid>
                            ))
                        ) : (
                            <material.Grid item xs={12}>
                                <material.Typography variant="body1" color="textSecondary" textAlign="center">No data available</material.Typography>
                            </material.Grid>
                        )}
                    </material.Grid>
                    <material.Link
                        href="#"
                        sx={{
                            display: "block",
                            textAlign: "center",
                            marginTop: 2,
                            textDecoration: "none",
                            fontWeight: "bold",
                            color: "#1976d2",
                            "&:hover": { textDecoration: "underline" },
                        }}
                    > View Detail</material.Link>
                </material.Card>
            </div >
            <div className='col-6 '>
                <material.Card elevation={3} className='' style={{ padding: "16px", marginBottom: "16px", minWidth: '200px', height: "auto", }}>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={lineChartData}
                        options={lineChartOptions}
                        formatters={[
                            {
                                column: 0,
                                type: "DateFormat",
                                lineChartOptions: {
                                    timeZone: 0,
                                },
                            },
                        ]}
                    />
                </material.Card>
            </div>
            <div className='col-6 '>
                <material.Card elevation={3} className='' style={{ padding: "16px", marginBottom: "16px", minWidth: '200px', height: "430px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                    <Doughnut
                        data={doughnutChartData}
                        options={doughnutChartOptions}
                        style={{ width: "50%" }}
                    />
                </material.Card>
            </div>
            <div className='col-6 '>
                <material.Card elevation={3} className='' style={{ padding: "16px", marginBottom: "16px", minWidth: '200px', height: "430px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                    <material.Typography className='fs-6 fw-bold' sx={{ textAlign: 'left', paddingLeft: 2, width: '100%' }} >Compliance Summary</material.Typography>
                    <material.Grid container spacing={2} sx={{ marginTop: 2 }}>
                        {complianceSummary.length > 0 ? (
                            complianceSummary.map((compliance, index) => (
                                <material.Grid item xs={4} key={index}>
                                    <material.Card
                                        elevation={2}
                                        sx={{
                                            padding: 2,
                                            textAlign: "center",
                                            backgroundColor: "#F5F5F5",
                                            borderRadius: "15px",
                                            "&:hover": {
                                                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                                            },
                                        }}
                                    >
                                        <material.Typography variant="h4" fontWeight="bold" sx={{ marginBottom: 1 }}>{compliance.count} </material.Typography>
                                        <material.Typography variant="body1" sx={{ marginBottom: 1 }}>{compliance.label}</material.Typography>
                                        <material.Box
                                            sx={{
                                                height: "10px",
                                                backgroundColor: compliance.color,
                                                borderRadius: "4px",
                                            }}
                                        />
                                    </material.Card>
                                </material.Grid>
                            ))
                        ) : (
                            <material.Grid item xs={12}>
                                <material.Typography variant="body1" color="textSecondary" textAlign="center">No data available</material.Typography>
                            </material.Grid>
                        )}
                    </material.Grid>
                    <material.Link
                        href="#"
                        sx={{
                            display: "block",
                            textAlign: "center",
                            marginTop: 2,
                            textDecoration: "none",
                            fontWeight: "bold",
                            color: "#1976d2",
                            "&:hover": { textDecoration: "underline" },
                        }}
                    > View Detail</material.Link>
                </material.Card>
            </div>
            <div className='col-6 '>
                <material.Card elevation={3} className='' style={{ padding: "16px", marginBottom: "16px", minWidth: '200px', height: "auto", }}>
                    Chart Not Ready
                </material.Card>
            </div>
            <div className='col-6 '>
                <material.Card elevation={3} className='' style={{ padding: "16px", marginBottom: "16px", minWidth: '200px', height: "auto", }}>
                    <Bar data={dataBarChart} options={optionsBarChart} />
                </material.Card>
            </div>
            <div className='col-6 '>
                <material.Card elevation={3} className='' style={{ padding: "16px", marginBottom: "16px", minWidth: '200px', height: "470px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                    <material.Typography className='fs-6 fw-bold mt-5' sx={{ textAlign: 'left', paddingLeft: 2, width: '100%' }} >Task Status Summary</material.Typography>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                        <label style={{ marginRight: "15px" }}>
                            <input
                                type="radio"
                                name="taskStatus"
                                value="My Tasks"
                                checked={selectedOption === "My Tasks"}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            My Tasks
                        </label>
                        <label style={{ marginRight: "15px" }}>
                            <input
                                type="radio"
                                name="taskStatus"
                                value="My Department"
                                checked={selectedOption === "My Department"}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            My Department
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="taskStatus"
                                value="My Organisation"
                                checked={selectedOption === "My Organisation"}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            My Organisation
                        </label>
                    </div>
                    <Doughnut data={taskStatusSummaryData} options={taskStatusSummaryOptions} />
                </material.Card>
            </div>
            <div className='col-6 '>
                <material.Card elevation={3} className='' style={{ padding: "16px", marginBottom: "16px", minWidth: '200px', height: "auto", }}>
                    <Chart
                        chartType="LineChart"
                        data={lineChartConsentManagementData}
                        options={lineChartConsentManagementOptions}
                        width="100%"
                        height="400px"
                        loader={<div>Loading Chart...</div>}
                    />
                </material.Card>
            </div>
            <div className='col-6 '>
                <material.Card elevation={3} className='' style={{ padding: "16px", marginBottom: "16px", minWidth: '200px', height: "430px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                    <Doughnut
                        data={dataChart}
                        options={{
                            cutout: "70%",
                            plugins: {
                                tooltip: { enabled: true },
                                legend: {
                                    position: "top",
                                },
                                datalabels: {
                                    display: true,
                                    color: "#fff",
                                    font: {
                                        weight: 'bold',
                                        size: 16,
                                    },
                                    formatter: (value) => `${value}%`,
                                },
                            },
                        }}
                        style={{ width: 200, height: 200 }}
                    />
                </material.Card>
            </div >
            <div className='col-6 '>
                <material.Card elevation={3} className='' style={{ padding: "10px", marginBottom: "400px", minWidth: '200px', height: "470px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                    <Doughnut data={dataChartAcknowledgement} options={chartOptionsAcknowledgement} />
                    <div style={{ marginTop: "-250px", fontSize: "15px", fontWeight: "bold" }}>
                        {chartDataAcknowledgement[0].percentage}%
                    </div>
                    <div style={{ marginTop: "10px", fontSize: "14px" }}>
                        {chartDataAcknowledgement[0].label}
                    </div>
                </material.Card>
            </div >
        </div >
    )
}

export default DashboardChart;
