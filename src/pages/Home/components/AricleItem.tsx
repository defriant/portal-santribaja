import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Flex, Image, Text, Icon } from '@chakra-ui/react'

interface IArticleItem {
    image: string
    content: string
}

const AricleItem = (props: IArticleItem) => {
    const { image, content } = props

    return (
        <Flex 
            height={{ base: '100px ', md: '200px' }}
            rounded='md' 
            overflow='hidden' 
            boxShadow='0px 0px 10px 1px #e8e8e8'
        >
            <Image 
                src={image} 
                width={{ base: '100px ', md: '200px' }} 
                height={{ base: '100px ', md: '200px' }} 
                objectFit='cover' 
            />
            <Flex 
                justifyContent='space-between' 
                direction='column' 
                padding='10px'
            >
                <Text 
                    textOverflow='ellipsis'
                    overflow='hidden'
                    noOfLines={{ base: 2, md: 6 }}
                    fontSize='14px'
                >
                    {content}
                </Text>
                <Flex gap='10px' alignItems='center'>
                    <Icon as={FaArrowRight} color='primary.50' />
                    <Text fontSize='12px' color='primary.50' fontWeight='semibold' cursor='pointer'>Read more</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AricleItem