//1.coMpare two JSON

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

var flag = true;

if (Object.keys(obj1).length == Object.keys(obj2).length) {
  for (key in obj1) {
    if (obj1[key] == obj2[key]) {
      continue;
    } else {
      flag = false;
      break;
    }
  }
} else {
  flag = false;
}
console.log("is object equal" + " " + flag);

//Use the rest countries API url

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",
  true
);
request.send();

//display  all data
request.onload = function () {
  var data = JSON.parse(request.response);
  console.log(data);
};


//2.display all the country flag
request.onload = function () {
  var data = JSON.parse(request.response);
  for (let i = 0; i < 249; i++) {
    console.log(data[i].flag);
  }
};

//3.Use the same rest countries and print all countries name, region, sub region and population
request.onload = function () {
    var data = JSON.parse(request.response);
    for (let i = 0; i < 249; i++) {
      console.log(
        data[i].name,
        data[i].region,
        data[i].subregion,
        data[i].population
      );
    }
  };
