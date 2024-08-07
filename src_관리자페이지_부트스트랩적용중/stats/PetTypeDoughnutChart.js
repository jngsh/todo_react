import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const PetTypeDoughnutChart = () => {
    const [data, setData] = useState({
        labels: [], // 차트의 레이블
        datasets: [{
            data: [], // 차트의 데이터
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // 색상 배열
        }]
    });
    const [loading, setLoading] = useState(true); // 로딩 상태

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8090/bisang/admin/stats/sales/pet-type');
                const result = await response.json();
                
                // 데이터가 배열인지 확인
                if (Array.isArray(result)) {
                    setData({
                        labels: result.map(item => item.petType),
                        datasets: [{
                            data: result.map(item => item.petRatio),
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        }]
                    });
                } else {
                    console.error('Unexpected data format:', result);
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="chart-container">
            <h3>Pet Type Ratio</h3>
            <Doughnut data={data} />
        </div>
    );
};

export default PetTypeDoughnutChart;


// 도넛 차트 가운데에 텍스트 추가했는데 다른 차트에도 Pet Type이라는 텍스트가 뜨는 오류 발생
// import React, { useState, useEffect } from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, Plugin } from 'chart.js';
// import 'chart.js/auto';

// // 가운데 텍스트를 추가하는 플러그인
// const centerTextPlugin = {
//     id: 'centerText',
//     beforeDraw: (chart) => {
//         const { ctx, chartArea } = chart;
//         if (!chart.data || !chart.data.datasets.length) return;

//         const { width, height, top, left } = chartArea;
//         const fontSize = 16;
//         const text = 'Pet Type';

//         ctx.save();
//         ctx.font = `${fontSize}px Arial`;
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';
//         ctx.fillStyle = '#000'; // 텍스트 색상

//         // 가운데 텍스트를 그립니다
//         ctx.fillText(text, left + width / 2, top + height / 2);
//         ctx.restore();
//     }
// };

// // Chart.js에 플러그인 등록
// ChartJS.register(ArcElement, Tooltip, Legend, centerTextPlugin);

// const PetTypeDoughnutChart = () => {
//     const [data, setData] = useState({
//         labels: [], // 차트의 레이블
//         datasets: [{
//             data: [], // 차트의 데이터
//             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // 색상 배열
//         }]
//     });
//     const [loading, setLoading] = useState(true); // 로딩 상태

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('http://localhost:8090/bisang/admin/stats/sales/pet-type');
//                 const result = await response.json();
                
//                 // 데이터가 배열인지 확인
//                 if (Array.isArray(result)) {
//                     setData({
//                         labels: result.map(item => item.petType),
//                         datasets: [{
//                             data: result.map(item => item.petRatio),
//                             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                         }]
//                     });
//                 } else {
//                     console.error('Unexpected data format:', result);
//                 }
//             } catch (error) {
//                 console.error('Failed to fetch data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="chart-container">
//             <h3>Pet Type Ratio</h3>
//             <Doughnut data={data} />
//         </div>
//     );
// };

// export default PetTypeDoughnutChart;
