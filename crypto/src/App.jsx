import './App.css'
import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchange, Homepage, CryptoDetails, Cryptocurrencies, News } from './components'
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout >
            <div className='routes'>
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/exchange' element={<Exchange />} />
                <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                <Route path='/news' element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer" level={5} >
          <Typography.Title style={{ color: "white", textAlign: 'center' }}>
            Cryptoversres<br />
            All rights reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/Exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
        </div>
      
      </div>
    </>
  )
}

export default App
