import { Wrapper } from '../../components'
import { useParams, NavLink } from 'react-router-dom'
import { Box, Flex, HStack, Link, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { getArticleDetailApi } from '../../api/request/article'
import Head from '../../components/Head'

const ArticleDetail = () => {
    const { id } = useParams()

    const articleDetail = useQuery(`get-article-detail-${id}`, () => getArticleDetailApi({ id }))

    return (
        <>
            <Head title='Artikel' />
            <Wrapper>
                <Flex paddingY='-2px' gap='50px' direction='column'>
                    <Flex
                        w='100%'
                        justify='center'
                    >
                        {articleDetail?.isLoading
                            ? <Skeleton
                                w={{ base: '100%', md: '700px', lg: '900px', xl: '960px' }}
                                h={{ base: '200px', sm: '300px', md: '350px', lg: '450px', xl: '480px' }}
                            />
                            : <Box
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
                        }
                    </Flex>
                    {articleDetail?.isLoading
                        ? <SkeletonText
                            noOfLines={6}
                            marginX='auto'
                            w={{ base: '100%', md: '700px', lg: '900px', xl: '960px' }}
                        />
                        : <Text
                            textAlign='justify'
                            marginX='auto'
                            w={{ base: '100%', md: '700px', lg: '900px', xl: '960px' }}
                            whiteSpace='pre-line'
                        >{articleDetail?.data?.data?.description}</Text>
                    }
                    {articleDetail?.data?.data?.source !== '' &&
                        <HStack
                            marginX='auto'
                            w={{ base: '100%', md: '700px', lg: '900px', xl: '960px' }}
                            spacing={1}
                        >
                            <Text fontSize='12px'>Sumber:</Text>
                            <Link
                                as={NavLink}
                                to={articleDetail?.data?.data?.source}
                                target='_blank'
                                fontSize='12px'
                                color='blue.400'
                            >{articleDetail?.data?.data?.source}</Link>
                        </HStack>
                    }
                </Flex>
            </Wrapper>
        </>
    )
}

export default ArticleDetail