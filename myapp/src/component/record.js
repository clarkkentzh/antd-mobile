import React, {Component} from "react";

import PropTypes from 'prop-types';


const styles = {
  fontSize: "12px",
  cssFloat: "left",
  background: "rgba(130,122,1,0.1)",
  borderRadius: "2px",
  padding: "2px 10px",
  marginRight: "5px",
  marginTop: "5px"
};

class Record extends Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
  }

  constructor(props){
    super(props);
  }

   change = () =>{
     this.props.clickHandler(this.props.content);
   };

  render(){
    return (
      <div style={styles} onClick={this.change}>{this.props.content}</div>
    );
  }
}


export default Record;
