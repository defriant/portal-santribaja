import React from 'react'
import AlbumItem from '../Home/components/AlbumItem'
import SkeletonAlbumItem from '../../components/SkeletonAlbumItem/SkeletonAlbumItem'
import { Wrapper } from '../../components'
import { useQuery } from 'react-query'
import { getAlbumsApi } from '../../api/request/album'
import { Flex, Grid, Heading, useToast } from '@chakra-ui/react'
import { format } from 'date-fns'

const Album = () => {
    const toast = useToast()

    const albums = useQuery('get-albums', () => getAlbumsApi(), {
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
                    Album
                </Heading>
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
                    {albums?.data?.data?.map((album: any, index: any) => {
                        return <AlbumItem key={index} image={album.image} date={format(new Date(album?.created_at), 'dd MMMM yyyy')} title={album.caption} />
                    })}

                    {albums?.isLoading && [...Array(4)].map((_, index) => {
                        return <SkeletonAlbumItem key={index} />
                    })}
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default Album