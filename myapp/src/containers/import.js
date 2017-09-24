import React, { Component } from 'react';

import "../lib/css/antd-mobile.min.css";
import TabBar from 'antd-mobile/lib/tab-bar';
import First from './first'
import Two from './two'


class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
    };
  }
  render() {
    return (
      <div className="bottom_bars">
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="车型"
          key="车型"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(http://owkw6dchq.bkt.clouddn.com/first/good.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(http://owkw6dchq.bkt.clouddn.com/first/good.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          // badge={1}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          <First/>
        </TabBar.Item>
        <TabBar.Item
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(http://owkw6dchq.bkt.clouddn.com/first/iconfont-riyongbaihuo.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(http://owkw6dchq.bkt.clouddn.com/first/iconfont-riyongbaihuo.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          title="动态"
          key="动态"
          // badge={'new'}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
          <Two/>
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(http://owkw6dchq.bkt.clouddn.com/first/search.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(http://owkw6dchq.bkt.clouddn.com/first/search.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          title="发现"
          key="发现"
          // dot
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
        >

        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'http://owkw6dchq.bkt.clouddn.com/first/account.svg' }}
          selectedIcon={{ uri: 'http://owkw6dchq.bkt.clouddn.com/first/account.svg' }}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
        >
        </TabBar.Item>
      </TabBar>
    </div>
    );
  }
}


export default TabBarExample;
