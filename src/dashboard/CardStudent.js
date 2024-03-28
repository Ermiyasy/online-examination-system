import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function CardStudent() {
  return (
    <React.Fragment>
      <Title>Student</Title>
      <Typography component="p" variant="h4">
        Student
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        View cadidate student's
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View More
        </Link>
      </div>
    </React.Fragment>
  );
}
