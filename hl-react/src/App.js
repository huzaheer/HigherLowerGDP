import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Cta" style={{width: 1440, height: 1410, position: 'relative', background: 'white'}}>
      <div className="HeroSideImageRight" style={{width: 1440, height: 700, left: 0, top: 710, position: 'absolute'}}>
        <div className="Background" style={{width: 1440, height: 700, left: 0, top: 0, position: 'absolute', background: '#F1F2FE'}} />
        <div className="Content" style={{width: 399, height: 197, left: 259, top: 220, position: 'absolute'}}>
          <div className="Title" style={{width: 399, left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 56, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Let’s test your geopolitical knowledge</div>
        </div>
      </div>
      <button className="ButtonPrimary" style={{width: 270, height: 110, left: 868, top: 891, position: 'absolute', background: '#832BAB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, overflow: 'hidden'}}>
        <div className="Background" style={{width: 270, height: 110, left: 0, top: 0, position: 'absolute', background: '#3E1452', borderRadius: 5}} />
        <div className="Text" style={{width: 221, left: 25, top: 42, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Ropa Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>By GDP</div>
      </button>
      <div className="ButtonPrimary" style={{width: 265, height: 110, left: 870, top: 1069, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, overflow: 'hidden'}}>
        <div className="Background" style={{width: 265, height: 110, left: 0, top: 0, position: 'absolute', background: '#EDB6C7', borderRadius: 5}} />
        <div className="Text" style={{width: 216, left: 25, top: 42, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Ropa Sans', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>By GDP Per Capita</div>
      </div>
      <div className="Frame1" style={{width: 1440, height: 710, left: 0, top: 0, position: 'absolute'}} />
    </div>
  );
}

export default App;
