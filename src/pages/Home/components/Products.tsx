import ProductItem from './ProductItem'
import SkeleteonProductItem from '../../../components/SkeleteonProductItem/SkeleteonProductItem'
import { useQuery } from 'react-query'
import { getProductsAPi } from '../../../api/request/product'
import { Wrapper } from '../../../components'
import { Grid, Heading, Text, useToast } from '@chakra-ui/react'

const Products = () => {
    const toast = useToast()

    const products = useQuery('get-products', () => getProductsAPi({}), {
        onError: (resp: any) => {
            toast({
                status: 'error',
                description: resp?.message ?? resp,
                position: 'top-right',
                isClosable: false,
                duration: 3000
            })
        }
    })

    return (
        <Wrapper>
            <Heading fontFamily='Poppins' color='primary.50' textAlign='center'>Our Product</Heading>
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
                    if (index > 3) return
                    return <ProductItem key={index} image={product.image} name={product.name} id={product.id} />
                })}
            </Grid>
            <Text
                fontFamily='Poppins'
                color='primary.50'
                textAlign='center'
                fontWeight='semibold'
                cursor='pointer'
            >
                View All
            </Text>
        </Wrapper>
    )
}

export default Products