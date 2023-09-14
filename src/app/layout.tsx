import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Button } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Photo Album Showcase',
  description: 'Created by David McElligott for Lean TECHnique',
}

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: 'Albums', href: '/albums', icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS: any[] = [];


function Sidebar() {

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          top: ['48px', '56px', '64px'],
          height: 'auto',
          bottom: 0,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div><Divider />
        <List>
          {LINKS.map(({ text, href, icon: Icon }) => (
            <ListItem key={href} disablePadding>
              <ListItemButton component={Link} href={href} data-testid={`sidebar-nav-${text.toLowerCase()}`}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mt: 'auto' }} />
        <List>
          {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>

          ))}
        </List>
      </div>
    </Drawer>)
}

function MyAppBar() {
  return (
    <AppBar position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar sx={{ backgroundColor: 'background.paper' }}>
        <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
        <Link href="/" data-testid="appbar-nav-home">

          <Typography variant="h6" noWrap component="div" sx={{
            flexGrow: 0, display: { xs: 'flex', md: 'flex' },
            fontFamily: 'Helvetica', mr: 2,
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',

          }} >
            Photo Album Showcase
          </Typography>
        </Link>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {LINKS.map(({ text, href, icon: Icon }) => (
            <Button key={href} href={href} sx={{ color: '#fff' }} data-testid={`appbar-nav-${text.toLowerCase()}`}>
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>)
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const showSideBar = false;

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <MyAppBar />
          {showSideBar ? <Sidebar /> : ""}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              ml: showSideBar ? `${DRAWER_WIDTH}px` : undefined,
              mt: ['48px', '56px', '64px'],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
