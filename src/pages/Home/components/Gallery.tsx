import React from 'react'
import GalleryItem from './GalleryItem'
import { Wrapper } from '../../../components'
import { Grid, Heading, Stack, Text } from '@chakra-ui/react'

interface IGallery {
    data: any
}

const Gallery = (props: IGallery) => {
    const { data } = props

    return (
        <Wrapper>
            <Stack spacing='1.5rem'>
                <Heading fontFamily='Poppins' color='primary.50' textAlign='center'>Galeri</Heading>
                <Text color='gray.600'>{data.description}</Text>
                <Grid 
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    }} 
                    gap='20px'
                >
                    {data?.data?.map((gallery: any, index: number) => {
                        if (index > 3) return
                        return <GalleryItem key={index} thumbnail={gallery.thumbnail} id={gallery.link_youtube} />
                    })}
                </Grid>
                <Text 
                    fontFamily='Poppins' 
                    color='primary.50' 
                    textAlign='center'
                    fontWeight='semibold'
                    cursor='pointer'
                >
                    Lihat lebih lanjut
                </Text>
            </Stack>
        </Wrapper>
    )
}

export default Gallery