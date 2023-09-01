import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

export default function artikel({ article }) {
  return (
    <Box
      sx={{
        mx: "20%",
      }}
    >
      <Grid container spacing={2} columns={12} mt="3rem">
        <Grid xs={9}>
          <h1>Natalie vinder Sommerland Sjællands Børnelederpris</h1>
          <Typography>25-01-2023</Typography>
          <Typography my="1rem">
            Det lignede en helt almindelig træningsaften på RB06’s fodboldanlæg.
            Træner for klubbens yngste piger, Natalie Rømer, var tirsdag aften i
            gang med sin sædvanlige træning, da en delegation fra DBU Sjælland
            og Sommerland Sjælland dukkede op med en helt særlig pris.
          </Typography>
          <Typography my="1rem">
            Natalie er nemlig blevet udvalgt til at modtage Sommerland Sjællands
            Børnelederpris for sit kæmpe arbejde med at udvikle pigefodbolden i
            RB1906.
          </Typography>
          <Typography my="1rem">
            Prisen blev overrakt af Ilknur Kekec Coban, der er suppleant i DBU
            Sjællands bestyrelse. Hun blev assisteret af Sommerland Sjællands
            maskot, blomster-alfen Mysa, der gjorde stor lykke hos børnene og
            gav high-fives hele vejen rundt.
          </Typography>

          <img
            src={require("../images/banner/artikel-body.png")}
            width={"100%"}
            alt="BodyImage"
          ></img>
          <Typography variant="imageSubText">
            Prisvinderen Natalie Rømer ses her med sine spillere, Sommerland
            Sjællands maskot Mysa og Ilknur Kekec Coban, der er suppleant i DBU
            Sjællands bestyrelse.
          </Typography>

          <Typography my="1rem">
            Kim Møller, formand for DBU Sjællands børneudvalg, holdt en tale,
            hvor han blandt andet fremhævede, at Natalie har en stor del af æren
            for, at op mod 60 piger i alderen op til 12 år spiller i RB06.
            Hendes engagement smitter af på alle omkring hende, og hun er
            utrolig vellidt blandt både børn og voksne. Natalie var også
            drivkraften bag at få RB06 med i projektet ’UEFA Playmakers –
            inspired by Disney’, der introducerer 5-8-årige piger til fodbold
            gennem leg og de velkendte Disney-universer.
          </Typography>
          <Typography my="1rem">
            I det hele taget er Natalie Rømer er en ildsjæl, som på alle måder
            brænder for børne- og pigefodbolden, og derfor er det helt fortjent,
            at hun modtager Sommerland Sjællands Børnelederpris.
          </Typography>

          <h3>Om Sommerland Sjællands Børnelederpris</h3>
          <Typography my="1rem">
            Prisen er stiftet af Sommerland Sjælland og DBU Sjælland, som gerne
            vil gerne anerkende og synliggøre det store og uundværlige arbejde,
            frivillige ledere udfører til fordel for børnefodbolden.
          </Typography>
          <Typography my="1rem">
            Prisen uddeles hvert år til en ulønnet ildsjæl, der er synlig i sit
            lokalområde og som har markeret sig ved en særlig indsats for
            børnefodbolden på Sjælland. Udover et diplom får prismodtageren
            5.000 kr.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
