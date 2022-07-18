document.addEventListener('DOMContentLoaded', ()=>{
function fetchData() {
  fetch('http://localhost/filterdata.json')
  .then( response => response.json() )
  .then( data => searchdom(data) )
}

function searchdom (data) {
  const pd_maincont = document.querySelector('.conBlog1');
  const maincont = document.querySelector('.conBlog2');
  if(data.length > 0){
   for (let i=0; i<data.length; i++) {
    //creating element for search results
    // const cont_child = document.createElement('div');
    // const divtext = document.createElement('div');
    // const a_h1 = document.createElement('a');
    // const h1 = document.createElement('h1');
    // const a_p = document.createElement('a');
    // const p = document.createElement('p');
    // const divbtn = document.createElement('div');
    // const a_readmore = document.createElement('a');
    const blogDiv1 = document.createElement('div');
    const spn1 = document.createElement('span');
    const a1 = document.createElement('a');
    const blogDiv2 = document.createElement('div');
    const a2 = document.createElement('a');

    // a_h1.innerHTML = data[i].title;
    // a_readmore.innerHTML = "Read more..";
    // h1.innerHTML = "$1000";
    // p.innerHTML = "You really don’t want to get spendy on silver or gold fill wire until you figure out what you’re doing. Copper wire or other base metal wire will help you get a feel.";
    spn1.innerHTML = data[i].date;
    a1.innerHTML = data[i].title;
    a2.innerHTML = "Read more.."

    //adding classes to element that we created
    // cont_child.className = 'cont-child';
    // divtext.className = 'text';
    // a_h1.href = data[i].title;
    // h1.className = 'tit';
    // divbtn.className = 'buy-btn';
    // a_readmore.href = "/" + data[i].title;
    blogDiv1.className = 'blogDet';
    spn1.className = 'blogDate';
    a1.className = 'blogTitle';
    a1.href = "/" + data[i].url;
    blogDiv2.className = 'buy-btn';
    a2.href = "/" + data[i].url;


    //append created element to main container or it's actual container
    // a_h1.append(h1);
    // divbtn.append(a_readmore);
    // divtext.append(a_h1, a_p, divbtn);
    // cont_child.append(divtext);
    maincont.append(blogDiv1);
    blogDiv1.append(spn1);
    blogDiv1.append(a1);
    blogDiv1.append(blogDiv2);
    blogDiv2.append(a2);
   }
  }
  else{
    let msg = document.createElement('h1');
    msg.className = 'no-result';
    msg.innerHTML = data.length + " Results Found";
    maincont.append(msg);
  }
}
fetchData();
})

//for nav toggler functionality
    //Hamburger menu 
const navslide = () =>{
      const hamburger = document.querySelector('.hamburger-menu');
      const nav = document.querySelector('.nav-ul');
      const nav_li = document.querySelectorAll('.nav-ul li');
  
      //onclick ham show navbar
      hamburger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');  
  
        //animate nav links
        nav_li.forEach((items, index)  =>{
          if(items.style.animation){
            items.style.animation = '';
          }
          else{

            items.style.animation = `nav-ul-fade 0.5s ease forwards ${index / 10 + 0}s`;
          }
        });
  
        hamburger.classList.toggle('toggle')
      })
    } 
navslide();

// paybtn logic
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const phone_no = document.querySelector("#phone_no");
const savebtn = document.querySelector("[type=submit]");
const paybtn = document.querySelector(".o_prc");

if(username.value != "" && username.value != "undefined" || email.value != "" && email.value != "undefined" || address.value != "" && address.value != "undefined" || phone_no.value != "" &&  phone_no.value != "undefined"){
  savebtn.removeAttribute("disabled")
  savebtn.classList.remove("dis")
}
savebtn.addEventListener("click", (e) => {
  paybtn.removeAttribute("disabled");
});

//Add event listener on newsletter form submit button
const news_button = document.querySelector('#newsletter2');
news_button.addEventListener('click', ()=> {
    alert("Newsletter saved")
});