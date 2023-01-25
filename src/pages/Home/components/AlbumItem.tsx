import React, { useState } from 'react'
import { Flex, GridItem, Image, Text } from '@chakra-ui/react'

interface IAlbumItem {
    image: string
    date: string
    title: string
}

const AlbumItem = (props: IAlbumItem) => {
    const { image, date, title } = props

    const [isHover, setIsHover] = useState(false)

    return (
        <Flex 
            direction='column' 
            as={GridItem} 
            boxShadow='0px 0px 10px 1px #e8e8e8'
            rounded='md'
            overflow='hidden'
            cursor='pointer'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Image 
                src={image} 
                height='263px' 
                width='100%' 
                objectFit='cover' 
                transition='.3s'
                transform={isHover ? 'scale(1.05, 1.05)' : 'scale(1, 1)'}
            />
            <Flex direction='column' padding='10px' gap='5px'>
                <Text fontWeight='semibold'>{date}</Text>
                <Text>{title}</Text>
            </Flex>
        </Flex>
    )
}

export default AlbumItem