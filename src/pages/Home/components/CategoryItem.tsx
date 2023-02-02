import { Link as ReactLink } from 'react-router-dom'
import { Flex, GridItem, Heading, Image, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import ROUTE_URL from '../../../router/urlRouter'
import { useState } from 'react'

interface ICategoryItem {
    image: string
    name: string
    id: any
}

const CategoryItem = (props: ICategoryItem) => {
    const { image, name, id } = props
    const [isHover, setIsHover] = useState(false)
    const navigate = useNavigate()

    return (
        <Link
            as={ReactLink}
            to={`${ROUTE_URL.PRODUCT}?c_id=${id}`}
            display='flex'
            w={{
                base: 'calc(100vw - calc(16px + 10px))',
                xs: 'calc(calc(100vw / 2) - calc(16px + 10px))',
                md: 'calc(calc(100vw / 3) - calc(16px + 10px))',
                lg: '300px'
            }}
            h={{
                base: 'calc(calc(calc(100vw - calc(16px + 10px)) / 3) * 4)',
                xs: 'calc(calc(calc(calc(100vw / 2) - calc(16px + 10px)) / 3) * 4)',
                md: 'calc(calc(calc(calc(100vw / 3) - calc(16px + 10px)) / 3) * 4)',
                lg: '400px'
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            borderRadius='7px'
            overflow='hidden'
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
                transform={isHover ? 'scale(1.1, 1.1)' : 'scale(1, 1)'}
                transition='.4s'
            />
            <Heading
                position='absolute'
                color={isHover ? 'primary.90' : 'white'}
                transition='.4s'
                fontSize={{
                    base: '28px',
                    xs: '21px',
                    sm: '24px',
                }}
                textAlign='center'
                px='1rem'
            >
                {name}
            </Heading>
        </Link>
    )
}

export default CategoryItem