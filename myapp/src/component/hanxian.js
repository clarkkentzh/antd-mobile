import React, {Component} from "react";
import PropTypes from "prop-types";
import WingBlank from 'antd-mobile/lib/wing-blank';


const gapStyles = {
  height: "0.3rem",
  backgroundColor: "#d3d7d4",
  opactiy: 0.3,
  marginTop: "0.6rem",
};

/*
Gap组件用于分割的横线,给其传入样式即可
*/
class Hangxian extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
        <div style={gapStyles}></div>
    );
  }
}

export default Hangxian;
