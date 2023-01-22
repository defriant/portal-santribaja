import React from 'react'
import { Flex, GridItem, Image, Text } from '@chakra-ui/react'

interface IAlbumItem {
    image: string
    date: string
    title: string
}

const AlbumItem = (props: IAlbumItem) => {
    const { image, date, title } = props

    return (
        <Flex 
            direction='column' 
            as={GridItem} 
            boxShadow='0px 0px 10px 1px #e8e8e8'
            rounded='md'
        >
            <Image src={image} height='263px' width='100%' objectFit='cover' />
            <Flex direction='column' padding='10px' gap='5px'>
                <Text fontWeight='semibold'>{date}</Text>
                <Text>{title}</Text>
            </Flex>
        </Flex>
    )
}

export default AlbumItem