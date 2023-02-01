import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { FaPlay } from 'react-icons/fa'
import { Flex, GridItem, Image, Text, Icon } from '@chakra-ui/react'

interface IGalleryItem {
    thumbnail: string
    id: string
}

const GalleryItem = (props: IGalleryItem) => {
    const { thumbnail, id } = props

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Flex 
            as={GridItem}
            width='100%' 
            height='200px' 
            rounded='md'
            direction='column'
            position='relative'
            backgroundColor='black'
            boxShadow='0px 0px 10px 1px #e8e8e8'
        >
            <Image 
                src={thumbnail} 
                height='200px' 
                width='100%'
                rounded='md' 
                objectFit='cover'
                opacity='0.5'
            />
            <Flex 
                gap='10px'
                cursor='pointer' 
                onClick={() => setIsOpen(true)}
                position='absolute'
                bottom='20px'
                left='20px'
                alignItems='center'
            >
                <Icon as={FaPlay} color='primary.50' />
                <Text fontWeight='semibold' color='white'>
                    Watch Video
                </Text>
            </Flex>
            <ModalVideo 
                channel='youtube' 
                isOpen={isOpen} 
                videoId={id.split("https://www.youtube.com/watch?")[1].split("=")[1]} 
                onClose={() => setIsOpen(false)} 
            />
        </Flex>
    )
}

export default GalleryItem