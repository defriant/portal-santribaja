import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getProductDetailApi } from '../../api/request/product'
import { Wrapper } from '../../components'
import { FaDownload } from 'react-icons/fa'
import { AspectRatio, Button, Flex, Grid, GridItem, Image, Skeleton, Stack, Text, Icon } from '@chakra-ui/react'

const ProductDetail = () => {
    const { id }: any = useParams()
    
    const productDetail = useQuery(`get-product-detail-${id}`, () => getProductDetailApi({id}))

    function getFileExtension(filename: any){
        console.log(filename)
        const extension = filename.split('.').pop();
        return extension
    }

    return (
        <Wrapper>
            <Flex direction='column' minHeight='calc(100vh - 167px)' marginTop={{ base: '14px', md: '46px' }}>
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
                    <GridItem colSpan={{ base: 1, md: 2 }}>
                        <Stack spacing='16px'>
                            <Text  
                                textAlign='justify' 
                                color='gray.600'
                                fontWeight='semibold'
                                fontSize='22px'
                            >
                                {productDetail?.data?.data?.name}
                            </Text>
                            <Stack>
                                <Text  
                                    textAlign='justify' 
                                    color='gray.600'
                                    fontWeight='semibold'
                                    fontSize='18px'
                                >
                                    Deskripsi
                                </Text>
                                <Text  
                                    textAlign='justify' 
                                    color='gray.600'
                                    fontWeight='regular'
                                    fontSize='14px'
                                >
                                    {productDetail?.data?.data?.description}
                                </Text>
                            </Stack>
                            <Stack>
                                <Text  
                                    textAlign='justify' 
                                    color='gray.600'
                                    fontWeight='semibold'
                                    fontSize='18px'
                                >
                                    Spesifikasi
                                </Text>
                                <Button 
                                    as={'a'}
                                    href={productDetail?.data?.data?.specification}
                                    target='_blank'
                                    marginTop='20px'
                                    size='sm' 
                                    backgroundColor='primary' 
                                    color='white'
                                    fontSize='14px'
                                    width='max-content'
                                    leftIcon={<Icon as={FaDownload} />}
                                    _hover={{
                                        backgroundColor: 'primary.30'
                                    }}
                                    _focus={{
                                        backgroundColor: 'primary'
                                    }}
                                >
                                    {productDetail?.data?.data?.specification?.split('https://studio.santribaja.com/assets/files/')[1]}
                                </Button>
                            </Stack>
                        </Stack>
                    </GridItem>
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default ProductDetail