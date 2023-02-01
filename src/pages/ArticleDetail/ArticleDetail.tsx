import React from 'react'
import { Wrapper } from '../../components'
import { useParams } from 'react-router-dom'
import { Box, Flex, Image, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { getArticleDetailApi } from '../../api/request/article'

const ArticleDetail = () => {
    const { id } = useParams()

    const articleDetail = useQuery(`get-article-detail-${id}`, () => getArticleDetailApi({id}))

    return (
        <Wrapper>
            <Flex paddingY='96px' gap='48px' direction='column'>
                {articleDetail?.isLoading
                    ?   <Skeleton height='400px' width='100%' />
                    // :   <Image src={articleDetail?.data?.data?.image} height='400px' objectFit='cover' />
                    :   <Flex
                            w='100%'
                            justify='center'
                        >
                            <Box
                                position='relative'
                                w={{ base: '100%', md: '700px', lg: '900px', xl: '960px' }}
                                h={{ base: '200px', sm: '300px', md: '350px', lg: '450px', xl: '480px' }}
                                overflow='hidden'
                                borderRadius='10px'
                            >
                                <Box
                                    w='100%'
                                    h='100%'
                                    position='absolute'
                                    backgroundPosition='center'
                                    backgroundSize='cover'
                                    backgroundRepeat='no-repeat'
                                    backgroundImage={articleDetail?.data?.data?.image}
                                    filter='blur(10px)'
                                />
                                <Box
                                    w='100%'
                                    h='100%'
                                    position='relative'
                                    backgroundPosition='center'
                                    backgroundSize='contain'
                                    backgroundRepeat='no-repeat'
                                    backgroundColor='transparent'
                                    backgroundImage={articleDetail?.data?.data?.image}
                                />
                            </Box>
                        </Flex>
                }
                {articleDetail?.isLoading
                    ?   <SkeletonText noOfLines={6} width='100%' />
                    :   <Text
                            textAlign='justify'
                            marginX='auto'
                            w={{ base: '100%', md: '700px', lg: '900px', xl: '960px' }}
                        >{articleDetail?.data?.data?.description}</Text>
                }
            </Flex>
        </Wrapper>
    )
}

export default ArticleDetail