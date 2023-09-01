import { useState } from "react";
import { useArticlesContext } from "../hooks/useArticlesContext.js";
import { useAuthContext } from "../hooks/useAuthContext.js";
import Stack from "@mui/material/Stack";
import { Typography, Box, TextField, Button } from "@mui/material";

const ArticleForm = () => {
  const { dispatch } = useArticlesContext();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyfields] = useState([]);

  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Kræver du er logget ind for at oprette");
      return;
    }

    const article = { title, text };

    const response = await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify(article),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyfields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setText("");
      setEmptyfields([]);
      console.log("new article added:", json);
      dispatch({ type: "CREATE_ARTICLE", payload: json });
    }
  };

  return (
    <>
      {user && (
        <form className="create" onSubmit={handleSubmit}>
          <Stack spacing={1} sx={{ mt: "10%" }}>
            <Typography variant="h5">Tilføj ny artikel</Typography>
            <Box>
              <TextField
                label="Titel"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes("title") ? "error" : ""}
              />
            </Box>
            <Box>
              <TextField
                label="Tekst"
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                className={emptyFields.includes("text") ? "error" : ""}
              />
            </Box>
            <Box>
              <Button variant="contained" color="secondary" type="submit">
                Tilføj artikel
              </Button>
              {error && <div className="error">{error}</div>}
            </Box>
          </Stack>
        </form>
      )}
    </>
  );
};

export default ArticleForm;
