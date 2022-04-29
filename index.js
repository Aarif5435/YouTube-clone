//AIzaSyDOO7IACQwM3A-YLiiIOuWwXnuXrJVSgAg
//AIzaSyCC_rhQNzU8UqstHXBLZcfJ-RtScrz3RDc
import  nav  from "./componets/nav.js";

let navbar = document.querySelector("#navbar");

navbar.innerHTML = nav();

document.querySelector("#mic").addEventListener("click", micfun);

function micfun() {
  alert("Your mic is not connected");
}

var API = "AIzaSyDOO7IACQwM3A-YLiiIOuWwXnuXrJVSgAg";

Defaultdata();

async function Defaultdata() {
  try {
    // let inp = document.querySelector("#svalue").value;

    // let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=50type=video&videoEmbeddable=true&videoLicense=youtube&key=${API}`

    let url = `https://youtube.googleapis.com/youtube/v3/search?q=india&key=${API}&type=video&maxResults=20&part=snippet`;

    var res = await fetch(url);
    var data = await res.json();
    displayYT(data.items);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
var cont = document.querySelector("#right");
function displayYT(data) {
  cont.innerHTML = "";
  data.map(
    ({
      id: { videoId },
      snippet: {
        thumbnails: {
          default: { url },
        },
      },
      snippet: { title },
      snippet: { channelTitle },
    }) => {
      // console.log(videoId)
      var div = document.createElement("div");
      div.setAttribute("id", "vbox");
      div.addEventListener("click", function () {
        playfullscreen({id: { videoId },snippet: { title },snippet: {
          thumbnails: {
            default: { url },
          },
        }});
      });

      var div0 = document.createElement("div");
      div0.setAttribute("class", "thubline-div");

      var div1 = document.createElement("div");
      div1.setAttribute("class", "profile-div");

      var image = document.createElement("img");
      image.src = url;
      image.setAttribute("class", "profile-img");

      div1.append(image);

      var div2 = document.createElement("div");
      div2.setAttribute("class", "title-div");

      var p = document.createElement("p");
      p.setAttribute("class", "title-p");
      p.innerHTML = title;

      var div3 = document.createElement("div");
      div3.setAttribute("class", "chanel-i-div");

      var p1 = document.createElement("p");
      p1.innerHTML = channelTitle;
      p1.setAttribute("class", "chanel-p");

      // <i class="bi bi-check-circle-fill"></i>

      var i = document.createElement("i");
      i.setAttribute("class", "bi bi-check-circle-fill verification-tic");

      div3.append(p1, i);

      var div4 = document.createElement("div");
      div4.setAttribute("class", "view-day-div");

      var view = Math.round(Math.random() * 10);

      var p2 = document.createElement("p");
      p2.setAttribute("class", "views-p");
      p2.innerHTML = `${view}M views • `;

      var p3 = document.createElement("p");
      p3.setAttribute("class", "day-p");
      p3.innerHTML = ` ${view} days ago`;

      div4.append(p2, p3);

      div2.append(p, div3, div4);

      div0.append(div1, div2);

      let iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.width = "330px";
      iframe.height = "230px";
      //iframe.allowfullscreen = "true";

      iframe.setAttribute("allowfullscreen", true);

      div.append(iframe, div0);

      cont.append(div);
    }
  );
}

// full screen data maping............

var conta = document.querySelector("#right_full");
function playfullscreen({id: { videoId },snippet: { title }
}) {



  document.querySelector(".nav2").style.display = "none";
  document.querySelector(".home-bar").style.display = "none";
  document.querySelector("#right").style.display = "none";
  document.querySelector("#search-right").style.display = "none";
  console.log(videoId);
  cont.innerHTML = "";
  cont2.innerHTML = "";
  
    let div = document.createElement("div");
    div.setAttribute("class", "main2-div");
    

    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = "100%";
    iframe.height = "530px";
    iframe.setAttribute('allowfullscreen','true')
    // iframe.allowfullscreen = true;

    var title_p = document.createElement("p");
    title_p.setAttribute("class", "title-p");
    title_p.innerHTML = title;

    var div1 = document.createElement('div');
    div1.setAttribute('class','view_div_full')

    var view = Math.round(Math.random() * 10);

      var p2 = document.createElement("p");
      p2.setAttribute("class", "views-p");
      p2.innerHTML = `${view}M views • `;

      var p3 = document.createElement("p");
      p3.setAttribute("class", "day-p");
      p3.innerHTML = ` ${view} days ago`;

      var hr = document.createElement('hr');
       hr.setAttribute('id','Hr');


      //  var div2 = document.createElement("div");
      // div1.setAttribute("class", "profile-div");

      // var image = document.createElement("img");
      // image.src = url;
      // image.setAttribute("class", "profile-img_full");

      // div2.append(image);

      div1.append(p2,p3)


    div.append(iframe,title_p,div1,hr);

    conta.append(div);
 
}

//  playfullscreen({id:{videoId},snippet: { title }})


document.querySelector("#search_btn").addEventListener("click", search);

async function search() {
  cont.innerHTML = "";

  try {
    let inp = document.querySelector("#svalue").value;

    let url = `https://youtube.googleapis.com/youtube/v3/search?q=${inp}&key=${API}&type=video&maxResults=20&part=snippet`;

    let res = await fetch(url);
    let sdata = await res.json();
    console.log(sdata);
    displaySearchData(sdata.items);
  } catch (err) {
    console.log("err:", err);
  }
}

var cont2 = document.querySelector("#search-right");

function displaySearchData(data) {
  cont.innerHTML = "";
  cont2.innerHTML = "";
  data.forEach(
    ({
      id: { videoId },
      snippet: {
        thumbnails: {
          default: { url },
        },
      },
      snippet: { title },
      snippet: { channelTitle },
      snippet: { description },
    }) => {
      let div = document.createElement("div");
      div.setAttribute("class", "main-div");
      div.addEventListener("click", function () {
        playfullscreen({id: { videoId },snippet: { title },snippet: {
          thumbnails: {
            default: { url },
          },
        }});
      });

      let div1 = document.createElement("div");
      div1.setAttribute("class", "thumbline-div");

      let p = document.createElement("p");
      p.setAttribute("class", "title-p");
      p.innerHTML = title;

      let view = Math.round(Math.random() * 10);

      let p2 = document.createElement("p");
      p2.setAttribute("class", "views-p");
      p2.innerHTML = `${view}M views • `;

      let div3 = document.createElement("div");
      div3.setAttribute("class", "i-img-p-div");

      let image = document.createElement("img");
      image.src = url;
      image.setAttribute("class", "profile-img2");

      let p1 = document.createElement("p");
      p1.innerHTML = channelTitle;
      p1.setAttribute("class", "chanel-p");

      // <i class="bi bi-check-circle-fill"></i>

      let i = document.createElement("i");
      i.setAttribute("class", "bi bi-check-circle-fill verification-tic");

      let p3 = document.createElement("p");
      p3.setAttribute("class", "description-p");
      p3.innerHTML = description;

      let div2 = document.createElement("div");
      div2.setAttribute("class", "chanelData-div");

      let iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.width = "350px";
      iframe.height = "200px";
      iframe.allowfullscreen = "true";

      div1.append(iframe);

      div3.append(image, p1, i);

      div2.append(p, p2, div3, p3);

      div.append(div1, div2);

      cont2.append(div);
    }
  );
}
