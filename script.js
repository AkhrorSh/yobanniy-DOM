const deepPurple = document.querySelector('.deep-purple')
const gold = document.querySelector('.gold')
const silver = document.querySelector('.silver')
const spaceBlack = document.querySelector('.space-black')
const img = document.querySelector('.a')

deepPurple.onclick= () => {
    img.setAttribute('src','./img/deep-purple-1.jpg')
}
silver.onclick= () => {
    img.setAttribute('src','./img/silver-1.jpg')
}
spaceBlack.onclick= () => {
    img.setAttribute('src','./img/space-black-1.jpg')
}
gold.onclick= () => {
    img.setAttribute('src','./img/gold-1.jpg')
}



