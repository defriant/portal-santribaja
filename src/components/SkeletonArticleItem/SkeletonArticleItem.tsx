import React from 'react'
import { Flex, Skeleton, SkeletonText } from '@chakra-ui/react'

const SkeletonAricleItem = () => {
    return (
        <Flex 
            height={{ base: '100px ', md: '200px' }}
            rounded='md' 
            overflow='hidden' 
            boxShadow='0px 0px 10px 1px #e8e8e8'
        >
            <Skeleton 
                width={{ base: '100px ', md: '200px' }} 
                height={{ base: '100px ', md: '200px' }} 
            />
            <Flex 
                justifyContent='space-between' 
                direction='column' 
                padding='10px'
                width='100%'
            >
                <SkeletonText skeletonHeight='15px' width='100%' noOfLines={{ base: 2, md: 6 }} />
            </Flex>
        </Flex>
    )
}

export default SkeletonAricleItem