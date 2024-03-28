import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import ListItemContent from '@mui/joy/ListItemContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/joy/Typography';

import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import PostSchedule from '../dashboard/Body-dashboard/PostSchdule';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemText sx={{ color: '#fff' }} primary="Welcome Dep-Head" />
    </ListItemButton>

    <ListItemButton component={Link} to="./">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>

    <ListItemButton component={Link} to="./Body-dashboard/PostSchdule" element={<PostSchedule />}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Post Schedule" />
    </ListItemButton>

    <ListItemButton component={Link} to="./Body-dashboard/ExamApproval">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Exam Approval" />
    </ListItemButton>

    <ListItemButton component={Link} to="./Body-dashboard/ViewCandidates">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="View Candidates" />
    </ListItemButton>

    <ListItemButton component={Link} to="./Body-dashboard/Integration">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integration" />
    </ListItemButton>

    <ListItemButton role="menuitem" component="a" href="/joy-ui/getting-started/templates/messages/">
      <QuestionAnswerRoundedIcon />
      <ListItemContent>
        <Typography level="title-sm">Messages</Typography>
      </ListItemContent>
      <Chip size="sm" color="primary" variant="filled">
        4
      </Chip>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Account Settings
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Notification" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Feedback" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);