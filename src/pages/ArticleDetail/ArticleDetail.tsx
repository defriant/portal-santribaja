import React from 'react'
import { Wrapper } from '../../components'
import { useParams } from 'react-router-dom'
import { Flex, Image, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
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
                    :   <Image src={articleDetail?.data?.data?.image} height='400px' objectFit='cover' />
                }
                {articleDetail?.isLoading
                    ?   <SkeletonText noOfLines={6} width='100%' />
                    :   <Text>{articleDetail?.data?.data?.description}</Text>
                }
            </Flex>
        </Wrapper>
    )
}

export default ArticleDetail