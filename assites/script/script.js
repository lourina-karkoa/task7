// task1

const image1 = document.querySelector('.img1-father1')
image1.addEventListener('click', ()=>{
    const container = document.querySelector('.Box')
    container.style.backgroundColor = '#886257';
})
const imag1 = document.querySelector('.img1-father2')
imag1.addEventListener('click', ()=>{
    const container = document.querySelector('.Box')
    container.style.backgroundColor = 'red';
})
const imag2 = document.querySelector('.img2-father2')
imag2.addEventListener('click', ()=>{
    const container = document.querySelector('.Box')
    container.style.backgroundColor = '#909cac';
})
const imag3 = document.querySelector('.img3-father2')
imag3.addEventListener('click', ()=>{
    const container = document.querySelector('.Box')
    container.style.backgroundColor = '#6a6f82';
})
const imag4 = document.querySelector('.img4-father2')
imag4.addEventListener('click', ()=>{
    const container = document.querySelector('.Box')
    container.style.backgroundColor = '#c2c3c2';
})
const imag5 = document.querySelector('.img5-father2')
imag5.addEventListener('click', ()=>{
    const container = document.querySelector('.Box')
    container.style.backgroundColor = '#cdb9c0';
})



// task 2
const Moon = document.querySelector('.moon')
Moon.addEventListener('click',()=>{
    const newColor = document.querySelector('.task2-son1')
    newColor.classList.replace('task2-son1' ,'newClass')
})
const Sun = document.querySelector('.sun')
Sun.addEventListener('click',()=>{
    const newColor = document.querySelector('.newClass')
    newColor.classList.replace('newClass' ,'task2-son1')
})

// task 3
const show1 = document.querySelector('.ocordione1')
show1.addEventListener('click', ()=>{
    const addthings1 = document.querySelector('.task2-list1')
    addthings1.classList.replace('task2-list1','task3-list')
})

const show2 = document.querySelector('.ocordione2')
show2.addEventListener('click', ()=>{
    const addthings2 = document.querySelector('.task2-list2')
    addthings2.classList.replace('task2-list2','task3-list')
})
const show3 = document.querySelector('.ocordione3')
show3.addEventListener('click', ()=>{
    const addthings3 = document.querySelector('.task2-list3')
    addthings3.classList.replace('task2-list3','task3-list')
})

// task4 
const head4 =document.querySelector(".task4-head2");

const star1 = document.querySelector('.star1')
star1.addEventListener('click', ()=>{
    const addcolor = document.querySelector('.star1')
    addcolor.classList.replace('star1','star')

    head4.innerHTML=("it's very bad");
} )
const star2 = document.querySelector('.star2')
star2.addEventListener('click', ()=>{
    const addcolor2 = document.querySelector('.star2')
    addcolor2.classList.replace('star2','star')
    head4.innerHTML=("it's bad");
    const addcolor = document.querySelector('.star1')
    addcolor.classList.replace('star1','star')
    head4.innerHTML=("it's bad");
} )
const star3 = document.querySelector('.star3')
star3.addEventListener('click', ()=>{
    const addcolor3 = document.querySelector('.star3')
    addcolor3.classList.replace('star3','star')
    head4.innerHTML=("it's Good");
    const addcolor2 = document.querySelector('.star2')
    addcolor2.classList.replace('star2','star')
    const addcolor = document.querySelector('.star1')
    addcolor.classList.replace('star1','star')
    head4.innerHTML=("it's Good");
} )
const star4 = document.querySelector('.star4')
star4.addEventListener('click', ()=>{
    const addcolor4 = document.querySelector('.star4')
    addcolor4.classList.replace('star4','star')
    head4.innerHTML=("it's very Good");
    const addcolor3 = document.querySelector('.star3')
    addcolor3.classList.replace('star3','star')
    const addcolor2 = document.querySelector('.star2')
    addcolor2.classList.replace('star2','star')
    const addcolor = document.querySelector('.star1')
    addcolor.classList.replace('star1','star')
    head4.innerHTML=("it's very Good");
} )
const star5 = document.querySelector('.star5')
star5.addEventListener('click', ()=>{
    const addcolor5 = document.querySelector('.star5')
    addcolor5.classList.replace('star5','star')
    head4.innerHTML=("it's a Wessome");
    const addcolor4 = document.querySelector('.star4')
    addcolor4.classList.replace('star4','star')
    const addcolor3 = document.querySelector('.star3')
    addcolor3.classList.replace('star3','star')
    const addcolor2 = document.querySelector('.star2')
    addcolor2.classList.replace('star2','star')
    const addcolor = document.querySelector('.star1')
    addcolor.classList.replace('star1','star')
    head4.innerHTML=("it's a Wessome");
} )