import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
export default function Cryptocurrencies({ simplified }) {
    const conut = simplified == true ? 10 : 100
    const { data: cryptosList, isfetching } = useGetCryptosQuery(conut)
    const [cryptos, setCryptos] = useState([])
    const [searchTerm, setSearchTerm] = useState(``)
    useEffect(() => {
        setCryptos(cryptosList?.data?.coins)
        const filterData = cryptosList?.data?.coins.filter((coin) => coin.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
        setCryptos(filterData)

    }, [cryptosList, searchTerm])
    if (isfetching) return 'loagin...'

    return (
        <>
            {simplified ? null : <div className='search-crypto'>
                <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
            </div>}
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card title={`${currency.rank}. ${currency.name}`}
                                extra={<img className='crypto-image' src={currency.iconUrl} />}
                                hoverable
                            >
                                <p>Price:{millify(currency.price, { locales: "en-US" })}</p>
                                <p>Market Cap:{millify(currency.marketCap, { locales: "en-US" })}</p>
                                <p>Daily Change:{millify(currency.change, { locales: "en-US" })}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}
