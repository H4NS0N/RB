import {
  Box,
  Typography,
  Grid,
  Link,
  styled,
  Button,
  Stack,
} from "@mui/material";
import HeroBanner from "../components/hero";
import SenesteNyheder from "../components/senesteNyheder";
import Hero from "../images/banner/rb-hero.png";
import Opslag from "../components/opslagCard";
import { useEffect } from "react";
import { usePostsContext } from "../hooks/usePostContext";
import Nyhed1 from "../images/nyhed/nyhed1.jpg";
import Nyhed2 from "../images/nyhed/nyhed2.png";
import Nyhed3 from "../images/nyhed/nyhed3.png";
import Nyhed4 from "../images/nyhed/nyhed4.jpeg";

// Button er herfra: https://mui.com/system/styles/basics/#:~:text=to%20start%20editing-,Styled%20components%20API,-Note%3A%20this%20only
const MyButton = styled(Button)({
  background: "#2669A4",
  border: 0,
  borderRadius: 5,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 50,
  padding: "0 30px",
  "&:hover": {
    backgroundColor: "#F3B820",
  },
});

export default function Forside() {
  const { posts, dispatch } = usePostsContext();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_POSTS", payload: json });
      }
    };

    fetchPosts();
  });
  return (
    <>
      <HeroBanner header="Roskilde Boldklub" subtitle="af 1906" image={Hero} />
      {/* Nyheder */}
      <Box sx={{ mx: "20%" }}>
        <h1>Seneste nyheder</h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: "20%",
        }}
      >
        <SenesteNyheder
          image={Nyhed1}
          title="RB starter hold for de mindste"
          date="02. Juni 2023"
          alt="Nyhed 1"
        ></SenesteNyheder>
        <SenesteNyheder
          image={Nyhed2}
          title="Landskamp i Idrætsparken"
          date="14. Maj 2023"
          alt="Nyhed 2"
        ></SenesteNyheder>
        <SenesteNyheder
          image={Nyhed3}
          title="Generalforsmaling 2023"
          date="02. Februar 2023"
          alt="Nyhed 3"
        ></SenesteNyheder>
        <SenesteNyheder
          image={Nyhed4}
          title="Natalie blev tildelt Sommerland Sjælland børnelederpris"
          date="25. Januar 2023"
          alt="Nyhed 4"
        ></SenesteNyheder>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: "2%",
        }}
      >
        <Link href="/nyheder" style={{ textDecoration: "none" }}>
          <MyButton
            sx={{
              textTransform: "none",
            }}
          >
            <Typography variant="blueBtn">Alle nyheder</Typography>
          </MyButton>
        </Link>
      </Box>
      {/* Sponsor */}
      <Box
        sx={{
          mx: "20%",
        }}
      >
        <Stack
          spacing={{ xl: 5, sm: 4 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {posts &&
              posts.map((post) => (
                <Grid item xs={2} sm={4} md={4}>
                  <Opslag key={post._id} post={post} />
                </Grid>
              ))}
          </Grid>
        </Stack>
      </Box>
      {/* Sponsor */}
      <Box
        sx={{
          backgroundColor: "#FCFCFC",
          justifyContent: "space-evenly",
          boxShadow: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            color: "black",
            mx: "20%",
            justifyContent: "space-evenly",
            pb: 4,
          }}
        >
          <h1>SPONSORERE OG PARTNERE</h1>
        </Box>
        <Box sx={{ mx: "20%" }}>
          <Grid
            container
            spacing={2}
            columns={12}
            alignItems="center"
            mb="6rem"
          >
            <Grid item xs={3}>
              <a href="https://www.nike.com/dk/">
                <img
                  src={require("../images/sponsor/nikePNG.png")}
                  width={"80%"}
                  alt="Sponsor-nike"
                ></img>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://www.bauhaus.dk/">
                <img
                  src={require("../images/sponsor/sponsor-bauhaus.png")}
                  width={"80%"}
                  alt="Sponsor-bauhaus"
                ></img>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://fysiodanmarkroskilde.dk/">
                <img
                  src={require("../images/sponsor/fysio.png")}
                  width={"80%"}
                  alt="Sponsor-fysio"
                ></img>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://home.dk/ejendomsmaegler/144-home-roskilde/">
                <img
                  src={require("../images/sponsor/sponsor-home.png")}
                  width={"80%"}
                  alt="Sponsor-home"
                ></img>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://www.ok.dk/privat/paa-tanken">
                <img
                  src={require("../images/sponsor/sponsor-ok.png")}
                  width={"80%"}
                  alt="Sponsor-ok"
                ></img>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://eu.puma.com/dk/en/home?locale=en_DK&mktID=PL:Brand%20Marketing:Puma.com-CatchAllPage:Denmark-en&plinkID=Brand">
                <img
                  src={require("../images/sponsor/sponsor-puma.png")}
                  width={"80%"}
                  alt="Sponsor-puma"
                ></img>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://www.sparnord.dk/">
                <img
                  src={require("../images/sponsor/sponsor-spar-nord.png")}
                  width={"80%"}
                  alt="Sponsor-spar-nord"
                ></img>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://www.sport24.dk/">
                <img
                  src={require("../images/sponsor/sponsor-sport24.png")}
                  width={"80%"}
                  alt="Sponsor-sport24"
                ></img>
              </a>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
