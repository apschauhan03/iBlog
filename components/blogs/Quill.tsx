"use client"

import { postPublishAction } from '@/actions/PostActions';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill: React.FC = () => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [pending, setPending] = useState(false);

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean'],
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
    const titleChangeHandler = (event: any) => {
        setTitle(event.target.value);
    }
    const postPublish = async () => {
        postPublishAction(title, value);
    }
    const buttonActiveClass = ' m-2 px-6 py-2 rounded-sm  right-0 items-end bg-slate-500 hover:bg-slate-700 mr-0 text-sm'
    const buttonDisabledClass = ' m-2 px-6 py-2 rounded-sm  right-0 items-end bg-gray-500 hover:bg-gray-700 mr-0 text-sm'
    return (
        <form action={postPublish}>
            <div className=' w-full p-2'>
                <input className=' bg-slate-500 px-2 py-1 w-full rounded-sm' placeholder='Title' value={title} onChange={titleChangeHandler} />
            </div>
            <div className=' h-[400px] md:h-[720px]'><ReactQuill style={{ "height": "90%" }} modules={modules}
                formats={formats} theme='snow' value={value} onChange={CreateBlogHandler} />
            </div>
            <div className='w-full items-end flex justify-end'>
                <button disabled={pending} className={pending ? buttonDisabledClass : buttonActiveClass}>{pending ? "Loading" : "Publish"}</button>
            </div>
        </form>)
        ;
}

export default Quill;