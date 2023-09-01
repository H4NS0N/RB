import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HeroBanner from "../components/hero";
import { Grid } from "@mui/material";
import Banner from "../images/banner/om-rb.png";

export default function omRB() {
  return (
    <>
      <HeroBanner
        header="Roskilde Boldklub"
        subtitle="Om klubben"
        image={Banner}
      />

      <Box
        sx={{
          mx: "20%",
          mb: "3%",
        }}
      >
        <Grid container mt="3rem">
          <Grid>
            <h1>Om RB1906</h1>
            <Typography>Senest opdateret 2023</Typography>
            <Typography my="1rem">
              Roskildes Boldklub blev stiftet den 3. december 1906 ved en
              sammenslutning af fodboldklubberne Roskilde Idrætsforening
              (stiftet den 10. oktober 1928) og Roskildeyvester Idrætsforening
              (stiftet den 1. februar 1909).
            </Typography>
            <Typography my="1rem">
              Baggrunden for sammenslutningen var, at det daværende sogneråd
              ønskede en sammenslutning af idrætsforeningerne i kommunen. På
              dette tidspunkt havde foreningen adskillige idrætsgrene, som
              fodbold, håndbold, gymnastik, badminton osv. på programmet.
            </Typography>
            <Typography my="1rem">
              Roskildeyernes IF Fodbold A/S, som er selskabet bag ligaholdet og
              talentholdene, blev stiftet den 15. maj 1978 i forbindelse med
              indførelsen af professionel fodbold i Danmark, og selskabet blev i
              1987 introduceret på Københavns Fondsbørs. Roskildey IF var hermed
              den anden fodboldvirksomhed i verden, der blev børsnoteret.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={require("../images/logo/RBLogo.png")}
                width={"20%"}
                alt="BodyImage"
              ></img>
            </Box>

            <h3>Saster på ungdommen</h3>
            <Typography my="1rem">
              Fra starten satsede fodboldafdelingen på ungdommen.
              Ungdomsarbejdet har gennem årene altid haft og har fortsat en
              meget høj prioritet i klubben. Seniorafdelingen blev dog også
              styrket ved sammenslutningen og allerede i 1967 lykkedes det at
              vinde den sjællandske serie 1 og rykke op i Sjællandsserien.
            </Typography>
            <Typography my="1rem">
              Fire år senere vandt klubben Sjællandsserien. I samme periode blev
              klubben opdelt efter de enkelte idrætsgrene. Fodboldklubben
              beholdt navnet og borgmester Kjeld Rasmussen blev dens første
              formand. I januar 1906 blev han afløst på denne post af Per
              Bjerregaard, der siden har været klubbens formand.
            </Typography>
            <Typography my="1rem">
              Eks-landsholdsspilleren Finn Laudrup blev spillende træner i 1906,
              men koncentrerede sig fra 1974 om at spille selv og var generalen
              på holdet, der indfriede klubbens første langsigtede mål: At blive
              divisionsklub. Senere fulgte oprykninger i 1977 og 1981.{" "}
            </Typography>
            <Typography my="1rem">
              Dermed var det næste store mål nået: 1. division. Det blev i de
              førstetre sæsoner til ærefulde, men frustrerende 4. pladser lige
              uden for medaljerækken. Michael Laudrup blev på sin 18 års
              fødselsdag den 15. juni 1982 Roskildey IF´s første
              A-landsholdsspiller.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rFYzcFrHny0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
