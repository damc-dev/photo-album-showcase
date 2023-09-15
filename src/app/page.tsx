
import styles from './page.module.css'
import Box from '@mui/material/Box'
import { Button, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
export default function Home() {
  return (
    <main className={styles.main}>

          <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 4,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
             Welcome to the Photo Album Showcase!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            This Next.js application, written in TypeScript, is designed to provide a beautiful and user-friendly way to showcase photo albums as well as an example of what I can develop given a prompt and a few hours.
            </Typography>
             <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="/albums" passHref>
              <Button variant="contained">Go to Albums</Button>
              </Link>
              <Link href="https://github.com/damc-dev/photo-album-showcase" target="_blank" rel="noopener noreferrer" passHref>
              <Button variant="outlined">Learn More</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
    </main>
  )
}
