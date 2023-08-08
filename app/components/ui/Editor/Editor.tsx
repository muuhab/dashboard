"use client"

import { FC } from 'react'
import dynamic from 'next/dynamic'
import '@mdxeditor/editor/style.css';

const MDXEditor = dynamic(
    () => import('@mdxeditor/editor').then((mod) => mod.MDXEditor),
    { ssr: false }
)

interface EditorProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Editor: FC<EditorProps> = ({ ...props }) => {

    return <div className='min-h-[220px] bg-white  ' {...props}><MDXEditor
        markdown="Write your description here"
        contentEditableClassName="prose "
        onChange={(markdown) => console.log(markdown)}
    /></div>
}

export default Editor