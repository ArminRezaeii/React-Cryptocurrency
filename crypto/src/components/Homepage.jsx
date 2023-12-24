import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptocurrencies, News } from '../components'
export default function Homepage() {
    const { data, isFetching } = useGetCryptosQuery(10)
    const globalState = data?.data?.stats
    if (isFetching) {
        return <p>lodaing,....</p>
    }
    const { Title } = Typography

    return (
        <div>
            <Title level={2} className='hedaing'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalState.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalState.totalExchanges, { locales: "en-US" })} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalState.totalMarketCap, { locales: "en-US" })} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalState.total24hVolume, { locales: "en-US" })} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalState.totalMarkets, { locales: "en-US" })} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified={true} />
            <div className="home-heading-container">
                <Title level={2} className='home-title'>Latest Crypto News</Title>
                <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>
            </div>
            <News simplified={true} />
        </div>
    )
}
