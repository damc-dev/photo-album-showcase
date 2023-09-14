'use client';
import useSWR from 'swr'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import fetch from '@/app/libs/fetch';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Photo } from './Photo';
import Skeleton from '@mui/material/Skeleton';
import useAlbumPhotos from './useAlbumPhotos';
import useAlbums from '../useAlbums';
import { CardActionArea, Modal, useMediaQuery } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from 'next/navigation';
import NextBreadcrumbs from '../../components/BreadCrumb';


function PhotoElem({ index, photo }: { index: number, photo: Photo }) {
  const router = useRouter()
  return (
    <Card

      sx={{ maxWidth: 300, height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      {photo ? (
        <CardActionArea onClick={() => console.log('click')}>
          <CardMedia component="div"
            sx={{ pt: '56.25%' }}
            image={photo.thumbnailUrl}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom>
              {photo.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
            <Button size="small">Edit</Button>
          </CardActions>
        </CardActionArea>
      ) : <Skeleton variant="rectangular" height={300} width="100%" />}
    </Card>
  )
}

// export default function Page({ params }: { params: { id: number } }) {
//   const { photos, isError, isLoading } = useAlbumPhotos(params.id)
//   const { albums, isError: isAlbumError, isLoading: isAlbumLoading} = useAlbums(1)

//   console.log(albums)

//   if (isError) return (<Alert severity="error">
//     <AlertTitle>Error</AlertTitle>
//     {isError}
//   </Alert>)

//   return (
//     <Container sx={{ py: 3 }} maxWidth="lg">
//             <Typography variant="h3" sx={{mt: 0, mb: 4 }}>
//             {albums ? albums?.find((album) => album.id == params.id)?.title : ""}
//             </Typography>
//     <Grid container spacing={1} >
//       {(isLoading || !photos ? Array.from(new Array(10)) : photos).map((photo: Photo, index: number) => {
//         return (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//           <PhotoElem photo={photo} index={index} />
//           </Grid>)
//       })}
//     </Grid>
//     </Container>
//   )
// }

export default function Page({ params }: { params: { id: number } }) {
  const { photos, isError, isLoading } = useAlbumPhotos(params.id)
  const { albums, isError: isAlbumError, isLoading: isAlbumLoading } = useAlbums(1)

  console.log(albums)

  const [focusedImage, setfocusedImage] = React.useState<Photo>();
  if (isError) return (<Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    {isError}
  </Alert>)
  const lg = useMediaQuery('(min-width:1200px)');
  const md = useMediaQuery('(min-width:1000px)');
  let cols = 1
  if (lg) {
    cols=3
  } else if(md) {
    cols = 2
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   // minWidth: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => setfocusedImage(undefined);
  return (
    <Container sx={{ py: 3 }} maxWidth="lg">
      <NextBreadcrumbs/>
      <Typography variant="h3" sx={{ mt: 0, mb: 4 }}>
        {albums ? albums?.find((album) => album.id == params.id)?.title : ""}
      </Typography>
      <Modal
        open={focusedImage ? true : false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img
              src={focusedImage?.url}
              srcSet={focusedImage?.url}
              alt={focusedImage?.title}
              loading="lazy"
            />
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {focusedImage?.title}
          </Typography>
        </Box>
      </Modal>
      <ImageList sx={{ height: '100%' }} cols={cols}>
        {(isLoading || !photos ? Array.from(new Array(10)) : photos).map((photo: Photo | null) => (
          <ImageListItem key={photo?.id} sx={{width:300}} onClick={() => setfocusedImage(photo || undefined)}>
            <img
              src={photo?.thumbnailUrl}
              srcSet={photo?.thumbnailUrl}
              alt={photo?.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={photo?.title}
              position="below"
            />
          </ImageListItem>

        ))}
      </ImageList>
    </Container>
  )
}


