import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

class Communicator {
  constructor() {
    this.externalProps = undefined;
  }

  setProps(props) {
    this.externalProps = props;
  }

  renderDev() {
    const devRoot = document.querySelector('#root');

    if (devRoot) {
      this.externalProps = {
        idPatient: 23246,
        idMedicalEstablishment: 1,
        language: 'en',
        idConsultations: 999,
      };
      this.render(devRoot);
    }
  }

  renderProd() {
    if (window.TreatmentCommunicatorParent) {
      window.TreatmentCommunicatorParent.setCommunicator(this);
    } else {
      this.renderDev();
    }
  }

  render(container) {
    ReactDOM.render(<AppContainer {...this.externalProps} />, container);
  }
}

const communicator = new Communicator();
communicator.renderDev();
