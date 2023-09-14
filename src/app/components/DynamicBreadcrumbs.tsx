'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

type OnClickType = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void

const defaultOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => { event.preventDefault()}

// Each individual "crumb" in the breadcrumbs list
function Crumb({ text, href, last=false, onClick=defaultOnClick}: { text: string, href: string, last?: boolean, onClick?: OnClickType}) {
  // The last crumb is rendered as normal text since we are already on the page
  if (last) {
    return <Typography data-testid="breadcrumb-current" variant="h3" color="text.primary">{text}</Typography>
  }

  // All other crumbs will be rendered as links that can be visited 
  return (
    <Link  variant="h3" underline="hover" color="inherit" href={href} data-testid="breadcrumb-previous">
      {text}
    </Link>
  );
}

export default function DynamicBreadcrumbs() {
  // Gives us ability to load the current route details
  const router = useRouter();

  const pathname = usePathname()

  function generateBreadcrumbs() {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = pathname.split("?")[0];

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery.split("/")
                                                 .filter((v: string) => v.length > 0);

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumblist = asPathNestedRoutes.map((subpath: string, idx: number) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      // The title will just be the route string for now
      const text = subpath.charAt(0).toUpperCase()
      + subpath.slice(1);
      
      return { href, text }; 
    })

    // Add in a default "Home" crumb for the top-level
    return [{ href: "/", text: "Home"  }, ...crumblist];
  }

  // Call the function to generate the breadcrumbs list
  const breadcrumbs = generateBreadcrumbs();
  return (
    <Box sx={{ mb: 4}}>
    <Breadcrumbs data-testid="breadcrumbs">
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} data-testid={`breadcrumb-${idx}`} />
      ))}
    </Breadcrumbs>
    </Box>
  );
}