import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import 'antd/dist/antd.css';
import Bisection from './pages/Bisection'
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  rootSubmenuKeys = ['unit1', 'unit2', 'unit3'];
  constructor(props) {
    super(props)

    this.state = {
      openKeys: [''],
    }

  }


  render() {
    return (
      <Router>
        <Layout>
          <Sider width={250} style={{
            overflow: 'auto',
            height: '100vh',

            position: 'fixed',

          }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline">
              <SubMenu key="unit1"
                title={
                  <span>
                    <Icon type="calculator" />Root of equation
              </span>
                }>
                <Menu.Item key="graphical_btn">Graphical</Menu.Item>
                <Menu.Item key="bisection_btn">Bisection<Link to="/bisection" /></Menu.Item>
                <Menu.Item key="false_btn">False Position</Menu.Item>
                <Menu.Item key="onepoint_btn">One Point Iteration</Menu.Item>
                <Menu.Item key="newton_btn">Newton Raphson</Menu.Item>
                <Menu.Item key="secant_btn">Secant Method</Menu.Item>

              </SubMenu>

            </Menu>
            <Menu theme="dark" mode="inline">
              <SubMenu key="unit2" title={
                <span>
                  <Icon type="user" />Linear Algebra
              </span>
              }>
                <Menu.Item key="graphical_btn">Cramer's Rule</Menu.Item>
                <Menu.Item key="bisection_btn">Gauss's Elimination</Menu.Item>
                <Menu.Item key="false_btn">Gauss Jordan Method</Menu.Item>
                <Menu.Item key="onepoint_btn">Matrix Inversion</Menu.Item>
                <Menu.Item key="newton_btn">LU Decomposition</Menu.Item>
                <Menu.Item key="secant_btn">Cholesky Decomposition</Menu.Item>
                <Menu.Item key="secant_btn">Jacobi Iteration Method</Menu.Item>
                <Menu.Item key="secant_btn">Gauss Seidel Iteration Method</Menu.Item>
                <Menu.Item key="secant_btn">Conjugate Gradient Method</Menu.Item>

              </SubMenu>

            </Menu>
            <Menu theme="dark" mode="inline">
              <SubMenu key="unit3" title={
                <span>
                  <Icon type="stock" />Interpolation
              </span>
              }>
                <Menu.Item key="graphical_btn">Newton Divided-Difference</Menu.Item>
                <Menu.Item key="bisection_btn">Lagrange</Menu.Item>
                <Menu.Item key="false_btn">Spline</Menu.Item>

              </SubMenu>

            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 250 }}>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial', height: '100%' }}>
              <Route path="/bisection" component={Bisection} />
            </Content>

          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default App
