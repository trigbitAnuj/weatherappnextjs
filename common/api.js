export const  getCurrentWeatherData = async (city) => {
   
  try{
    let response = await fetch(`api/weather?city=${city}`)
    return response.json();
}
catch(error){
  console.log(error);

}
   
  };