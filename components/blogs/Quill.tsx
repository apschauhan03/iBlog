"use client"

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill: React.FC = () => {
    const [value, setValue] = useState('');
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];
    const CreateBlogHandler = (content: string) => {
        // console.log(content);
        setValue(content);
    }
    const onSubmitHandler = () => {
        console.log('====================================');
        console.log(value);
        console.log('====================================');
    }

    return (
        <>
            <div className=' h-[400px] md:h-[720px]'><ReactQuill style={{ "height": "90%" }} modules={modules}
                formats={formats} theme='snow' value={value} onChange={CreateBlogHandler} />
            </div>
            <div className='w-full items-end flex justify-end'>
                <button className=' m-2 px-6 py-2 rounded-sm  right-0 items-end bg-slate-500 hover:bg-slate-700 mr-0 text-sm' onClick={onSubmitHandler}>Publish</button>
            </div>
        </>)
        ;
}

export default Quill;