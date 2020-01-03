import React, { Component } from 'react'

class MarketoForm extends Component {
  /**
   * need to inject
   */
  componentDidMount() {
    const script = document.createElement('script')

    script.src = '//app-sj31.marketo.com/js/forms2/js/forms2.min.js'
    // script.async = true;

    document.body.appendChild(script)

    script.addEventListener('load', () => {
      // eslint-disable-next-line no-undef
      MktoForms2.loadForm('//app-sj31.marketo.com', '317-BTU-838', 1010)
    })
  }

  render() {
    return (
      <React.Fragment>
        <form id="mktoForm_1010"></form>
      </React.Fragment>
    )
  }
}

export default MarketoForm
