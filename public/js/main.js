const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById('city_name');
const temp_real_value = document.getElementById('temp_real_value');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer')


const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    

    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9536456c86e99a0c5155ff4f93fc724d`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            // console.log(arrData);
            // console.log("Data is " + arrData[0].main.temp);
            // console.log("Data is " + arrData[0].weather[0].main);


            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;


            temp_real_value.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color: #eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style = 'color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Plz write proper name before search`;
            datahide.classList.add('data_hide');
        }
        
    }
    
}

submitBtn.addEventListener('click', getInfo)





/* const getInfo = async(event) =>{
    event.preventDefault();
    let cityval = cityName.value;
    console.log(cityval)
    if(cityval === ""){
        city_name.innerText = `Plz write the name before search`;
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=pune&appid=9536456c86e99a0c5155ff4f93fc724d`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            // console.log(arrData);
            city_name.innerText = `${arrData[0].name}, ${arrdata[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            // console.log(arrData[0].main.temp);
            // console.log(arrData[0].weather[0].main);


            // const tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color: #eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style = 'color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color: #f1f2f6;'></i>";
            }

        }catch{
            city_name.innerText = `Plz enter correct name.`;
        }
    }
} */