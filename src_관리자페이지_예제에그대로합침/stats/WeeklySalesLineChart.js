// import React, { useState, useEffect } from 'react';
// import { Chart as ChartJS, registerables } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(...registerables);

// const WeeklySalesLineChart = ({ selectedDate }) => {
//     const generateLast7DaysLabels = () => {
//         const labels = [];
//         for (let i = 6; i >= 0; i--) {
//             const date = new Date();
//             date.setDate(date.getDate() - i);
//             labels.push(date.toISOString().split('T')[0]);  // YYYY-MM-DD 형식으로 변환
//         }
//         return labels;
//     };

//     const [data, setData] = useState({
//         labels: generateLast7DaysLabels(),
//         datasets: [
//             {
//                 label: 'Weekly Sales',
//                 data: Array(7).fill(0),  // 최근 일주일 매출 데이터를 0으로 초기화
//                 fill: false,
//                 backgroundColor: 'rgba(75,192,192,0.4)',
//                 borderColor: 'rgba(75,192,192,1)',
//             }
//         ]
//     });

//     useEffect(() => {
//         fetchWeeklySales(); // 초기 로드 시 선택된 날짜의 데이터를 가져옴
//     }, [selectedDate]); // selectedDate가 변경될 때마다 useEffect 실행

//     const fetchWeeklySales = () => {
//         // 예시 URL: 실제 URL은 서버에 맞게 변경해야 함
//         fetch(`http://localhost:8090/bisang/admin/recent-week`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 const labels = generateLast7DaysLabels();
//                 const salesData = Array(7).fill(0);  // 최근 일주일 매출 데이터를 0으로 초기화

//                 data.forEach(d => {
//                     const index = labels.indexOf(d.saleDate);
//                     if (index !== -1) {
//                         salesData[index] = d.totalSale;
//                     }
//                 });

//                 setData({
//                     labels: labels,
//                     datasets: [
//                         {
//                             label: 'Weekly Sales',
//                             data: salesData,
//                             fill: false,
//                             backgroundColor: 'rgba(75,192,192,0.4)',
//                             borderColor: 'rgba(75,192,192,1)',
//                         }
//                     ]
//                 });
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetch operation:', error);
//             });
//     };

//     return (
//         <div>
//             <h2>Weekly Sales Trend</h2>
//             <Line data={data} />
//         </div>
//     );
// };

// export default WeeklySalesLineChart;

import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(...registerables);

const WeeklySalesLineChart = ({ selectedDate }) => {
    const generateLast7DaysLabels = () => {
        const labels = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            labels.push(date.toISOString().split('T')[0]);
        }
        return labels;
    };

    const [data, setData] = useState({
        labels: generateLast7DaysLabels(),
        datasets: [
            {
                label: 'Weekly Sales',
                data: Array(7).fill(0),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            }
        ]
    });

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 1000000,
                ticks: {
                    callback: function(value) {
                        return value.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' });
                    }
                }
            }
        }
    };

    useEffect(() => {
        fetchWeeklySales(); // 초기 로드 시 선택된 날짜의 데이터를 가져옴
    }, [selectedDate]); // selectedDate가 변경될 때마다 useEffect 실행

    const fetchWeeklySales = () => {
        // 예시 URL: 실제 URL은 서버에 맞게 변경해야 함
        fetch(`http://localhost:8090/bisang/admin/stats/sales/recent-week`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const labels = generateLast7DaysLabels();
                const salesData = Array(7).fill(0);  // 최근 일주일 매출 데이터를 0으로 초기화

                data.forEach(d => {
                    const index = labels.indexOf(d.saleDate);
                    if (index !== -1) {
                        salesData[index] = d.totalSale;
                    }
                });

                setData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Weekly Sales',
                            data: salesData,
                            fill: false,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                        }
                    ]
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    return (
        <div>
            <h2>Weekly Sales Trend</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default WeeklySalesLineChart;
