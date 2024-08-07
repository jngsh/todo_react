import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PetTypePieChart = () => {
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
        <div>
            <h3>Pet Type Ratio</h3>
            <Pie data={data} />
        </div>
    );
};

export default PetTypePieChart;
