import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import HeroBanner from "../components/hero";
import Banner from "../images/medlemskabBanner.jpg";
import Kampe from "../components/kampe";
import Roskilde from "../images/logo/RBLogo.png";
import Brondby from "../images/logo/brondby.png";
import Holbaek from "../images/logo/holbaek.png";
import Hvalso from "../images/logo/hvalso.png";
import Kalundborg from "../images/logo/kalundborg.png";
import Nykobing from "../images/logo/nykobing.png";
import Stenlose from "../images/logo/stenlose.png";

export default function kampOversigt() {
  /*
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
   */

  return (
    <>
      <HeroBanner
        header="Roskilde Boldklub"
        subtitle="kampoversigt"
        image={Banner}
      />
      <Box
        sx={{
          mx: "20%",
          mt: "5%",
        }}
      >
        <Grid
          container
          spacing={2}
          columns={100}
          mb="6rem"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid xs={48}>
            <h1>Kommende kampe</h1>
            <Kampe
              status="VS"
              hold1={Roskilde}
              hold2={Brondby}
              spillested="Hjemmebane"
              aldersGruppe="Herre U12"
              hold="Roskilde - Brøndby"
            />
            <Kampe
              status="VS"
              hold1={Roskilde}
              hold2={Holbaek}
              spillested="Hjemmebane"
              aldersGruppe="Herre U15"
              hold="Roskilde - Holdbæk"
            />
            <Kampe
              status="VS"
              hold1={Stenlose}
              hold2={Roskilde}
              spillested="Udebane"
              aldersGruppe="Herre U9"
              hold="Stenløse - Roskilde"
            />
            {/* <Pagination
              page={page}
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/kampoversigt${
                    item.page === 1 ? "" : `?page=${item.page}`
                  }`}
                  {...item}
                />
              )}
            /> */}
          </Grid>
          <Grid
            xs={2}
            /* sx={{
              borderLeft: 3
            }} */
          ></Grid>
          <Grid xs={48}>
            <h1>Afgjorte kampe</h1>
            <Kampe
              status="2 - 1"
              hold1={Kalundborg}
              hold2={Brondby}
              spillested="Udebane"
              aldersGruppe="Herre U13"
              hold="Kalundborg - Roskilde"
            />
            <Kampe
              status="1 - 4"
              hold1={Roskilde}
              hold2={Hvalso}
              spillested="Hjemmebane"
              aldersGruppe="Herre U17"
              hold="Roskilde - Hvalsø"
            />
            <Kampe
              status="2 - 3"
              hold1={Roskilde}
              hold2={Nykobing}
              spillested="Hjemmebane"
              aldersGruppe="Herre U15"
              hold="Roskilde - Nykøbing"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
