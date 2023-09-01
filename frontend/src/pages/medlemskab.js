import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import HeroBanner from '../components/hero';
import Banner from '../images/medlemskabBanner.jpg'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2669A4",
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, season1, season2, season3, season4) {
  return { name, season1, season2, season3, season4 };
}

const rows = [
  createData('Senior', '1000kr', '1000kr', '1000kr', '1000kr'),
  createData('Voksen 30-39', '1000kr', '1000kr', '1000kr', '1000kr'),
  createData('Voksen 20-29', '1000kr', '1000kr', '1000kr', '1000kr'),
  createData('U19', '1000kr', '1000kr', '1000kr', '1000kr'),
  createData('U15', '900kr', '900kr', '900kr', '900kr'),
  createData('U12', '600kr', '600kr', '600kr', '600kr'),
  createData('U9', '300kr', '300kr', '300kr', '300kr')
];
 
export default function CustomizedTables() {
  return (
    <>
      <HeroBanner header="Medlemskab" subtitle="information & priser" image={Banner} />    
      <Box sx={{ mx: '20%', mt: '3%' }} >
        <h1>Medlemskab</h1>
        <Typography paragraph>I Roskilde Boldklub opkræves der fra 2023 kontingent i 4 rater.</Typography>
        <Typography paragraph>Sæsonbetlingen falder i Januar-Marts, April-Juni, Juli – September og Oktober – December.</Typography>
        <h3>Til forældre</h3>
        <Typography paragraph>"U" hold repræsentere aldre under det givende år.</Typography>
        <Typography paragraph>F.eks. vil U12 være børn under 12 år.</Typography>
        <Box sx={{ maxWidth: 1000 }} >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Gruppe (2023-2024)</StyledTableCell>
                  <StyledTableCell align="right">Sæson1</StyledTableCell>
                  <StyledTableCell align="right">Sæson2</StyledTableCell>
                  <StyledTableCell align="right">Sæson3</StyledTableCell>
                  <StyledTableCell align="right">Sæson4</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.season1}</StyledTableCell>
                    <StyledTableCell align="right">{row.season2}</StyledTableCell>
                    <StyledTableCell align="right">{row.season3}</StyledTableCell>
                    <StyledTableCell align="right">{row.season4}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <h2>Manglende betaling af kontigent</h2>
          <Typography paragraph>Hvis betalingsbetingelser ikke efterleves <b>spærres</b> medlemmet <b>straks fra deltagelse i træning og kampe.</b></Typography>
          <Typography paragraph>Spilleren er spærret på følgende vilkår:</Typography>
          <Typography paragraph><b>a)</b> Indtil spilleren indbetaler sin restance eller</Typography>
          <Typography paragraph><b>b)</b> I op til 2 turneringsår – turneringsåret løber fra 1.juli til 30. juni.</Typography>
          <Typography paragraph><b>Spilleren kan ikke spille i klubben eller andre klubber før restancen er indfriet.</b></Typography>

          <h2>Problemer med at betale kontigent</h2>
          <Typography paragraph>Hvis det drejer sig om manglende økonomisk evne til at betale kontingentet – kontakt os på <b>info@roskildeboldklub.dk</b></Typography>
          <Typography paragraph>Hvis det drejer sig om tekniske problemer vedr. betalingen – kontakt os på <b>info@roskildeboldklub.dk</b></Typography>
          <h2>Kontigent og udmeldelse</h2>
          <Typography paragraph mb="10%">Spillere skal udmelde sig skriftligt til kontoret på <b>info@roskildeboldklub.dk</b> og der gælder følgende opsigelsesvarsel: Løbende måned og frem til næste kontingentopkrævning, hvilket i praksis betyder at kontingentet ikke refunderes. En spiller kan kun udmeldes, hvis spilleren ikke er i restance overfor SBI.</Typography>

        </Box>
      </Box>
    </>
  );
}