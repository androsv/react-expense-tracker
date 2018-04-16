import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props)=>{

    return (
        <div>
        <h1>Info</h1>
        <p>this is the info : {props.info}</p>
        </div>
    );

}

const withAdminWarnings = (WrappedComponent)=>{
    return (props)=>{
        
        return(

            <div>
            <h1>secret Info</h1>
            <WrappedComponent {...props} />
            </div>
        
        );

    }
}

const AdminInfo = withAdminWarnings(Info);

ReactDOM.render(<AdminInfo info='asd'/>,document.getElementById('app-root'));
