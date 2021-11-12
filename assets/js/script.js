class Multimedia{
    constructor(url){
        this.url = url
    }
    get getUrl(){
        return this.url
    }
    setInicio(){

    }
}
class Reproductor extends Multimedia{
    constructor(url,id){
        super(url)
        this.id = id
    }
    get getId(){
        return this.id;
    }
    playMultimedia(){
        iffe.mostrarIframe(this.url,this.id)
    }
    setInicio(tiempo){
        iffe.agregarInicio(this.url, this.id, tiempo)
    }
}
//intanciando


const iffe = (() => {
    return {
        mostrarIframe(url,iframe){
            iframe.setAttribute('src',url)
        },
        agregarInicio(url,iframe,tiempo){
            iframe.setAttribute('src' , `${url}?start=${tiempo}`)
        }
    }
})();
const iframeM = document.querySelector("#musica")
const musica1 = new Reproductor ("https://www.youtube.com/embed/WqWlGr10t-g" , iframeM)
// musica1.setInicio(5)
musica1.playMultimedia()


// const iframeP = document.querySelector("#peliculas")
const pelicula1 = new Reproductor ("https://www.youtube.com/embed/v1EkoQV4g5c" , document.querySelector("#peliculas"))
pelicula1.setInicio(15)

const iframeS = document.querySelector("#series")
const serie1 = new Reproductor ("https://www.youtube.com/embed/s_mVlR6N5q8" , iframeS)
serie1.setInicio(54)