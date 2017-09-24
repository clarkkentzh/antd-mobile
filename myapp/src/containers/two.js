import React, { Component } from 'react';
import WhiteSpace from 'antd-mobile/lib/white-space'
import Tabs from 'antd-mobile/lib/tabs'

import Twoone from './two_one'
import Firsttwolunbo from './first_two_lunbo'
import Firstthreelunbo from './first_three_lunbo'
import Firstfour from './first_four'
import '../lib/css/two_one.css'
import Hidden from '../component/twohidden'


const TabPane = Tabs.TabPane;

class Two extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabShow: true,
      publishShow: false
    };
  }


  publish = ()=>{
    this.setState({
      tabShow: false,
      publishShow: true
    });
  }

  publishClose = ()=>{
    this.setState({
      tabShow: true,
      publishShow: false
    });
  }

  render() {
    return (
      <div>
        <div className="state-all" style={{display: this.state.tabShow ? "block": "none" , fontSize: '15px'}}>
          <Tabs defaultActiveKey="1" swipeable={false}>
            <TabPane tab={"热门"} key="1">
              <div>
                <Twoone />
              </div>
            </TabPane>
            <TabPane tab={"关注"} key="2">
              <div>
                <Firsttwolunbo/>
              </div>
            </TabPane>
            <TabPane tab={"同城"} key="3">
              <div>
                <Firstthreelunbo/>
              </div>
            </TabPane>
          </Tabs>
          <div className="line-through"></div>
          <div className="state-publish" onClick={this.publish}></div>
          <div className="state-attention"></div>
          <WhiteSpace />
        </div>
        <div className="publish-panel" style={{ display: this.state.publishShow ? "block": "none"}}>
          <Hidden returnHandler={this.publishClose}/>
        </div>
      </div>
    )
  }
}

export default Two;
