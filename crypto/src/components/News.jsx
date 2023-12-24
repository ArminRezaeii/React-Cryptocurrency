import React from 'react'
import { Select, Typography, Row, Avatar, Col, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

export default function News({ simplified }) {
  const { Text, Title } = Typography
  const { option } = Select
  const conut = simplified !== true ? "/coindesk" : "/top/6"
  const { data: cryptoNews } = useGetCryptoNewsQuery(conut)
  console.log(cryptoNews)
  if (!cryptoNews) return "Loading..."
  return (
    <Row gutter={[24, 24]}>
      {
        cryptoNews.map((news, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card hoverable className='news-card'>
              <a href={news.url} target='_blank' rel="noreferrer">
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>{news.title}</Title>
                  <img style={{ maxWidth: "200px", maxHeight: "100px" }} src="https://static.vecteezy.com/system/resources/thumbnails/005/068/626/small/cryptocurrency-or-letter-c-logo-or-icon-design-vector.jpg" />
                </div>
                <p>
                  {news.description}
                </p>
                <div className='provider-container'>
                  <div>
                    <Text>{news.date}</Text>
                  </div>
                </div>
              </a>
            </Card>
          </Col>

        ))

      }
    </Row>
  )
}
