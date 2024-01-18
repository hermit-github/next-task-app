import React from 'react'

type Props = {
    text:string;
}

const SectionHeader = ({text}: Props) => {
  return (
    <p className='font-bold text-2xl block mb-7'>{text}</p>
  )
}

export default SectionHeader