import TaxForm from "./components/TaxForm";
import TaxReport from "./components/TaxReport";

import { Container, Typography } from "@mui/material";

function App() {

  return (
    <Container style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Typography
        variant="h3"
        align="center"
        style={{ marginBottom: "16px" }}
      >
        Calculadora de Impostos
      </Typography>
      <TaxForm />
      <TaxReport />

    </Container>
  );
}

export default App;
