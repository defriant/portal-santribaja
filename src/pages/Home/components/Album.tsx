import { Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import AlbumItem from './AlbumItem'

const Album = () => {
    const dummyAlbum = useMemo(() => [
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/feed-1663237654-SHcn1.jpeg',
            title: 'grand opening syifa avi glowing regional kota bekasi',
            date: '15 September 2022',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/feed-1663237647-awVSj.jpeg',
            title: 'grand opening syifa avi glowing regional kota bekasi',
            date: '15 September 2022',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/feed-1662799433-3P5Os.jpeg',
            title: 'grand opening syifa avi glowing regional kota bekasi',
            date: '10 September 2022',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/feed-1662799422-pFcYy.jpeg',
            title: 'Ucapan Dari Himpunan Pengusaha Nahdliyin',
            date: '10 September 2022',
        },
        // {
        //     image: 'https://studio.syifaaviglowing.com/assets/images/feed-1647918374-af0Ak.jpeg',
        //     title: 'Ucapan Dari Himpunan Pengusaha Nahdliyin',
        //     date: '22 March 2022',
        // },
        // {
        //     image: 'https://studio.syifaaviglowing.com/assets/images/feed-1647918282-gtIqI.jpeg',
        //     title: 'Ucapan Dari PESANTREN RI 1',
        //     date: '22 March 2022',
        // },
    ], [])

    return (
        <Flex direction='column' paddingY='50px'>
            <Heading fontFamily='Poppins' color='primary.50' textAlign='center'>Album</Heading>
            <Grid 
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                }} 
                paddingX='20px'
                paddingY='25px' 
                gap='20px'
            >
                {dummyAlbum?.map((album, index) => {
                    return <AlbumItem key={index} image={album.image} date={album.date} title={album.title} />
                })}
            </Grid>
            <Text 
                fontFamily='Poppins' 
                color='primary.50' 
                textAlign='center'
                fontWeight='semibold'
                cursor='pointer'
            >
                Lihat lebih banyak
            </Text>
        </Flex>
    )
}

export default Album