import React, { useState } from 'react'
import { Box, Flex, GridItem, Image, Stack, Text } from '@chakra-ui/react'

interface IAlbumItem {
    image: string
    date: string
    title: string
    isEllipsis: boolean
}

const AlbumItem = (props: IAlbumItem) => {
    const { image, date, title, isEllipsis } = props

    const [isHover, setIsHover] = useState(false)

    return (
        <Flex
            direction='column'
            as={GridItem}
            boxShadow='0px 0px 10px 1px #e8e8e8'
            rounded='md'
            overflow='hidden'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            bg='#FFF'
        >
            <Box
                w='100%'
                height='250px'
                overflow='hidden'
            >
                <Image
                    src={image}
                    height='100%'
                    width='100%'
                    objectFit='cover'
                    transition='.3s'
                    transform={isHover ? 'scale(1.05, 1.05)' : 'scale(1, 1)'}
                />
            </Box>
            <Stack padding='1rem' spacing='1rem'>
                <Text fontWeight='semibold' fontSize='14px'>{date}</Text>
                <Text
                    textOverflow={isEllipsis ? 'ellipsis' : 'unset'}
                    overflow='hidden'
                    noOfLines={isEllipsis ? 3 : 0}
                >{title}</Text>
            </Stack>
        </Flex>
    )
}

export default AlbumItem