import React, { ReactNode } from 'react'
import SectionHeader from '../common/SectionHeader';

type Props = {
    children?:ReactNode;
    title:string;
}

const MainContainer = ({children,title}: Props) => {
  return (
    <section className='w-full h-full rounded-lg p-2'>
        <SectionHeader text={title}/>
        {children}
    </section>
  )
}

export default MainContainer