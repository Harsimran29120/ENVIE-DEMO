import { useScrollTop } from '@/hooks';
import PropType from 'prop-types';
import React from 'react';

const PageNotFound = ({ history }) => {
  useScrollTop();

  return (
    <div className="page-not-found">
      <h1>:( La pagina che stai cercando non esiste</h1>
      <br />
      <button
        className="button"
        onClick={history.goBack}
        type="button"
      >
        Ritorna indietro
      </button>
    </div>
  );
};

PageNotFound.propTypes = {
  history: PropType.shape({
    goBack: PropType.func
  }).isRequired
};

export default PageNotFound;
