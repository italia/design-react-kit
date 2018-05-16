import React from "react";
import PropTypes from "prop-types";

const Welcome = props => (
  <article className="m-3">
    <h1>
      Benvenuto su <code>design-react-kit</code>
    </h1>
    <p>Questo è uno showcase dei componenti UI presenti nella libreria.</p>
    <p>
      Il sorgente è presente nella directory <code>stories</code> del progetto.
      <br />
      Una <code>story</code> è un singolo stato di uno o più componenti UI.
      <br />
      (In pratica una <code>story</code> è come un visual test case.)
    </p>
  </article>
);

Welcome.propTypes = {
  showApp: PropTypes.func,
  showKind: PropTypes.string,
  showStory: PropTypes.string
};
Welcome.defaultProps = {
  showApp: null,
  showKind: null,
  showStory: null
};

export { Welcome as default };
