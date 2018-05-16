import React from "react";

import { Autocomplete, FormGroup } from "../../src";

const defaultOptions = [
  { value: "1", label: "Abruzzo" },
  { value: "2", label: "Basilicata" },
  { value: "3", label: "Calabria" },
  { value: "4", label: "Campania" },
  { value: "5", label: "Emilia Romagna" },
  { value: "6", label: "Friuli Venezia Giulia" },
  { value: "7", label: "Lazio" },
  { value: "8", label: "Liguria" },
  { value: "9", label: "Lombardia" },
  { value: "10", label: "Marche" },
  { value: "11", label: "Molise" },
  { value: "12", label: "Piemonte" },
  { value: "13", label: "Puglia" },
  { value: "14", label: "Sardegna" },
  { value: "15", label: "Sicilia" },
  { value: "16", label: "Toscana" },
  { value: "17", label: "Trentino Alto Adige" },
  { value: "18", label: "Umbria" },
  { value: "19", label: "Valle d'Aosta" },
  { value: "20", label: "Veneto" }
];

class AutocompleteExample extends React.Component {
  render() {
    let options = defaultOptions;

    return (
      <FormGroup className="m-3">
        <Autocomplete options={options} placeholder="Regione" />
      </FormGroup>
    );
  }
}

export default AutocompleteExample;
