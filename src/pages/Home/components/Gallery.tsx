import React from 'react'
import GalleryItem from './GalleryItem'
import { Wrapper } from '../../../components'
import { Grid, Heading, Text } from '@chakra-ui/react'

interface IGallery {
    data: any
}

const Gallery = (props: IGallery) => {
    const { data } = props

    return (
        <Wrapper>
            <Heading fontFamily='Poppins' color='primary.50' textAlign='center'>Gallery</Heading>
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
                {data?.map((gallery: any, index: number) => {
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
                View All
            </Text>
        </Wrapper>
    )
}

export default Gallery