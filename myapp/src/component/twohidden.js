import React, {Component} from "react";

import ImagePicker  from 'antd-mobile/lib/image-picker';
import Modal from 'antd-mobile/lib/modal';
import List from 'antd-mobile/lib/list';
import TextareaItem from 'antd-mobile/lib/textarea-item';

import './twohidden.css'

const alert = Modal.alert;


class Hidden extends Component {
  constructor(props){
    super(props);
    this.state = {
      files:[]
    }
  }

  onChange = (files, type, index) => {
      console.log(files, type, index);
      this.setState({
        files,
      });
  }
  handle(){
    this.value = ''
  }

  close = () => {
    this.props.returnHandler()
  }
  render(){
    const { files } = this.state;
    return(
      <div>
        <div className='hidden-head'>
          <img src={`http://owkw6dchq.bkt.clouddn.com/error.svg`}
          onClick={() => alert('你还没发布状态', '确定不发了?', [
            { text: '再看看', onPress: () => console.log() },
            { text: '不发布了', onPress: () => this.close() },
          ])}
          />
          <p>新动态</p>
          <button>发布</button>
        </div>
        <List >
          <TextareaItem
             rows={3}
             placeholder="点击编辑您的意见和建议"
           />
       </List>

        <div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
        />
      </div>
      </div>
    )
  }
}

export default Hidden;
