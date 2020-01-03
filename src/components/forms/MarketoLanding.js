import React, { Component } from 'react'
import $ from 'jquery'

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
      MktoForms2.loadForm('//app-sj31.marketo.com', '317-BTU-838', 1015),
        form => {
          form.onSuccess(function() {
            //get the form's jQuery element and hide it
            form.getFormElem().hide()

            $('#confirmform').style.visibility = 'visible'

            //return false to prevent the submission handler from taking the lead to the follow up url.
            return false
          })
        }
    })
  }

  render() {
    return (
      <React.Fragment>
        <form id="mktoForm_1015"></form>
      </React.Fragment>
    )
  }
}

export default MarketoForm
