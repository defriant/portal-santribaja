import React from 'react'
import { Grid, GridItem, Image } from '@chakra-ui/react'

interface IGrid3 {
    firstGrid: string
    secondGrid: string
    thirdGrid: string
}

const Grid3 = (props: IGrid3) => {
    const { firstGrid, secondGrid, thirdGrid } = props

    return (
        <Grid
            paddingX='20px'
            paddingY='50px'
            gap='10px'
            templateColumns={{
                sm: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)'
            }}
        >
            <GridItem rounded='md' rowSpan={{ sm: 1, md: 2 }}>
                <Image 
                    src={firstGrid} 
                    width='100%'
                    height='100%' 
                    rounded='md' 
                />
            </GridItem>
            <GridItem rounded='md'>
                <Image 
                    src={secondGrid} 
                    width='100%'
                    height='100%' 
                    rounded='md' 
                />
            </GridItem>
            <GridItem rounded='md'>
                <Image 
                    src={thirdGrid} 
                    width='100%'
                    height='100%' 
                    rounded='md' 
                />
            </GridItem>
        </Grid>
    )
}

export default Grid3