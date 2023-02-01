import React from 'react'
import ProductItem from '../Home/components/ProductItem'
import SkeleteonProductItem from '../../components/SkeleteonProductItem/SkeleteonProductItem'
import { Wrapper } from '../../components'
import { useQuery } from 'react-query'
import { getProductsAPi } from '../../api/request/product'
import { Center, Flex, Grid, Heading, useToast } from '@chakra-ui/react'
import { useLocation, useSearchParams } from 'react-router-dom'

const Product = () => {
    const toast = useToast()
    const location = useLocation()
    const [params, setParams] = useSearchParams()

    // const products = useQuery('get-products', () => getProductsAPi({ id_category: location?.state?.id_category??null }), {
    const products = useQuery('get-products', () => getProductsAPi({ id_category: params.get('id')??null }), {
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
                        rounded='full' 
                        backgroundColor='primary' 
                        color='white' 
                        padding='5px 20px' 
                        fontWeight='semibold'
                        fontSize='14px'
                    >
                        Semua
                    </Center>
                    {[...Array(5)].map((_, index) => {
                        return <Center 
                            key={index}
                            borderColor='primary'
                            borderWidth='1px'
                            rounded='full' 
                            backgroundColor='unset' 
                            color='primary' 
                            padding='5px 20px' 
                            fontWeight='semibold'
                            fontSize='14px'
                        >
                            Semua
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
                    {products?.isLoading && [...Array(4)].map((_, index) => {
                        return <SkeleteonProductItem key={index} />
                    })}

                    {products?.data?.data?.map((product: any, index: number) => {
                        return <ProductItem key={index} image={product.image} name={product.name} id={product.id} />
                    })}
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default Product