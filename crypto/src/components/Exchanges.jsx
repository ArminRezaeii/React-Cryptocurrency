import React from 'react'
import millify from 'millify'
import { Collapse, Row, Col, Typography, Avatar } from 'antd'
import HTMLReactParser from 'html-react-parser'


import Loader from './Loader'
import { useGetCryptoExchangeQuery } from '../services/cryptoExchangeApi'

const { Text } = Typography
const { Panel } = Collapse

const Exchanges = () => {
    const { data, isFetching } = useGetCryptoExchangeQuery()
    const exchangesList = data
    if (isFetching) return <Loader />

    return (

        <>
            {console.log(data)}
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>year_established</Col>
            </Row>
            <Row>
                {exchangesList.map((exchange) => (
                    <Col span={24}>
                        <Collapse>
                            <Panel
                                key={exchange.id}
                                showArrow={false}
                                header={(
                                    <Row key={exchange.id}>
                                        <Col span={6}>
                                            <Text><strong>{exchange.trust_score_rank}.</strong></Text>
                                            <Avatar className="exchange-image" src={exchange.image} />
                                            <Text><strong>{exchange.name}</strong></Text>
                                        </Col>
                                        <Col span={6}>${millify(exchange.trade_volume_24h_btc_normalized, { locales: "en-US" })}</Col>
                                        <Col span={6}>{millify(exchange.trade_volume_24h_btc, { locales: "en-US" })}</Col>
                                        <Col span={6}>{exchange.year_established}</Col>
                                    </Row>
                                )}
                            >
                                {HTMLReactParser(exchange.description || '')}
                            </Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Exchanges