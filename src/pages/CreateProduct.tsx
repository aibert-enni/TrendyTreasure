import { CloudUpload, Upload, UploadFile } from '@mui/icons-material'
import { Box, Button, CircularProgress, Container, Input, InputAdornment, TextField, Typography, styled } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Form } from 'react-router-dom'
import { Product } from '../models/apiModels'
import { useState } from 'react'
import { appApi } from '../services/ApiService'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const fileToDataUri = (file: File) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        event.target && resolve(event.target.result)
    };
    reader.readAsDataURL(file);
})

const CreateProduct = () => {
    const [createProduct, result] = appApi.useCreateProductMutation()
    const { register, handleSubmit, formState: { errors } } = useForm<Product>()
    const [imageBase64, setImageBase64] = useState<string>('')

    const onChangeInput = (file: File) => {

        if (!file) {
            setImageBase64('');
            return;
        }

        fileToDataUri(file)
            .then(dataUri => {
                setImageBase64(dataUri as string)
            })

    }

    const onSubmit: SubmitHandler<Product> = (data) => {
        if (data.dataUrlImage.length <= 0) return
        createProduct({
            name: data.name,
            price: data.price,
            description: data.description,
            dataUrlImage: imageBase64.replace('data:image/jpeg;base64,', '')
        })
        console.log(result.status)
    }

    return (
        <main>
            <Container>
                <Typography textAlign='center' color='black' fontWeight='700' fontSize={60} mt={10}>
                    Create product
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 10, gap: '48px' }}>
                    <Box width={536} height={516}>
                        {imageBase64.length > 0 && <img className='w-[536px] h-[516px]' src={imageBase64}></img>}
                    </Box>
                    <Form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[32px]'>
                        <TextField {...register('name', {
                            required: true
                        })} variant='standard' placeholder='Name'
                            sx={{ '.MuiInputBase-input': { fontFamily: '700', fontSize: '40px' } }} />
                        <TextField {...register('price', {
                            required: true,
                            valueAsNumber: true
                        })} InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Typography color='black' fontSize="32px">$</Typography>
                                </InputAdornment>
                            )
                        }} sx={{
                            '.MuiInputBase-input': { fontFamily: '700', fontSize: '32px' },
                            'input::-webkit-inner-spin-button, input::-webkit-outer-spin-button': {
                                'WebkitAppearance': 'none',
                                'margin': '0'
                            }
                        }} variant='standard' error={errors.price ? true : false} helperText={errors.price && "Only number"} type='number' placeholder='Price' />
                        <TextField {...register('description', {
                            required: true
                        })} sx={{ '.MuiInputBase-input': { color: '#6C6C6C', fontSize: '14px' } }}
                            variant='outlined' multiline placeholder='Description' />
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUpload />}
                            sx={{
                                backgroundColor: 'black',
                                ':hover': {
                                    backgroundColor: 'black'
                                }
                            }}
                        >
                            Upload product image
                            <VisuallyHiddenInput {...register('dataUrlImage', {
                                required: true
                            })} onChange={(e) => { e.target.files && onChangeInput(e.target.files[0]) }} type="file" />
                        </Button>
                        <button disabled={result.isLoading} className='bg-black rounded-md text-white w-[260x] h-[56px]'>
                            {result.isLoading ? <CircularProgress color='inherit' /> : 'Create'}
                        </button>
                    </Form>
                </Box>
            </Container>
        </main>
    )
}

export default CreateProduct