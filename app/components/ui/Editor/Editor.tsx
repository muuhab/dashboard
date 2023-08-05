"use client"

import { FC } from 'react'
import dynamic from 'next/dynamic'
import '@mdxeditor/editor/style.css';

const MDXEditor = dynamic(
    () => import('@mdxeditor/editor').then((mod) => mod.MDXEditor),
    { ssr: false }
)

interface EditorProps {

}

const Editor: FC<EditorProps> = ({ }) => {

    return <div className='min-h-[220px] bg-white  '><MDXEditor
        markdown="Train hard. Stay dry. This soccer jacket is made of soft, sweat-wicking fabric that keeps you moving on the practice field. Stretch panels at the elbows and sides give you a full range of motion as you work."
        contentEditableClassName="prose "
        onChange={(markdown) => console.log(markdown)}
    /></div>
}

export default Editor