import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
};

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login, error, isLoading} = useLogin()
    
  const handleSubmit = async (event) => {    
    event.preventDefault();
    await login(email, password); 
  }   

  return (
    <div>
      <div onClick={handleOpen}>{props.text}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              sx={{
                backgroundColor: "#2669A4",
                p: 1,
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <Typography color="secondary" variant="h4">
                  Login
                </Typography>
                <IconButton onClick={handleClose}>
                  <CloseIcon color="secondary" />
                </IconButton>
              </Stack>
            </Box>
            <Box padding={2}>
              <form onSubmit={handleSubmit} action={<Link to="/" />}>
                <TextField
                  type="email"
                  variant="outlined"
                  color="secondary"
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  fullWidth
                  sx={{ mb: 4 }}
                />
                <TextField
                  type="password"
                  variant="outlined"
                  color="secondary"
                  label="Adgangskode"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  fullWidth
                  sx={{ mb: 4 }}
                />
                <Button 
                disabled={isLoading}
                variant="contained" 
                color="secondary" 
                type="submit">
                  Login
                </Button>
                {error && <h4>{error}</h4>}
              </form>
              <small>
                Har du ikke en bruger?{" "}
                <Link onClick={handleClose} to="/registrering">
                  Opret her
                </Link>
              </small>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
