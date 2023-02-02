import React from 'react'
import GalleryItem from '../Home/components/GalleryItem'
import SkeletonGalleryItem from '../../components/SkeletonGalleryItem/SkeletonGalleryItem'
import { Wrapper } from '../../components'
import { useQuery } from 'react-query'
import { Flex, Grid, Heading, Text, useToast } from '@chakra-ui/react'
import { getGalleriesApi } from '../../api/request/gallery'
import { getHomeDataApi } from '../../api/request/home'

const Gallery = () => {
    const toast = useToast()

    const galleries = useQuery('get-galleries', () => getGalleriesApi(), {
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

    const homeData = useQuery('get-home-data', () => getHomeDataApi(), {
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
            <Flex direction='column' minHeight='calc(100vh - 117px)'>
                <Heading
                    color='primary'
                    textAlign='center'
                    marginBottom='15px'
                >
                    Galeri
                </Heading>
                <Text>{homeData?.data?.data?.sections?.find((article: any) => article?.type === 'gallery')?.description}</Text>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    }}
                    paddingY='25px'
                    gap='20px'
                >
                    {galleries?.isLoading && [...Array(4)].map((_, index) => {
                        return <SkeletonGalleryItem key={index} />
                    })}

                    {galleries?.data?.data?.map((gallery: any, index: number) => {
                        return <GalleryItem key={index} thumbnail={gallery.thumbnail} id={gallery.link_youtube} />
                    })}
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default Gallery