

const body=document.querySelector('body')

const url = 'https://api.thecatapi.com/v1/breeds'
const cardWrapper=document.querySelector('.card-wrapper')
const catsApi=()=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayCats(data))
}
const displayCats=cats=>{
    const catsHtml=cats.slice(0,12).map(cat=>getCats(cat))
}
const getCats=(cat)=>{
    const card=document.createElement('div')
    card.classList.add('card')
    card.innerHTML=`
    <div>
    <h1 class="name cat-info">Cat's name: ${cat.name}</h1>
    <p class="id cat-info">    <span class="text">ID:</span>
        ${cat.id}</p>
    <p class="id cat-info">    <span class="text">Temperament:</span>
    <p class="  temperament cat-info">
    <span class="text">Temperament:</span>  ${cat.temperament}</p>
    <p class="weight cat-info">   <span class="text">Weight-imperial:</span>
     ${cat.weight.imperial}</p>
    <p class="weight cat-info"> <span class="text">Weight-metric::</span>
     ${cat.weight.metric}</p>

    `
    const dark=document.querySelector('.dark-mode')
const light=document.querySelector('.light-mode')
    cardWrapper.appendChild(card)
    dark.addEventListener('click',function(){
        body.style.backgroundColor='#000'
        card.style.backgroundColor='#000'
        card.style.color='#fff'
        card.style.border='1px solid white'
light.style.color='#fff'
light.style.border='1px solid white'
    })
    light.addEventListener('click',function(){
        body.style.backgroundColor='#fff'
        card.style.backgroundColor='beige'
        card.style.color='#23005c'
        card.style.border='1px solid #23005c'
        light.style.color='#000'
light.style.border='1px solid black'
    })
}
catsApi()

