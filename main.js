/*search
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");


inputBox.onekeyup = (e)=>{
  let userData = e.target.value;
  let emptyArray = [];
  if(userData){
    emptyArray = suggestions.filter((data)=>{
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data)=>{
      return data ='<li>'+data+'<li>';
    });
    console.log(emptyArray);
    searchWrapper.classList.add('active');
  }else{

  }
  showSuggestions(emptyArray);
}

function showSuggestions(list){
  let listData;
  if(list.length){

  }
  else{
    listData = list.join('');
  }
}
*/
let suggestions = [
  "Chicken Burger",
  "Chicken Fry",
  "Fried Prawn",
  "Steak Burger",
  "Mixed Fried Rice",
  "Cashewnut Salad",
  "Thai Salad",
  "Prawn Set Menu",
  "B.B.Q. Chicken",
  "Blog",
  "Our Menu",
  "Contact Us",
  "Services",
];

let links = [
  "https://google.com",
  "https://youtube.com",
  "next.html"
];


const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");


inputBox.onkeyup = (e)=>{
  let userData = e.target.value;
  let emptyArray = [];

  if(userData){
    emptyArray = suggestions.filter((data)=>{
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
      
    });
    emptyArray = emptyArray.map((data)=>{
      return data ="<li>" + data + "<li>";
    });
    console.log(emptyArray);
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i=0; i < allList.length; i++){
      allList[i].setAttribute("onclick", "select(this)");
    }
  }else{
    searchWrapper.classList.remove("active");
  }
 
}

function select(element){
  let selectUserData =element.textContent;
  inputBox.value = selectUserData;
}

function showSuggestions(list){
  let listData;
  if(!list.length){
    userValue = inputBox.value;
    listData = '<li>' + userValue + '<li>';
  }
  else{
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}

const icon = document.querySelector(".icon");

icon.addEventListener('click',()=>{
 for (let i=0;i<13;i++){
    if (suggestions[i] == inputBox.value){
       window.open(links[i],'_blank');
    }
  }
});
 
