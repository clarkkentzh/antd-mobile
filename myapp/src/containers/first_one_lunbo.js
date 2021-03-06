import React, {Component} from 'react'
import Carousel from 'antd-mobile/lib/carousel';
import WingBlank from 'antd-mobile/lib/wing-blank';
import List from 'antd-mobile/lib/list';
import  Accordion from 'antd-mobile/lib/accordion';

import {BrowserRouter as Router,Route} from 'react-router-dom';
import PersonalTrain from "../component/personal_train.js";
import $ from "n-zepto";
import Hangxian from '../component/hanxian'
import Train from '../component/train.js'


import { personal,tuijian} from "../data/train_header_one.json";
import {Link} from 'react-router-dom';

const Item = List.Item
const Brief = Item.Brief

class Firstonelunbo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: ['', '', ''],
      initialHeight: 200,
      personal,
      tuijian
    }
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['lunbo1l1', 'lunbo2l2', 'lunbo3l3'],
      });
    }, 100);

    //图片资源加载完毕之后，设置为自动高度（不再使用设置的背景高度）
    // $(".load-img img").on('load', function() {
    //   $(this).css("height", "auto");
    // });

    //解决轮播图图片在页面多次访问时的高度太低问题
    // $(".slider-frame").css("min-height", "12rem");
  }
  render() {
    const _this = this;
    const title = {textAlign:'center',padding: "5px 0",color:'purple'}
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight,display:'block'} : {display:'block'};
    return (
      <div style={{backgroundColor:'#fff'}}>
      <WingBlank className='load-img' style={{height:'200px'}}>
        <div className="sub-title" style={title}>休闲自行车</div>
        <Carousel
          className="my-carousel"
          autoplay={true}
          infinite
          dots={false}
          selectedIndex={1}
          swipeSpeed={35}
          >
            {this.state.data.map(ii => (
              <a href="http://www.baidu.com" key={ii} style={hProp}>
              <img
                src={`http://owkw6dchq.bkt.clouddn.com/first/${ii || 'lunbollll'}.svg`}
                alt="icon"
                style={{width:'100%'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      <Hangxian/>
      <WingBlank>
        <Accordion defaultActiveKey="0" className="my-accordion">
          <Accordion.Panel header="休闲自行车">
            {this.state.personal.map((ii, index) => (
              <PersonalTrain key={index} index={index} id={ii.id}>
                <List className="my-list">
                  <Item arrow="horizontal" onclick={() => {}}>
                    {ii.pinpai}
                    <Brief>{ii.content}</Brief>
                  </Item>
                </List>
              </PersonalTrain>
            ))
            }
          </Accordion.Panel>
        </Accordion>
        <div>
          <Route path="/train/:id" render={(props)=>{
              var id = props.match.params.id;
              var item = _this.state.personal.find((e,i)=>{
                return e.id == id;
              });

              if (item === undefined){
                item = _this.state.dayRec.find((e,i)=>{
                  return e.id == id;
                });
              }

              return (
                <Train  trainId={id} ty={"xiuxian"}/>
              );
            }}></Route>
        </div>
      </WingBlank>

      <Hangxian/>
      <WingBlank className="load-img">
        <div style={title}>小编推荐</div>
        <div>
          {this.state.tuijian.map(ii => {
            var to = "/train/" + ii.id;
            return (
              <Link to={to} key={ii.index} style={{
                color: "#fff",
                display: "block",
                position: "relative"
              }}>
                <img src={`http://owkw6dchq.bkt.clouddn.com/xiuxian/${ii.ur || 'lunbollll'}.svg`} alt="icon" style={{
                  width: "100%"
                }} onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}/>
              </Link>
            );
          })}
        </div>
      </WingBlank>
      <div style={{width:"100%",height:"50px"}}></div>
    </div>
    );
  }
}
export default Firstonelunbo;
