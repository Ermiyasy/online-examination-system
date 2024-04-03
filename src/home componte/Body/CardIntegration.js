import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Integration from './Body-dashboard/Integrantion'
function preventDefault(event) {
  event.preventDefault();
}

export default function CardIntegration() {
  return (
    <React.Fragment>
      <Title>Integrations </Title>
      <Typography component="p" variant="h4">
        Integrations
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        The Integrations between Departements
      </Typography>
      <div>
        <Link color="primary" href="./Body-dashboard/Integration" onClick={preventDefault} element={<Integration />}>
          View More
        </Link>
      </div>
    </React.Fragment>
  );
}
