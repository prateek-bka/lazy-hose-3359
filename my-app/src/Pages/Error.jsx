import React from 'react'

import { Image } from '@chakra-ui/react'

import error from '../assets/error.png'


export const Error = () => {
  return (
    <div>
       
        <Image margin='auto' mt='20px' w='100%'  src={error}/>
    </div>
  )
}
