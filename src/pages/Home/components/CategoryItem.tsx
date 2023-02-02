import { Link as ReactLink } from 'react-router-dom'
import { Flex, GridItem, Heading, Image, Link } from '@chakra-ui/react'
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
        <Link
            as={ReactLink}
            to={`${ROUTE_URL.PRODUCT}?id=${id}`}
            display='flex'
            w={{ base: 'calc(100vw - calc(16px + 10px))', xs: 'calc(calc(100vw / 2) - calc(16px + 10px))', md: '300px' }}
            h={{ base: 'calc(calc(100vw - calc(16px + 10px)) + 50px)', xs: 'calc(calc(calc(100vw / 2) - calc(16px + 10px) + 50px))', md: '350px' }}
            backgroundColor='black'
            position='relative'
            justifyContent='center'
            alignItems='center'
            cursor='pointer'
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
                fontSize={{ base: '20px', md: '24px' }}
            >
                {name}
            </Heading>
        </Link>
    )
}

export default CategoryItem