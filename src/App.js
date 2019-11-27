import React from 'react';
import Kursus from './state/state';
import Materi from './props/prop';
import './props/style.css'

function App() {
  return (
    <div className="wraperapp">
        <Kursus/>
        <p>contoh state</p>
        <hr/>
        <Materi img={require('./props/21cineplex.jpg')} des="belajar seo" harga="120000"/>
        <Materi img={require('./props/bpn.jpg')} des="belajar google adword" harga="400000"/>
        <Materi img={require('./props/slider1.jpg')}des="belajar React js" harga="50000"/>
    </div>
  );
}

export default App;
