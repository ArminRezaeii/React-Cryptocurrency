import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, BoldOutlined } from '@ant-design/icons'
import { icons } from 'antd/es/image/PreviewGroup'
import icon from '../images/cryptocurrency.png'
export default function Navbar() {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} />
                <Typography.Title level={2} className='logo' >
                    <Link to="/">Cryptovers</Link>
                </Typography.Title>
            </div>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />} >
                    <Link to="/">
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />} >
                    <Link to="/cryptocurrencies">
                        Cryptocurrencies
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />} >
                    <Link to="/excahnges">
                        Excahnges
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<BoldOutlined />} >
                    <Link to="/news">
                        News
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}