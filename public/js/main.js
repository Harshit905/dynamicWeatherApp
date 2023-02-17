const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const data_hide=document.querySelector('.middle_layer');
// console.log(cityName);
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const getInfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value;
    // console.log(cityVal);
    if (cityVal == "") {
        city_name.innerText = 'Plz Write the name before search';
        data_hide.classList.add('data_hide')
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=74741b23f8d8a495a8ba58464cc05877`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            // const tempMood = "Clear";

            //condition to check sunny or cloud
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {

                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";

            } else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            data_hide.classList.remove('data_hide');
            cityName.value="";
        }
        catch {
            city_name.innerText = 'Plz Enter the city Name Properly';
            data_hide.classList.add('data_hide')
        }
    }
}
submitBtn.addEventListener('click', getInfo);
