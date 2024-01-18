import React from 'react'

type Props = {
    text:string;
}

const SectionHeader = ({text}: Props) => {
  return (
    <p className='font-bold text-2xl'>{text}</p>
  )
}

export default SectionHeader