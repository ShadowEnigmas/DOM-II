// Your code goes here
const body = document.querySelector('body');
body.addEventListener('click', (element) => {
    element.stopPropagation();
    element.target.style.backgroundColor = 'cyan';
});
body.addEventListener('mouseenter', (element) => {
    element.stopPropagation();
    console.log('Hello!!!')
});
body.addEventListener('mouseleave', (element) => {
    element.stopPropagation();
    console.log('Come Back!!!')
});
body.addEventListener('dblclick', (element) => {
    element.target.style.backgroundColor = 'white';
});
const image = document.querySelector('img');
image.addEventListener('mouseenter', (element) => {
    element.stopPropagation();
    console.log('vroom vroom');
});
image.addEventListener('mouseleave', (element) => {
    console.log('skrrrrrt');
});
const boldHeader = document.querySelector('h2');
boldHeader.addEventListener('mouseover', (element) => {
    element.stopPropagation();
    element.target.style.color = 'red';
});
body.addEventListener('wheel', (element) => {
    element.target.style.color = 'black';
});
body.addEventListener('copy', (element) => {
    element.stopPropagation();
    console.log('STOP THAT THIEF!');
});
body.addEventListener('paste', (element) => {
    element.stopPropagation();
    console.log('There is a time and place for that, but it is neither here, nor now!');
});
body.addEventListener('cut', (element) => {
    element.stopPropagation();
    console.log('You do not know how to do that');
});
body.addEventListener('contextmenu', (element) => {
    console.log('Stop hitting that button!')
})
const navigation = document.querySelectorAll('nav a')
navigation.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
})