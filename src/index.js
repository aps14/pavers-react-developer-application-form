import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import axios from "axios";
import Swal from "sweetalert2";


const apiBody = {mode: "formdata", formdata: []}

export default async function formReducer(state = [], action) {
    switch (action.type) {
        case 'submit':
            console.log("in reducer")
            console.log(action.formData)
            apiBody.formdata = action.formData
            await axios.post('https://staging.interview-api.paversdev.co.uk/upload', apiBody.formdata)
                .then(function (response) {
                    console.log(response);
                    Swal.fire(
                        'Form Submitted!',
                        'Your application has been accepted!',
                        'success'
                    )
                })
                .catch(function (error) {
                    console.log(error);
                });
            break;
            default:
                console.log("something went wrong in the reducer")
    }
}

let store = createStore(formReducer)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

