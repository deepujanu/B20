var request =  new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function()
{
  var countrydata = JSON.parse(this.response)
  console.log(countrydata)

    let Asiacountries = countrydata.filter((currentvalue)=>{
      return currentvalue.region="Asia";
    })
    console.log(Asiacountries);
    let population = countrydata.filter((currentvalue)=>{
      return currentvalue.population<200000;
    })
    console.log(population);
    let total =  countrydata.reduce((acc,currentvalue)=>{ 
      return acc + currentvalue.population},0)
      console.log(total);
  
    let Dollars = countrydata.filter((currentvalue)=>{
      return currentvalue.currency = "US Dollars";
    })
    console.log(Dollars);
}
