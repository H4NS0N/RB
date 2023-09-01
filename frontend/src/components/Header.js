import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LoginModal from "./loginModal";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  styled,
  Link,
} from "@mui/material";

function ResponsiveAppBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
    window.location.reload(false);
  };

  const NavItem = styled(Button)({
    my: 2,
    color: "black",
    display: "block",
    fontSize: 20,
    fontWeight: 600,
    textTransform: "none",
  });

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#2669A4", height: "60px" }}
      >
        <Container
          sx={{
            backgroundColor: "#2669A4",
            width: "100%",
            height: "50px",
          }}
        >
          <Toolbar sx={{ p: 0, m: 0 }}>
            <Box
              sx={{
                display: "flex",
                color: "#ffffff",
                alignItems: "center",
                width: "100%",
                justifyContent: "right",
              }}
            >
              {!user && (
                <Button>
                  <LoginModal text="Login" />
                  <img
                    src={require("../images/logo/login.png")}
                    alt="login"
                  ></img>
                </Button>
              )}
              {user && (
                <>
                  <Typography sx={{ mr: "7%" }}>{user.email}</Typography>
                  <Button onClick={handleLogout}>
                    <Typography>Logout</Typography>
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar position="static" sx={{ backgroundColor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <a href="/">
              <img
                className="headerLogo"
                src={require("../images/logo/RBLogo.png")}
                width={"100px"}
                alt="logo"
              ></img>
            </a>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "space-evenly",
                },
              }}
            >
              <NavItem>
                <Link underline="none" color="inherit" href="om-rb">
                  Om RB
                </Link>
              </NavItem>
              <NavItem>
                <Link underline="none" color="inherit" href="nyheder">
                  Nyheder
                </Link>
              </NavItem>
              <NavItem>
                <Link underline="none" color="inherit" href="/medlemskab">
                  Medlemskab
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  underline="none"
                  color="inherit"
                  href="https://roskildeboldklub.sport24team.dk/"
                >
                  Webshop
                </Link>
              </NavItem>
              <NavItem>
                <Link underline="none" color="inherit" href="/kampoversigt">
                  Kampoversigt
                </Link>
              </NavItem>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
