import React,{Component} from 'react';
import './style.css';

const Materi = (props) => {
    return(
        <div className="wrappper">
            <div className="content">
                <div className="gambarpaket">
                   <img className="imagesliderr" src={props.img}/>
                </div>
                <p className="des">{props.des}</p>
    <p className="harga">{props.harga}</p>
            </div>
        </div>
    )
}


export default Materi;