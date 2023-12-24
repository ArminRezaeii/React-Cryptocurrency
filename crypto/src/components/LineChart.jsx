import React from 'react'
import { Line } from 'react-chartjs-2'
import { Col, Typography, Row } from 'antd'
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, LineController, Title } from 'chart.js';
export default function LineChart({ coinHistory, currentPrice, coinName }) {
    const { Title } = Typography

    Chart.register(CategoryScale, LinearScale, PointElement, LineElement, LineController);
    const coinPrice = []
    const coinTimestamp = []

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
    }
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }

    return (<>

        <Row className='chart-header'>
            <Title level={2} className='chart-title'>{coinName}</Title>
            <Col className='price-container'>
                <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
                <Title level={5} className='current-price'>current {coinName} Price:${currentPrice}</Title>
            </Col>
        </Row>
        <Line data={data} options={options} />



    </>)
}
