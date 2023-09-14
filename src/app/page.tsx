
import Image from 'next/image'
import styles from './page.module.css'
import Box from '@mui/material/Box'
import { Breadcrumbs, Button, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import DynamicBreadcrumbs from './components/DynamicBreadCrumbs'

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
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Photo Album Showcase
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              This is an example project to show my skills
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
              <Link href="https://github.com/damc-dev" target="_blank" rel="noopener noreferrer" passHref>
              <Button variant="outlined">View Source</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
    </main>
  )
}
