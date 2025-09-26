import {App as AntApp, Layout} from 'antd'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Header } from 'antd/es/layout/layout'

function App() {

  return (
    <>
    <AntApp>
      <Layout style={{minHeight: '100vh'}}>
        <Header />
        <Layout.Content style={{padding: 24}}>
          <Outlet />
        </Layout.Content>  
        </Layout>
    </AntApp>
    
    </>
  )
}

export default App
