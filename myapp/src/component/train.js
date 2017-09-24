import React,{Component} from 'react'
import Flex from 'antd-mobile/lib/flex';
import IScroll from 'iscroll/build/iscroll'
import WingBlank from 'antd-mobile/lib/wing-blank';
import $ from "n-zepto"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {personal} from '../data/train_header_one.json'
import {gonglu} from '../data/gonglu.json'
import {shandi} from '../data/shandi.json'
import Hangxian from '../component/hanxian'

class Train extends Component {
  constructor(props){
    super(props);
    this.height = $(window).height();
    this.scrollId = "train" + this.props.trainId;
    if (this.props.ty == "xiuxian"){
      var trainItem = personal.find((e,i) => {
        return e.id == this.props.trainId
      })
    }else if (this.props.ty == "gonglu") {
      var trainItem = gonglu.find((e,i) => {
        return e.id == this.props.trainId
      })
    }else if (this.props.ty == "shandi"){
      var trainItem = shandi.find((e,i) => {
        return e.id == this.props.trainId
      })
    }


    this.state = {trainItem}
  }
  componentDidMount(){
    const _this = this;

    // 这是设置屏幕多余的都隐藏
    $(window).scrollTop(0);
    $('body').css({height:this.height,overflow:'hidden'});

    // 这是设置之前的上下两个导航栏隐藏
    $(".am-tabs-bar").css("display",'none');
    $(".bottom_bars .am-tab-bar-bar").hide();

    this.setState({scrollHeight: this.height - $(".train_course_top").height() - 48});


    //这是设置中间部分滚动
    setTimeout(function(){
      new IScroll("#" + _this.scrollId,{mouseWheel:true})
    },100)

  }

  //这是点击回退调用的方法
  closeHandler = ()=>{

    $("body").css({height:"auto", overflow:"auto"});
    $(".am-tabs-bar").css("display", "flex");

    // window.location.href = this.props.prev;//速度有些慢
    window.history.go(-1);
    $(".bottom_bars .am-tab-bar-bar").show();
  }

  render() {
    const strong = {
      fontWeight:'bolder',
      margin:'20px 0'
    }
    const topImage = {
      display:'block',
      width:'100%',
      height: "200px",
      background: `url(${this.state.trainItem.image}) no-repeat`,
      backgroundSize:"100% 200px",
      position:"relative"
    };
    return (
      <div className="train_course"  style={{position:"absolute", minHeight:this.height, top:'0', left: "0", right:"0",zIndex:"11"}}>

        {/* 这是导航条 */}
        <div className="clearfix train_course_top" style={{ height: "20px", padding:"30px", background:"#584f60"}}>
          <img onClick={this.closeHandler} style={{cssFloat: "left", width:"20px", height: "20px",background: "none"}}
            src="http://orkwtps3q.bkt.clouddn.com/image/svg/back.svg"/>
          <div style={{color:"#fff",fontSize:"20px",cssFloat: "left", height:"20px", lineHeight:"20px", marginLeft:"30px"}}>详细介绍</div>
        </div>

        {/* 这是中间部分 */}
        <div id={this.scrollId}  style={{height:this.state.scrollHeight, background:"#fff", overflow:"hidden"}}>
          <div>
            <a href="http://p.biketo.com/" style={topImage}>
            </a>
            <Hangxian/>
            <WingBlank>
              <p style={{fontSize:"18px",marginTop:"5px"}}>品牌：{this.state.trainItem.pinpai}</p>
              <p style={{fontSize:"18px",marginTop:"5px"}}>型号：{this.state.trainItem.title}</p>
              <p style={{fontSize:"18px",marginTop:"5px"}}>定位：{this.state.trainItem.pos}</p>
              <p  style={{ margin:"0",fontSize:"15px",marginTop:'10px',color:"blue"}}><span style={{fontSize:"18px",color:"black"}}>介绍：</span>{this.state.trainItem.content}</p>
            </WingBlank>
          </div>
        </div>

        {/* 这是底部 */}
        <a href="http://p.biketo.com/" style={{height:"50px",lineHeight:"50px",color:"red","backgroundColor":"lightblue",textAlign:"center",display:'block'}}>立即购买</a>
      </div>
    )
  }
}

export default Train;
