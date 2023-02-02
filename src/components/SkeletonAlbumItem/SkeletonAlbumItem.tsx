import React from 'react'
import { Flex, GridItem, Skeleton } from '@chakra-ui/react'

const SkeletonAlbumItem = () => {
    return (
        <Flex 
            direction='column' 
            as={GridItem} 
            boxShadow='0px 0px 10px 1px #e8e8e8'
            rounded='md'
            overflow='hidden'
            cursor='pointer'
        >
            <Skeleton height='263px' width='100%' />
            <Flex direction='column' padding='10px' gap='5px'>
                <Skeleton height='24px' width='150px' />
                <Skeleton height='24px' width='100%' noOfLines={2} />
            </Flex>
        </Flex>
    )
}

export default SkeletonAlbumItem