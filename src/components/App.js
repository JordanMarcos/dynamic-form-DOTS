// J'importe React 
import React from "react";

// J'importe les composants MUI dont j'ai besoin
import {
  CardContent,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

// J'importe mes fichiers json qui contiennent les props pour de mes composants MUI
import { inputFormElement } from "../jsonForms/formElements";
import { selectFormElement } from "../jsonForms/formSelectElement";
import { messageFormElement } from "../jsonForms/formMessageElement";
import { buttonFormElement } from "../jsonForms/formButton"

// Je créer une fonction composant nommé App
function App() {
  // Je créer un state pour que la valeur du select puisse s'afficher
  const [value, setValue] = React.useState("");

  // Je créer une fonction fléchée qui permet de changer le state de value
  // avec ce qui a été cliqué par l'user
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      {/* J'insère le style de Card ici car pas le temps pour faire comme MUI recommande (function) */}
      <Card style={{ maxWidth: 450, margin: "70px auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="left">
            Contactez-nous !
          </Typography>

          {/* Ici commence le formulaire */}
          <form>
            <Grid container spacing={1}>

              {/* Je créer une logique pour parcourir mon fichier json avec .map et créer mes inputs dynamiquement */}
              {inputFormElement.map((input) => (
                <Grid item xs={input.xs} sm={input.sm}>
                  {/* J'utilise le spread operator afin de déverser toutes les props de mon inputFormElement */}
                  <TextField {...input} />
                </Grid>
              ))}

              {/* Ici se trouve la partie select */}
              <Grid item xs={12} sm={12} >
                <FormControl fullWidth required>
                  <InputLabel id="sector-label">Secteur d'activité</InputLabel>

                  {/* Ici se trouve mon select */}
                  <Select
                    labelId="sector-label"
                    id="sector-label-select"
                    // J'utilise le state "value"
                    value={value}
                    // J'utilise la fonction "handleChange"
                    onChange={handleChange}>
                    {/* Je créer une logique pour parcourir mon fichier json avec .map et créer mes items du select dynamiquement */}
                    {selectFormElement.map((select) => (
                      <MenuItem value={select.value}> {select.name} </MenuItem>
                    ))}
                  </Select>

                </FormControl>
              </Grid>

              {/* Je créer une logique pour parcourir mon fichier json avec .map et créer mon message dynamiquement*/}
              {messageFormElement.map((message) => (
                <Grid item xs={message.xs} sm={message.sm}>
                  {/* J'utilise le spread operator afin de déverser toutes les props de mon messageFormElement */}
                  <TextField {...message} />
                </Grid>
              ))}

              {/* Je créer une logique pour parcourir mon fichier json avec .map et créer mon button dynamiquement*/}
              {buttonFormElement.map((button) => (
                <Grid item xs={button.xs} sm={button.sm}>
                  {/* J'utilise le spread operator afin de déverser toutes les props de mon buttonFormElement */}
                  <Button {...button}> {button.text} </Button>
                </Grid>
              ))}

            </Grid>
          </form>

        </CardContent>
      </Card>
    </div>
  );
};

export default App;
