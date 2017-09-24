import React,{Component} from 'react';
import SearchBar from 'antd-mobile/lib/search-bar';
import Button from 'antd-mobile/lib/button';
import WhiteSpace from 'antd-mobile/lib/white-space';
import WingBlank from 'antd-mobile/lib/wing-blank';
import Record from '../component/record'
import Modal from "antd-mobile/lib/modal";

const alert = Modal.alert;

class Firstfour extends React.Component {
  state = {
    value: '摩托车',
    focused: false,
    canClearRecords: true,
    records:['公路车','折叠车','躺车','智能单车','城市通勤车','旅行车','独轮车']
  };
  // onChange= (value) => {
  //   // console.log(value, 'onChange');
  //   this.setState({ value });
  // };
  clearRecords = ()=>{
    this.setState({ canClearRecords:false, records: []});
  }

  clear = () => {
    this.setState({ value: '' });
  }

  onChange= (value) => {
    this.setState({ value:value});
  };

  recordHandler(value) {
    this.setState({value: value});
  }

  onBlur = () =>{
    //失去焦点时，添加记录
    let records = this.state.records;
    let value = this.state.value;

    //防止添加空记录，防止重复添加搜索记录
    if (value !== ""){
      if (records.indexOf(value) == -1 ){
        records.push(value);
      }
    }

    this.setState({records, canClearRecords: true})
  }
  render() {
    const recordHandler = this.recordHandler.bind(this);
    return (
    <div>
      <SearchBar
        value={this.state.value}
        placeholder="搜索"
        maxLength={8}
        onSubmit={value => console.log(value)}
        onBlur={() => this.onBlur() }
        onChange={this.onChange}
      />
      <WhiteSpace />
      <WingBlank style={{fontSize: "15px",  padding: "5px"}}>

        <div style={{height: "0.1rem", lineHeight: "0.1rem", color: "#827a89"}}>
          <div style={{float: "left"}}>搜索记录</div>

           {/* 当已经清除记录时， 不在显示清除按钮*/}
          <div   style={{ display: this.state.canClearRecords ? "block": "none" ,float: "right"}}
            onClick={() => alert('删除记录', '确定删除么?', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确定', onPress: () => this.clearRecords(), style: { fontWeight: 'bold' } },
          ])}>清除记录</div>
        </div>


        {/*
          根据 记录，生成历史查询记录
          点击清除时，不在显示
        */}
        <div className="clearfix" style={{marginTop:'5px'}}>
          {
            this.state.records.map((elem,index)=>(
              <Record key={index} content={elem} clickHandler={recordHandler} />
            ))
          }
        </div>
      </WingBlank>


    </div>);
  }
}

export default Firstfour;
