//please  put your api key 
//https://www.cricapi.com/
const API_KEY="Your API KEY";

//get all upcoming matches


export const getMatches=()=>
{
    const url= `https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
     .then((response)=>response.json())
     .catch((error)=>console.log("ERROR :",error));
};

//load match details 


export const getMatcheDetails=(id)=>{
    const url= `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url).then(response=>response.json()).catch(error=>console.log(error))

}