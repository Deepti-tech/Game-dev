function randomDate(start, end) {
    var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function nasaRequest() {
    document.getElementById("alert").style.display="block";
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);

            let title = data["title"];
            let hdurl = data["hdurl"];
            let explanation = data["explanation"];

            document.getElementById("title").innerHTML = title;
            document.getElementById("img").src = hdurl;
            document.getElementById("explaination").innerHTML = explanation;
        }
    }

    let date = randomDate(new Date(2012, 0, 1), new Date());
    let queryUrl = "https://api.nasa.gov/planetary/apod?";
    let queryKey = "api_key=kIrlqTnfuq7gHKLTX6a6Wg3ZXSGkYowq62qUnu5b";
    let queryDate = "&date="+date+"&";
    let queryFull = queryUrl + queryKey + queryDate;

    xmlhttp.open("GET", queryFull, true);
    xmlhttp.send();
    document.getElementById("draggable-elements").style.opacity="0.5"
    document.getElementById("droppable-elements").style.opacity="0.5"
    document.getElementById("instruct").style.opacity="0.5"
    document.getElementById("button").style.opacity="0.5"
    document.getElementById("guide-img").style.opacity="0.5"
}
function closeAlert(){
    document.getElementById("alert").style.display='none';
    document.getElementById("draggable-elements").style.opacity="1";
    document.getElementById("droppable-elements").style.opacity="1";
    document.getElementById("instruct").style.opacity="1";
    document.getElementById("button").style.opacity="1";
    document.getElementById("guide-img").style.opacity="1"
}
