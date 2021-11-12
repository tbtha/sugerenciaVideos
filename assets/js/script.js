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
const iframeM = document.querySelector("#musica")
const musica1 = new Reproductor ("https://www.youtube.com/embed/M1N_wbhAfQ4" , iframeM)

const iffe = (() => {
    return {
        mostrarIframe(url,iframe){
            iframe.setAttribute('scr',url)
        },
        agregarInicio(url,iframe,tiempo){
            iframe.setAttribute('src' , `${url}?start=${tiempo}`)
        }
    }
})();

musica1.setInicio(1)

