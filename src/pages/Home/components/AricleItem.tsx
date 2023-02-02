import { FaArrowRight } from 'react-icons/fa'
import { Flex, Image, Text, Icon, Stack, Grid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import ROUTE_URL from '../../../router/urlRouter'

interface IArticleItem {
    image: string
    content: string
    id: any
}

const AricleItem = (props: IArticleItem) => {
    const { image, content, id } = props
    const navigate = useNavigate()

    return (
        <Grid
            templateColumns='auto 1fr'
            rounded='md'
            overflow='hidden'
            boxShadow='0px 0px 10px 1px #e8e8e8'
            bg='#FFF'
        >
            <Image
                src={image}
                width={{
                    base: '100px',
                    xs: '120px',
                    sm: '140px',
                    md: '160px',
                    lg: '180px',
                    xl: '200px'
                }}
                height={{
                    base: '100px',
                    xs: '120px',
                    sm: '140px',
                    md: '160px',
                    lg: '180px',
                    xl: '200px'
                }}
                objectFit='cover'
            />
            <Stack
                padding={{ base: '.6rem', sm: '1rem' }}
                h='100%'
                justify='space-between'
            >
                <Text
                    textOverflow='ellipsis'
                    overflow='hidden'
                    noOfLines={{ base: 3, lg: 4, xl: 5 }}
                    fontSize='14px'
                >
                    {content}
                </Text>
                <Flex
                    gap='10px'
                    alignItems='center'
                    onClick={() => navigate(ROUTE_URL.ARTICLE_DETAIL.replace(':id', id))}
                >
                    <Text fontSize='13px' color='primary.50' fontWeight='medium' cursor='pointer'>Baca lebih lanjut</Text>
                    <Icon as={FaArrowRight} color='primary.50' />
                </Flex>
            </Stack>
        </Grid>
    )
}

export default AricleItem