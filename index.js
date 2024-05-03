/**
 * 1.  unenq 2 button ev input dasht
 *
 *    butonner@ klinen add text, clear
 *
 *    input dashtum grum en cankacac erkarutyamb teqstain artahaytutyun
 *
 *   add text buttoni vra click aneluc
 *  1. stugel ardyoq teqst ka grac te che
 *  2. stugel ardyoq teqsti erkarutyuN@ chi gerazangum 20 simvol@
 *  errorneri depqum input dasht@ cuyc tal karmir borderov
 * 
 *   ete bavararec paymannerin inch vor  h3 tegi mej cuyc tal ayd mutqagrvac teqst@
 *   add aneluc heto input dashtum grvac teqst@ jnjel
 *
 *
 * clear buttoni vra click aneluc h3 tegum grvac teqst@ maqrel
 * 
 * 
 * 
 * 
 * 
 * 
 * 2.  unenq 3 button ev 3 <p> teger
 * 
 *    iravichak@ hetevyaln e ayd 3 <p> tegeric mek@ hasaneli e html tiruytum (mnacac@ display none vichakum en)
 *     dran hamaoatasxan ayd 3 buttonneric mek@ active vichakum e 
 * 
 *    xndir@ hetevyaln e amen button kapvac e iren hamaoatasxan p tegi het @st ir dasavorvacutyamb
 * 
 *    buttoni vra click aneluc tvyal buttonin sarqel active ev  tvyal buttonin hamapatasxan <p> teg@ cuyc tal
 * 
 * 
 * 
 * 3.  usumnasirel setattribute  ev  dataset object@ ev irenc kirarutyun@ 
 * 
 * 
 * 
 * grel funkcia vor@ argumentov kstana teqstain artahayutyun
 * katarel hetevyal stugman paymanner@ 
 * 1. stugel ardyoq datarkq e te voch, error message - duq petq e mutqagreq arjeq 
 * 2. stugel ardyoq sumbolneri qanak@ chi gerezancum 20@ error message - simbolneri qanak@ gerazancum e 20@
 * 
 * erroneri depqum kveradardzni hamapatasxan worning artyahayutyun@ 
 * 
 * 
 * 
 * 
 * ev kveradardzni mer mutqagrvac teqst@ ete chka worningner
 * 
 * 
 * 
 
**/ 


// Task 1

// const add = document.getElementsByClassName('add')[0]
// const remove = document.getElementsByClassName('remove')[0]
// const input = document.getElementsByClassName('input')[0]
// const showMe = document.getElementsByClassName('show-me')[0]

// add.addEventListener('click', function(){
//    if(validation()){
//     showMe.innerHTML = input.value
//     input.value = ''
//    }
        
    
// })

// function validation(){
//     let isValidate = true
//     input.classList.remove('error')

//     if(!input.value.trim().length){
//         isValidate = false
//         input.classList.add('error')
//     }

//     if(input.value && input.value.trim().length > 20){
//         isValidate = false
//         input.classList.add('error')
//     }
        
//     return isValidate
// }

// remove.addEventListener('click', function(){
//     showMe.innerHTML = ''

// })





// Task 2 ??

// const button1 = document.getElementsByClassName('button1')[0]
// const button2 = document.getElementsByClassName('button2')[0]
// const button3 = document.getElementsByClassName('button3')[0]
// const reset = document.getElementsByClassName('reset')[0]

// const show1 = document.getElementsByClassName('show1')[0]
// const show2 = document.getElementsByClassName('show2')[0]
// const show3 = document.getElementsByClassName('show3')[0]

// button1.addEventListener('click', function(){
//     button2.disabled = true
//     button3.disabled = true
//     show1.innerHTML = 'button1 is clicked'
//     show2.style.display = 'none'
//     show3.style.display = 'none'
// })

// button2.addEventListener('click', function(){
//     button1.disabled = true
//     button3.disabled = true
//     show2.innerHTML = 'button2 is clicked'
//     show1.style.display = 'none'
//     show3.style.display = 'none'
// })

// button3.addEventListener('click', function(){
//     button2.disabled = true
//     button1.disabled = true
//     show3.innerHTML = 'button3 is clicked'
//     show1.style.display = 'none'
//     show2.style.display = 'none'
// })

// reset.addEventListener('click', function(){
//     window.location.reload();
// })



// TAsk 3/1

// let text = 'lklklk'
// function foo(){
//     if(text.length > 20){
//         console.log('mutqagreq chisht qanaki simvolner');
//     }
//     if(!text){
//         console.log('mutqagreq arjeq');
//     }
//     if(text){
//         console.log(text);
//     }
// }
// foo(text)

// Task 3/2


// function foo(text){
//     if(text.length > 20){
//         return 'mutqagreq chisht qanaki simvolner'
//     }
//     if(!text){
//         return 'mutqagreq arjeq'
//     }
//     if(text.length <= 20){
//        return `${text}`
//     }

// }
// let text = 'hghghghg'
// let result = text
// console.log(result);



// Task 1

// const add = document.getElementsByClassName('add')[0]
// const remove = document.getElementsByClassName('remove')[0]
// const input = document.getElementsByClassName('input')[0]
// const show = document.getElementsByClassName('show-me')[0]

// add.addEventListener('click', function(){
//     if(validation()){
//         show.innerHTML = input.value
//         input.value = ''
//     }
// })

// function validation(){
//     let isValidate = true
//     input.classList.remove('error')
//     if(input.value.trim().length > 20){
//         isValidate = false
//         input.classList.add('error')
//         console.log('mutqagreq 20 pakas simvolner');
//     }
//     if(input.value.trim().length < 3){
//         isValidate = false
//         input.classList.add('error')
//         console.log('mutqagreq 3 avel simvolner');
//     }
//     if(!input.value.trim()){
//         isValidate = false
//         input.classList.add('error')
//         console.log('xndrum em mutqagreq arjeq');
//     }
//     return isValidate
// }

// remove.addEventListener('click', function(){
//     show.innerHTML = ''
// })








