import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header(props) {
  return (
  <Box sx={{
    backgroundImage: `url("${props.image}")`
    }}>
      <Container maxWidth="md">
        <Box>
          <Typography gutterBottom={true}>
            <Typography align='center' color="white" variant="bannerHeading" >{props.header} </Typography>
            <Typography align='center' color="white" variant="bannerSubtitle" >{props.subtitle}</Typography>
          </Typography>
        </Box>
      </Container>
  </Box>
  );
}