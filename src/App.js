import ApplicantForm from './Components/ApplicantForm'

function App() {
  return (
    <div>
        <div style={{height: '150px', display: 'block'}}>
            <img style={{float: 'left',marginTop: '30px', marginLeft: '40px'}} src="paversLogo.png" alt="Pavers Logo"/>
        </div>
        <div style={{backgroundColor: 'white',maxWidth: '50%',margin: 'auto'}}>
            <ApplicantForm />
        </div>
    </div>
  );
}

export default App;
