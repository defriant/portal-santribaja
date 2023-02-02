import React, { useEffect, useState } from 'react'
import ProductItem from '../Home/components/ProductItem'
import SkeleteonProductItem from '../../components/SkeleteonProductItem/SkeleteonProductItem'
import { Wrapper } from '../../components'
import { useQuery } from 'react-query'
import { getProductsAPi } from '../../api/request/product'
import { Center, Flex, Grid, Heading, useToast } from '@chakra-ui/react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getCategoriesApi } from '../../api/request/category'
import ROUTE_URL from '../../router/urlRouter'

const Product = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const [params, setParams] = useSearchParams()

    const [selectedCategory, setSelectedCategory] = useState<any>(params.get('c_id')??'')

    const products = useQuery('get-products', () => getProductsAPi({ id_category: params.get('c_id')??null }), {
        onError: (resp: any) => {
            toast({
                status: 'error',
                description: resp?.message??resp,
                position: 'top-right',
                isClosable: false,
                duration: 3000
            })
        }
    })
    const categories = useQuery('get-categories', () => getCategoriesApi())

    useEffect(() => {
        products?.refetch()
    }, [selectedCategory])

    return (
        <Wrapper>
            <Flex direction='column' minHeight='calc(100vh - 117px)'>
                <Heading 
                    color='primary' 
                    textAlign='center' 
                    marginBottom='30px'
                >
                    Produk Kami
                </Heading>
                <Flex gap='10px' overflow='auto' paddingY='10px'>
                    <Center 
                        cursor='pointer'
                        rounded='full' 
                        padding='5px 20px' 
                        fontWeight='semibold'
                        fontSize='14px'
                        backgroundColor={selectedCategory === '' ? 'primary' : 'unset'}
                        color={selectedCategory === '' ? 'white' : 'primary'}
                        borderWidth='1px'
                        borderColor='primary'
                        onClick={() => {
                            navigate(`${ROUTE_URL.PRODUCT}`, { replace: true })
                            setSelectedCategory('')
                        }}
                    >
                        Semua
                    </Center>
                    {categories?.data?.data.map((category: any, index: number) => {
                        return <Center 
                            key={index}
                            rounded='full' 
                            padding='5px 20px' 
                            fontWeight='semibold'
                            fontSize='14px'
                            cursor='pointer'
                            backgroundColor={selectedCategory === category?.id ? 'primary' : 'unset'}
                            color={selectedCategory === category?.id ? 'white' : 'primary'}
                            borderWidth='1px'
                            borderColor='primary'
                            textAlign='center'
                            onClick={() => {
                                navigate(`${ROUTE_URL.PRODUCT}?c_id=${category?.id}`, { replace: true })
                                setSelectedCategory(category?.id)
                            }}
                        >
                            {category?.name}
                        </Center>
                    })}
                </Flex>
                <Grid 
                    templateColumns={{
                        base: 'repeat(2, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    }} 
                    paddingY='25px' 
                    gap='20px'
                >
                    {products?.isFetching && [...Array(4)].map((_, index) => {
                        return <SkeleteonProductItem key={index} />
                    })}

                    {!products?.isFetching && products?.data?.data?.map((product: any, index: number) => {
                        return <ProductItem key={index} image={product.image} name={product.name} id={product.id} />
                    })}
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default Product