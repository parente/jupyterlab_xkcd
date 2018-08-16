import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab_xkcd extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_xkcd',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_xkcd is activated!');
  }
};

export default extension;
