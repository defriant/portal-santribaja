import React from 'react'
import { Grid, GridItem, Image } from '@chakra-ui/react'

interface IGrid2 {
    firstGrid: string
    secondGrid: string
}

const Grid2 = (props: IGrid2) => {
    const { firstGrid, secondGrid } = props

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
            <GridItem rounded='md'>
                <Image 
                    src={firstGrid} 
                    width='100%' 
                    rounded='md' 
                />
            </GridItem>
            <GridItem rounded='md'>
                <Image 
                    src={secondGrid} 
                    width='100%' 
                    rounded='md' 
                />
            </GridItem>
        </Grid>
    )
}

export default Grid2