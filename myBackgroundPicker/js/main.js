document.querySelector('#guitar').addEventListener('click', rock)
document.querySelector('#keyboard').addEventListener('click', code)
document.querySelector('#superSoaker').addEventListener('click', john)
document.querySelector('#flair').addEventListener('click', rick)
document.querySelector('#walt').addEventListener('click', tuco)
document.querySelector('#ferris').addEventListener('click', bueller)

function rock() {
    document.querySelector('body').style.backgroundImage = "url('./img/parkwayDrive2.jpeg')"
    document.getElementById("sweat").style.visibility = "hidden";
    document.getElementById('parkway').pause()
    document.getElementById('halo').pause()
    document.getElementById('leon').pause()
    document.getElementById('bjj').pause()
    document.getElementById('jesse').pause()
    document.getElementById('day').pause()
    document.getElementById('parkway').play()
} 
function code() {
    document.querySelector('body').style.backgroundImage = "url('./img/javascriptcopy.png')"
    document.getElementById("sweat").style.visibility = "hidden";
    document.getElementById('parkway').pause()
    document.getElementById('halo').pause()
    document.getElementById('leon').pause()
    document.getElementById('bjj').pause()
    document.getElementById('jesse').pause()
    document.getElementById('day').pause()
    document.getElementById('leon').play()
}
function john() {
    document.querySelector('body').style.backgroundImage = "url('./img/MasterChief.jpeg')"
    document.getElementById('sweat').style.visibility = 'hidden'
    document.getElementById('parkway').pause()
    document.getElementById('halo').pause()
    document.getElementById('leon').pause()
    document.getElementById('bjj').pause()
    document.getElementById('jesse').pause()
    document.getElementById('day').pause()
    document.getElementById('halo').play()
}
function rick() {
    document.querySelector('body').style.backgroundImage = "url('./img/bjj.jpeg')"
    document.getElementById('sweat').style.visibility = 'hidden'
    document.getElementById('parkway').pause()
    document.getElementById('halo').pause()
    document.getElementById('leon').pause()
    document.getElementById('bjj').pause()
    document.getElementById('jesse').pause()
    document.getElementById('day').pause()
    document.getElementById('bjj').play()
}
function tuco(){
    document.querySelector('body').style.backgroundImage = "url('./img/breaking-bad-heisenberg-walter-white-bryan-cranston-wallpaper-preview.jpeg')"
    document.getElementById('sweat').style.visibility = 'hidden'
    document.getElementById('parkway').pause()
    document.getElementById('halo').pause()
    document.getElementById('leon').pause()
    document.getElementById('bjj').pause()
    document.getElementById('jesse').pause()
    document.getElementById('day').pause()
    document.getElementById('jesse').play()
}
function bueller(){
    document.querySelector('body').style.backgroundImage = "url('./img/ferris_bueller_on_parade_float3-e1463597408668.webp')"
    document.getElementById('sweat').style.visibility = 'hidden'
    document.getElementById('parkway').pause()
    document.getElementById('halo').pause()
    document.getElementById('leon').pause()
    document.getElementById('bjj').pause()
    document.getElementById('jesse').pause()
    document.getElementById('day').pause()
    document.getElementById('day').play()
}
