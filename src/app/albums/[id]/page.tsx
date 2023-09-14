'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Photo } from './Photo';
import useAlbumPhotos from './useAlbumPhotos';
import useAlbums from '../useAlbums';
import { Modal, useMediaQuery } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import DynamicBreadcrumbs from '../../components/DynamicBreadcrumbs';

export default function Page({ params }: { params: { id: number } }) {
  const { photos, isError, isLoading } = useAlbumPhotos(params.id)
  const { albums, isError: isAlbumError, isLoading: isAlbumLoading } = useAlbums(1)
  const lg = useMediaQuery('(min-width:1200px)');
  const md = useMediaQuery('(min-width:1000px)');
  console.log(albums)

  const [focusedImage, setfocusedImage] = React.useState<Photo>();
  if (isError) return (<Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    {isError}
  </Alert>)

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
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => setfocusedImage(undefined);
  return (
    <Container sx={{ py: 3 }} maxWidth="lg">
      <DynamicBreadcrumbs/>
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
          //@ts-ignore
          <ImageListItem key={photo?.id || photo} sx={{width:300}} onClick={() => setfocusedImage(photo || undefined)}>
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


