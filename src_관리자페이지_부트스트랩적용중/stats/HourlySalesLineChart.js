// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

// const HourlySalesLineChart = ({ selectedDate }) => {
//     const [data, setData] = useState({
//         labels: Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`),
//         datasets: [
//             {
//                 label: 'Hourly Sales',
//                 data: Array(24).fill(0),  // 24시간 매출 데이터를 0으로 초기화
//                 fill: false,
//                 backgroundColor: 'rgba(75,192,192,0.4)',
//                 borderColor: 'rgba(75,192,192,1)',
//             }
//         ]
//     });

//     useEffect(() => {
//         fetchDateSales(selectedDate); // 초기 로드 시 선택된 날짜의 데이터를 가져옴
//     }, [selectedDate]); // selectedDate가 변경될 때마다 useEffect 실행

//     const fetchDateSales = (date) => {
//         // Spring Boot API에서 데이터 가져오기
//         fetch(`http://localhost:8090/bisang/admin/date-hourly/${date}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // 초기 데이터 배열을 생성 (24시간)
//                 const salesData = Array(24).fill(0);

//                 // 가져온 데이터로 salesData 배열 업데이트
//                 data.forEach(d => {
//                     const hour = parseInt(d.saleHour, 10);
//                     salesData[hour] = d.totalSale;
//                 });

//                 setData({
//                     labels: Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`),
//                     datasets: [
//                         {
//                             label: 'Hourly Sales',
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
//             <h2>Hourly Sales Line Chart</h2>
//             <Line data={data} />
//         </div>
//     );
// };

// export default HourlySalesLineChart;

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const HourlySalesLineChart = ({ selectedDate }) => {
    const [data, setData] = useState({
        labels: Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`),
        datasets: [
            {
                label: 'Hourly Sales',
                data: Array(24).fill(0),  // 24시간 매출 데이터를 0으로 초기화
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
                max: 100000,
                ticks: {
                    callback: function(value) {
                        return value.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' });
                    }
                }
            }
        }
    };

    useEffect(() => {
        fetchDateSales(selectedDate); // 초기 로드 시 선택된 날짜의 데이터를 가져옴
    }, [selectedDate]); // selectedDate가 변경될 때마다 useEffect 실행

    const fetchDateSales = (date) => {
        // Spring Boot API에서 데이터 가져오기
        fetch(`http://localhost:8090/bisang/admin/stats/sales/hourly/${date}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // 초기 데이터 배열을 생성 (24시간)
                const salesData = Array(24).fill(0);

                // 가져온 데이터로 salesData 배열 업데이트
                data.forEach(d => {
                    const hour = parseInt(d.saleHour, 10);
                    salesData[hour] = d.totalSale;
                });

                setData({
                    labels: Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`),
                    datasets: [
                        {
                            label: 'Hourly Sales',
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
            <h2>Hourly Sales Line Chart</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default HourlySalesLineChart;
