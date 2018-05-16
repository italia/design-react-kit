import React from "react";

import { FormGroup, InputGroup, Label, Select } from "../../src";

const defaultOptions = [
  { value: "option-1", label: "Opzione 1" },
  { value: "option-2", label: "Opzione 2" },
  { value: "option-3", label: "Opzione 3" }
];

const iconOptions = [
  { value: "video-1", label: "Video 1" },
  { value: "video-2", label: "Video 2" },
  { value: "video-3", label: "Video 3" }
];

const multiOptions = [
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

export const groupOneOptions = [
  { value: "option-1", label: "Opzione 1" },
  { value: "option-2", label: "Opzione 2" }
];

export const groupTwoOptions = [
  { value: "option-3", label: "Opzione 3" },
  { value: "option-4", label: "Opzione 4" }
];

export const groupedOptions = [
  {
    label: "Gruppo 1",
    options: groupOneOptions
  },
  {
    label: "Gruppo 2",
    options: groupTwoOptions
  }
];

class SelectExample extends React.Component {
  render() {
    const { multi, search, group, icon } = this.props;
    let options = defaultOptions;
    if (multi || search) {
      options = multiOptions;
    } else if (group) {
      options = groupedOptions;
    } else if (icon) {
      options = iconOptions;
    }

    return (
      <FormGroup className="m-3">
        {(() => {
          if (icon) {
            return <i className="ico-prefix it-youtube" />;
          }
        })()}
        <Select
          options={options}
          placeholder={
            multi ? "Seleziona una o più regioni" : "Seleziona una opzione"
          }
          isSearchable={search}
          isMulti={multi}
          searchPlaceholder="Cerca una regione"
        />
        <Label>Label di esempio</Label>
      </FormGroup>
    );
  }
}

export default SelectExample;
