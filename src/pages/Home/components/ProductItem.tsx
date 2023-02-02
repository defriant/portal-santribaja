import { useState } from 'react'
import { Flex, Image, Text, GridItem, Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import ROUTE_URL from '../../../router/urlRouter'

interface IProductItem {
    image: string
    name: string
    id: string
}

const ProductItem = (props: IProductItem) => {
    const { image, name, id } = props
    const navigate = useNavigate()

    const [isHover, setIsHover] = useState(false)

    return (
        <Flex
            direction='column'
            as={GridItem}
            boxShadow='0px 0px 10px 1px #e8e8e8'
            rounded='md'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            cursor='pointer'
            overflow='hidden'
            onClick={() => navigate(ROUTE_URL.PRODUCT_DETAIL.replace(':id', id))}
        >
            <Box
                w='100%'
                h='100%'
                overflow='hidden'
            >
                <Image
                    src={image}
                    width='100%'
                    h='100%'
                    objectFit='cover'
                    transition='.3s'
                    transform={isHover ? 'scale(1.05, 1.05)' : 'scale(1, 1)'}
                />
            </Box>
            <Flex direction='column' padding='.75rem'>
                <Text
                    textOverflow='ellipsis'
                    overflow='hidden'
                    noOfLines={{ base: 1 }}
                >{name}</Text>
            </Flex>
        </Flex>
    )
}

export default ProductItem