import CategoryItem from './CategoryItem'
import { Flex, Stack, Text } from '@chakra-ui/react'
import { Wrapper } from '../../../components'
import ROUTE_URL from '../../../router/urlRouter'
import HomeLinks from './HomeLinks'

interface ICategory {
    data: any
}

const Category = (props: ICategory) => {
    const { data } = props

    return (
        <Wrapper>
            <Stack spacing='2rem'>
                {data?.description !== '' &&
                    <Text
                        textAlign='center'
                        fontWeight='medium'
                        fontSize='18px'
                    >{data.description}</Text>
                }
                <Flex
                    flexWrap='wrap'
                    gap='10px'
                    justify='center'
                >
                    {data?.data?.map((category: any, index: number) => {
                        return <CategoryItem key={index} image={category.image} name={category.name} id={category.id} />
                    })}
                </Flex>

                <HomeLinks to={ROUTE_URL.PRODUCT} text='Lihat produk' />
            </Stack>
        </Wrapper>
    )
}

export default Category