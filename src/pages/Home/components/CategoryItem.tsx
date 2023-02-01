import React from 'react'
import { Flex, GridItem, Heading, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import ROUTE_URL from '../../../router/urlRouter'

interface ICategoryItem {
    image: string
    name: string
    id: any
}

const CategoryItem = (props: ICategoryItem) => {
    const { image, name, id } = props
    const navigate = useNavigate()

    return (
        <Flex 
            // as={GridItem}
            direction='column'
            height={{ base: '250px', md: '300px' }}
            width={{ base: 'calc((100vw / 2) - 22px)', md: '250px' }}
            backgroundColor='black'
            position='relative'
            justifyContent='center'
            alignItems='center'
            cursor='pointer'
            // onClick={() => navigate(ROUTE_URL.PRODUCT, { state: { id_category: id } })}
            onClick={() => navigate(`${ROUTE_URL.PRODUCT}?id=${id}`)}
        >
            <Image 
                src={image} 
                height='100%' 
                width='100%' 
                objectFit='cover' 
                opacity='0.5' 
            />
            <Heading 
                position='absolute'
                color='white'
                fontSize={{ base: '16px', md: '24px' }}
            >
                {name}
            </Heading>
        </Flex>
    )
}

export default CategoryItem