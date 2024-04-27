import ProductCard from '@/components/products/ProductCard'
import SortDropdown from '@/components/products/SortDropdown'
import ProductCardSkeleton from '@/components/skeleton/ProductCardSkeleton'
import { appApi } from '@/services/ApiService'
import { Box, Container, Grid, Pagination, SelectChangeEvent, Typography } from '@mui/material'
import React, { useState } from 'react'

const sortItems = ['By default', 'By name', 'By price lower to high', 'By price high to lower']

const Products = () => {
    const [page, setPage] = useState<number>(1)

    const [sort, setSort] = useState<string>('By default')

    const { data: paginationResponse } = appApi.useFetchProductsPaginationQuery({ page, size: 9 })

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const sortHandleClick = (event: SelectChangeEvent) => {
        setSort(event.target.value)
    }

    return (
        <main>
            <Container>
                <Box display='flex' justifyContent='space-between' py='50px'>
                    <Box width='200px' >

                    </Box>
                    <Box width='60vw' display='flex' flexDirection='column'>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography color='#6C6C6C'>Selected Products: <span className='text-[#000]'>85</span></Typography>
                            <SortDropdown sort={sort} sortItems={sortItems} onChange={sortHandleClick} />
                        </Box>
                        <Box display='flex' flexDirection='column' alignItems='center' gap='40px' mt='24px'>
                            <Grid container columns={12} spacing={2}>
                                {paginationResponse?.products ? paginationResponse.products.map((product, index) => <ProductCard key={index} product={product} />) : Array(9).fill(<ProductCardSkeleton />).map(skeleton => skeleton)}
                            </Grid>
                            <Pagination page={page} onChange={handleChange} count={paginationResponse?.pageSize} siblingCount={0} boundaryCount={1} shape='rounded' />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </main>
    )
}

export default Products