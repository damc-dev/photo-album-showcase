'use client';

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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useAlbums from './useAlbums';
import Alert from '@mui/material/Alert';
import { AlertTitle, Box, Skeleton } from '@mui/material';
import { Album } from './Album';
import { CardActionArea } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NextBreadcrumbs from '../components/BreadCrumb';


function AlbumElem({ index, album }: { index: number, album: Album }) {
  const router = useRouter()
  return (
    <Card
    sx={{ maxWidth: 300, minHeight: 120, height: '100%', display: 'flex', flexDirection: 'column' }}
    >
    {album ? (
      <CardActionArea sx={{height: '100%'}} onClick={() => router.push(`/albums/${album.id}`)}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom>
          {album.title}
        </Typography>
      </CardContent>
      </CardActionArea>
) : <Skeleton variant="rectangular" width={150} height={150} />}
    </Card>
)}

export default function Page({ params }: { params: { id: number } }) {
  const { albums, isError, isLoading } = useAlbums(1)

  if (isError) return (<Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    {isError}
  </Alert>)

  return (
    <Container sx={{ py: 3 }} maxWidth="lg">

      <NextBreadcrumbs></NextBreadcrumbs>

    <Grid container spacing={1} data-testid="album-grid" >
      {(isLoading || !albums ? Array.from(new Array(10)) : albums).map((album: Album, index: number) => {
        return (
          <Grid item key={index} xs={12} sm={6} md={4} data-testid="album-grid-item">
          <AlbumElem album={album} index={index} />
          </Grid>)
      })}
    </Grid>
    </Container>
  )
}

