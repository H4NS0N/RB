import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

export default function Kampe(props) {
  return (
    <>
    <Card sx={{ maxWidth: 500, mb: '5%', minHeight: '300px'}}>
      <CardActionArea>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <CardMedia
            component="img"
            image={props.hold1}
            alt={props.alt}
            sx={{ width: '25%', ml: '5%', maxHeight: '25%'}}
          />
          <Typography variant='h4'>{props.status}</Typography>
          <CardMedia
            component="img"
            image={props.hold2}
            alt={props.alt}
            sx={{ width: '25%', mr: '5%', maxHeight: '25%'}}
          />
        </Box>
        <CardContent>
          <Typography align='center'>{props.spillested}</Typography>
          <Typography align='center'>{props.aldersGruppe}</Typography>
          <Typography align='center'>{props.hold}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}