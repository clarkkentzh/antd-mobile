import React, { Component } from 'react';
import WhiteSpace from 'antd-mobile/lib/white-space'
import Tabs from 'antd-mobile/lib/tabs'

import Firstonelunbo from './first_one_lunbo'
import Firsttwolunbo from './first_two_lunbo'
import Firstthreelunbo from './first_three_lunbo'
import Firstfour from './first_four'


const TabPane = Tabs.TabPane;

class First extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" swipeable={false}>
          <TabPane tab={"休闲车"} key="1">
            <div>
              <Firstonelunbo/>
            </div>
          </TabPane>
          <TabPane tab={"公路车"} key="2">
            <div>
            <Firsttwolunbo/>
            </div>
          </TabPane>
          <TabPane tab={"山地车"} key="3">
            <div>
            <Firstthreelunbo/>
            </div>
          </TabPane>
          <TabPane tab={"搜索"} key="4">
            <div>
              <Firstfour/>
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
      </div>
    )
  }
}

export default First;
