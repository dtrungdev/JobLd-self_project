import React, { Component } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import './TextEditor.module.scss';

class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    modules = {
        toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], [{ align: [] }]],
    };

    formats = ['bold', 'italic', 'underline', 'list', 'bullet', 'align'];

    handleChange = (value) => {
        this.setState((prevState) => ({
            ...prevState,
            text: value,
        }));
        console.log(value);
    };

    render() {
        console.log(this.state.text);
        return (
            <>
                <div className="text-editor">
                    <ReactQuill
                        theme="snow"
                        modules={this.modules}
                        formats={this.formats}
                        onChange={this.handleChange}
                        value={this.state.text}
                        placeholder={this.props.placeholder}
                    />
                </div>
            </>
        );
    }
}

export default Editor;
