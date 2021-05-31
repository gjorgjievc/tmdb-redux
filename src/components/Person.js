import React from 'react';
import './Person.css';

const Person = ({ somebody }) => {
    console.log(somebody.character)
    return(
        <div className="personCard">
            {somebody.profile_path 
                ? <div>
                    <img className="personProfile" src={`https://image.tmdb.org/t/p/w264_and_h264_bestv2${somebody.profile_path}`} alt={somebody.name}/>
                    <div className="personName"><p>{somebody.name} </p></div>
                  </div>
                : <div className="noProfilePic">{somebody.name}</div>
            }
        
        </div>
    )
}
export default Person;