import React, { Component } from 'react';
import WhiteSpace from 'antd-mobile/lib/white-space'
import Tabs from 'antd-mobile/lib/tabs'
import {saishi} from '../data/remen.json'
import Hanxian from '../component/hanxian'


class Twoone extends Component {
  constructor(props){
    super(props);
    this.state = {
      saishi
    }
  }
  render(){
    return(
      <div>
        <Hanxian/>
        {this.state.saishi.map(e => (
          <div>
          <div style={{height:"2rem",width:"100%"}}>
            <a href={e.ur} style={{height:"1rem",fontSize:'0.3rem',color:'blue',lineHeight:"0.45rem",padding:"0",marginTop:"0.5rem",marginBottom:"0.3rem",display:"block"}}>{e.title}</a>

            <div style={{height:"1.4rem",marginTop:"-0.3rem"}}>
              <a href={e.ur} style={{heihgt:"1.4rem",width:"1.5rem",float:"left"}}><img src={e.image} style={{width:"1.5rem",height:"1.4rem"}}/></a>
              <div style={{height:"1.4rem"}}>
                <p style={{height:"0.8rem",width:"4.5rem",overflow:"hidden",marginBottom:"0",textIndent:"2em",fontSize:"0.25rem"}}>{e.content}</p>
                <span style={{display:"inline-block",fontSize:"0.1rem",marginTop:"0.3rem",color:"red"}}>时间：{e.time}</span>
              </div>
            </div>
          </div>
          <Hanxian/>
        </div>
        ))}
        <div style={{height:"50px"}}></div>
      </div>
    )
  }
}
export default Twoone
