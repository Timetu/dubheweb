import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;

const items1 = ['自动生成测试报告', '自动生成测试样例', 'FAQ'].map((key, i) => ({
  key: i,
  label: `${key}`,
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '已选择模块',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('单机事件发生了handClick');
    console.log()
  };

  items2 = [LaptopOutlined, UserOutlined].map((icon, index) => {
    const key = ['模块', '用户管理'];
    return {
      key: index + 1,
      icon: React.createElement(icon),
      label: `${key[index]}`,
  
      children: new Array(4).fill(null).map((_, j) => {
        if (index == 0) {
          const subKey = ['终端管理', '零信任VPN', '数据防泄漏', '杀毒'];
          console.log(subKey[j]);
          return {
            label: `${subKey[j]}`,
          };
        } else {
          return {
            label: `option${j + 1}`,
          };
        }
      }),
    };
  });

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" style={{
            lineHeight: '24px',
            textAlign: 'center',
          }} >
            <h1>自动化项目</h1>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>

        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={this.items2}
              onClick={this.handleClick}
            />
          </Sider>

          <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>{this.state.value}</Breadcrumb.Item>
            </Breadcrumb>

            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>

          </Layout>

          <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>{this.props.state}</Breadcrumb.Item>
            </Breadcrumb>

            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>

          </Layout>

        </Layout>

      </Layout>
    )
  }
}

export default App;