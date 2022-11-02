let i = 0
let array=[]
const log = (...something)=>{
    console.log(...something)
}
const loadData = async ()=>{
    try {
        const res = await fetch('api.json')
         const data = await res.json()
         loaded(data)
    } catch (error) {
        log(error)
    }
}
const answer = async(e)=>{
     let press = e.target.value
     const res = await fetch('api.json')
         const data = await res.json()
         log(press)
    if(press == data[i-1].answerCorrect){
        log("es lo mismo")
    }else{
        log("no es")
    }
}
const loaded = (data)=>{
    document.querySelector(".Millonaire").innerHTML = randomQuestion(data)
    i++
    const buttons = document.querySelectorAll(".button")
    buttons.forEach(element => element.addEventListener("click",answer));
}
/* document.querySelector(".ejecutar").addEventListener("click",()=>{
   
}) */
const randomQuestion=(data)=>{
    const number = Math.floor(Math.random() * 3)
    if(number == 0){
        return ` <div class="millonario">
        <h2>${data[i].question}</h2>
            <div class="millonario__item">
              <div class="opciones">
                <div class="opciones__item">
                  <button id="a" class="button fondoA" value="${data[i].answerCorrect}"><span class="amarillo">A:</span>${data[i].answerCorrect}</button>
                </div>
          
                <div class="opciones__item">
                  <button id="b" class="button fondoB" value="${data[i].answer1}"><span class="amarillo">B:</span>${data[i].answer1}</button>
                </div>
              </div>
            </div>
            <div class="millonario__item">
              <div class="opciones">
                <div class="opciones__item">
                  <button id="c" class="button fondoA" value="${data[i].answer2}"><span class="amarillo">C:</span>${data[i].answer2}</button>
                </div>
                
                <div class="opciones__item">
                  <button id="d" class="button fondoB" value="${data[i].answer3}"><span class="amarillo">D:</span>${data[i].answer3}</button>
                </div>
              </div>
            </div>
          </div> `
    }
    if(number == 1){
        return ` <div class="millonario">
        <h2>${data[i].question}</h2>
            <div class="millonario__item">
              <div class="opciones">
                <div class="opciones__item">
                  <button id="a" class="button fondoA" value="${data[i].answer1}"><span class="amarillo">A:</span>${data[i].answer1}</button>
                </div>
          
                <div class="opciones__item">
                  <button id="b" class="button fondoB" value="${data[i].answerCorrect}"><span class="amarillo">B:</span>${data[i].answerCorrect}</button>
                </div>
              </div>
            </div>
            <div class="millonario__item">
              <div class="opciones">
                <div class="opciones__item">
                  <button id="c" class="button fondoA" value="${data[i].answer3}"><span class="amarillo">C:</span>${data[i].answer3}</button>
                </div>
                
                <div class="opciones__item">
                  <button id="d" class="button fondoB" value="${data[i].answer2}"><span class="amarillo">D:</span>${data[i].answer2}</button>
                </div>
              </div>
            </div>
          </div> `
    }
    if(number == 2){
        return ` <div class="millonario">
        <h2>${data[i].question}</h2>
            <div class="millonario__item">
              <div class="opciones">
                <div class="opciones__item">
                  <button id="a" class="button fondoA" value="${data[i].answer2}"><span class="amarillo">A:</span>${data[i].answer2}</button>
                </div>
          
                <div class="opciones__item">
                  <button id="b" class="button fondoB" value="${data[i].answer3}"><span class="amarillo">B:</span>${data[i].answer3}</button>
                </div>
              </div>
            </div>
            <div class="millonario__item">
              <div class="opciones">
                <div class="opciones__item">
                  <button id="c" class="button fondoA" value="${data[i].answerCorrect}"><span class="amarillo">C:</span>${data[i].answerCorrect}</button>
                </div>
                
                <div class="opciones__item">
                  <button id="d" class="button fondoB" value="${data[i].answer1}"><span class="amarillo">D:</span>${data[i].answer1}</button>
                </div>
              </div>
            </div>
          </div> `
    }
    if(number == 3){
        return ` <div class="millonario">
        <h2>${data[i].question}</h2>
            <div class="millonario__item">
              <div class="opciones">
                <div class="opciones__item">
                  <button id="a" class="button fondoA" value="${data[i].answer3}"><span class="amarillo">A:</span>${data[i].answer3}</button>
                </div>
          
                <div class="opciones__item">
                  <button id="b" class="button fondoB" value="${data[i].answer1}"><span class="amarillo">B:</span>${data[i].answer1}</button>
                </div>
              </div>
            </div>
            <div class="millonario__item">
              <div class="opciones">
                <div class="opciones__item">
                  <button id="c" class="button fondoA" value="${data[i].answer2}"><span class="amarillo">C:</span>${data[i].answer2}</button>
                </div>
                
                <div class="opciones__item">
                  <button id="d" class="button fondoB" value="${data[i].answerCorrect}"><span class="amarillo">D:</span>${data[i].answerCorrect}</button>
                </div>
              </div>
            </div>
          </div> `
    }
}
document.querySelector(".title").addEventListener("click", loadData)