import React, {useState, useEffect} from 'react';
import axios from 'axios';

const starWarsData = () => {
    return axios.get('https://swapi.dev/api/people')
        .then(({data}) => {
            // console.log(res.data.results);
            console.log(data);
            // setCharacters(res.data.results)
            // return JSON.stringify(data, null, 2);
            return data;
        })
        .catch((err) => {
            console.log(err);
    },[])
}



const StarPeople = (props) => {

    const [characterInfo, setCharacterInfo] = useState([])
    const [characterJson, setCharacterJson] = useState("")

    useEffect(() => {
        starWarsData().then ( userData =>{
            // setCharacterJson(userDate)
            setCharacterJson(JSON.stringify(userData, null, 2))
            setCharacterInfo(userData.results)
        })   
    },[])



    return (
        <div>
            <h1>Star Wars!</h1>
            {characterInfo.map((characterInfo, index) => (
                <p key={index} >{people.results}</p>
            ))}
            <p>{characterJson}</p>
        </div>
  
    )


//     const [characters, setCharacters] = useState([])
//     const [characterJson, setCharacterJson] = useState("")

// useEffect(() => {
//     axios.get('https://swapi.dev/api/people')
//         .then(({data}) => {
//             // console.log(res.data.results);
//             console.log(data);
//             // setCharacters(res.data.results)
//             setCharacters(JSON.stringify(data))
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// },[])



//     return (
//         <div>
//             <h1>Star Wars!</h1>
//             {characters.map((people, index) => (
//                 <p key={index} >{people.results}</p>
//             ))}
            
//         </div>
  
//     )
}

export default StarPeople;
