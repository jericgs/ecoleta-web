import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const Alert = () => {
  const history = useHistory();

  function redirect() {
    history.push('/');
  }

  function delay() {
    setTimeout(redirect, 3000);
  }

  return (
    <div id="page-alert">
      <span>
        <FiCheckCircle />
      </span>
      <h1>Cadastro concluido!</h1>
      {delay()}
    </div>
  );
};

export default Alert;
