import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function CardLectuer() {
  return (
    <React.Fragment>
      <Title>Lectuer</Title>
      <Typography component="p" variant="h4">
        Lectuer
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        The requst form Lectuer
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View More
        </Link>
      </div>
    </React.Fragment>
  );
}
