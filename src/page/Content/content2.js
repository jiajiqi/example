import React, { Component } from 'react';
import {Button} from 'antd'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import './content2.less'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


export default class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }
/*
输入过程中实时回调
*/
  onEditorStateChange= (editorState) => {
    this.setState({
      editorState,
    });
  };
  getDetail=()=>{
    return draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          editorStyle={{border:'1px solid black',minHeight:200,paddingLeft:10}}
          onEditorStateChange={this.onEditorStateChange}
        />
       <Button type="primary" onClick={this.submit}>提交</Button>
      </div>
    );
  }
}