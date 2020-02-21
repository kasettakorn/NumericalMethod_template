import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './style/style.scss';
import { Layout, Menu, Icon } from 'antd';
import Graphical from './pages/Root of Equation/Graphical'
import Bisection from './pages/Root of Equation/Bisection'
import Cramer from './pages/Linear Algebra/Cramer'
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
class App extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <Header className="header" style={{ height: "80px" }}>
            <div className="headertext">
              <Icon type="fund" theme="filled" style={{ color: "white", fontSize: "70px", float: "left", marginTop: "2%" }} />
              <label className="typewriter">
                &nbsp;&nbsp;&nbsp;Numerical Method
              </label>

            </div>>
        </Header>

          <Layout>
            <Sider width={335} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                style={{ height: '80vh', borderRight: 0, backgroundColor: "#001529", overflowY: "scroll" }}
                theme="dark"
              >
                <SubMenu key="root_submenu" title={<span><Icon type="user" />Root of Equation</span>}>
                  <Menu.Item key="menu_graphical" >Graphical<Link to="/graphical" /></Menu.Item>
                  <Menu.Item key="menu_bisection" >Bisection<Link to="/bisection" /></Menu.Item>
                  <Menu.Item key="menu_false">False Position</Menu.Item>
                  <Menu.Item key="menu_onepoint">One-Point Iteration</Menu.Item>
                  <Menu.Item key="menu_newton">Newton-Raphson</Menu.Item>
                  <Menu.Item key="menu_secant">Secant Method</Menu.Item>
                </SubMenu>
                <SubMenu key="algebra_submenu" title={<span><Icon type="laptop" />Linear Algebra</span>}>
                  <Menu.Item key="menu_cramer">Cramer's Rule<Link to="/cramer" /></Menu.Item>
                  <Menu.Item key="menu_gauss">Gauss's Elimination</Menu.Item>
                  <Menu.Item key="menu_jordan">Gauss Jordan Method</Menu.Item>
                  <Menu.Item key="menu_inverse">Matrix Inversion</Menu.Item>
                  <Menu.Item key="menu_lu">LU Decomposition</Menu.Item>
                  <Menu.Item key="menu_cholesky">Cholesky Decomposition</Menu.Item>
                  <Menu.Item key="menu_jacobi">Jacobi Iteration Method</Menu.Item>
                  <Menu.Item key="menu_seidel">Gauss Seidel Iteration</Menu.Item>
                  <Menu.Item key="menu_gradient">Conjugate Gradient Method</Menu.Item>
                </SubMenu>
                <SubMenu key="interpolate_submenu" title={<span><Icon type="notification" />Interpolation</span>}>
                  <Menu.Item key="menu_divide">Newton Divide Difference</Menu.Item>
                  <Menu.Item key="menu_lagrange">Lagrange</Menu.Item>
                  <Menu.Item key="menu_spline">Spline</Menu.Item>
                </SubMenu>
                <SubMenu key="regression_submenu" title={<span><Icon type="calculator" />Least Square Error</span>}>
                  <Menu.Item key="menu_linear">Linear Regression</Menu.Item>
                  <Menu.Item key="menu_poly">Polynomial Regression</Menu.Item>
                  <Menu.Item key="menu_multiple">Multiple Linear Regression</Menu.Item>
                </SubMenu>
                <SubMenu key="integrate_submenu" title={<span><Icon type="calculator" />Integration</span>}>
                  <Menu.Item key="menu_compositeTrapzoidal">Composite Trapezoidal Rule</Menu.Item>
                  <Menu.Item key="menu_compositeSimpson">Composite Simpson's Rule</Menu.Item>
                </SubMenu>
                <SubMenu key="diff_submenu" title={<span><Icon type="notification" />Differentiation</span>}>
                  <Menu.Item key="menu_forwardh">Forward Divided-Differences O(h)</Menu.Item>
                  <Menu.Item key="menu_backwardh">Backward Divided-Differences O(h)</Menu.Item>
                  <Menu.Item key="menu_centralh">Central Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                  <Menu.Item key="menu_forward2h">Forward Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                  <Menu.Item key="menu_backward2h">Backward Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                  <Menu.Item key="menu_central2h">Central Divided-Differences O(h{<sup>4</sup>})</Menu.Item>
                </SubMenu>
                <SubMenu key="de_submenu" title={<span><Icon type="laptop" />Ordinary Differential Equation</span>}>
                  <Menu.Item key="menu_euler">Euler's Method</Menu.Item>
                  <Menu.Item key="menu_heun">Heun's Method</Menu.Item>
                  <Menu.Item key="menu_modifier">Modifier Euler's Method</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{ padding: 24, margin: 0, minHeight: 280, }}>

                <Route path="/graphical" component={Graphical} />
                <Route path="/bisection" component={Bisection} />
                <Route path="/cramer" component={Cramer} />


              </Content>
            </Layout>
          </Layout>
          <Footer style={{ backgroundColor: "#001529", minHeight: 120 }}>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
              © All Right Reserved<br />
              <Icon type="facebook" theme="filled" style={{ fontSize: "30px" }} /><a target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/kornkung.h" style={{ color: "white", textDecoration: "none" }}> Ronnakorn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hompoa</a>
              <p style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>
                <Icon type="book" theme="filled" style={{ fontSize: "30px" }} /> Department of Computer and Information Science - King Mongkut's University of Technology North Bangkok
              </p>
            </p>


          </Footer>

        </Layout>

      </Router>

    )
  }
}

export default App
