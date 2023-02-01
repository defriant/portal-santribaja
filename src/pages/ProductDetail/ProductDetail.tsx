import React from 'react'
import useDownloader from 'react-use-downloader'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getProductDetailApi } from '../../api/request/product'
import { Wrapper } from '../../components'
import { AspectRatio, Button, Flex, Grid, GridItem, Heading, Image, Skeleton, SkeletonText, Text } from '@chakra-ui/react'

const ProductDetail = () => {
    const { id }: any = useParams()
    const { download } = useDownloader();
    
    const productDetail = useQuery(`get-product-detail-${id}`, () => getProductDetailApi({id}))

    function getFileExtension(filename: any){
        console.log(filename)
        const extension = filename.split('.').pop();
        return extension
    }

    return (
        <Wrapper>
            <Flex direction='column' paddingY='96px'>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap='24px'>
                    <GridItem>
                        {productDetail?.isLoading
                            ?   <AspectRatio maxW='400px' ratio={1}>
                                    <Skeleton width='100%' height='100%' />
                                </AspectRatio>
                            :   <Image 
                                    marginX={{ base: 'auto', md: 'unset' }} 
                                    src={productDetail?.data?.data?.image} 
                                    width={{ base: '70%', md: '100%' }} 
                                />
                        }
                    </GridItem>
                    <GridItem rowSpan={{ base: 1, md: 2 }}>
                        <Heading fontSize='2xl' marginBottom='15px' color='gray.600'>Nama Produk</Heading>
                        {productDetail?.isLoading
                            ?   <SkeletonText />
                            :   <Text marginBottom='30px' textAlign='justify' color='gray.600'>{productDetail?.data?.data?.name}</Text>
                        }
                        <Heading fontSize='2xl' marginBottom='15px' color='gray.600'>Deskripsi Produk</Heading>
                        {productDetail?.isLoading
                            ?   <>
                                    <SkeletonText noOfLines={6} />
                                    <Skeleton width='150px' height='32px' marginTop='20px' />
                                </>
                            :   <>
                                    <Text textAlign='justify' color='gray.600'>{productDetail?.data?.data?.description}</Text>
                                    <Button 
                                        marginTop='20px'
                                        size='sm' 
                                        backgroundColor='primary' 
                                        color='white'
                                        _hover={{
                                            backgroundColor: 'primary.30'
                                        }}
                                        _focus={{
                                            backgroundColor: 'primary'
                                        }}
                                        onClick={() => {
                                            download(
                                                productDetail?.data?.data?.specification, 
                                                `santribaja-spesifikasi-product-${id}${getFileExtension(productDetail?.data?.data?.specification)}`
                                            )
                                        }}
                                    >
                                        Unduh Spesifikasi
                                    </Button>
                                </>
                        }
                    </GridItem>
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default ProductDetail