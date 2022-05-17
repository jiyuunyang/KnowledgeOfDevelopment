//event bubbling
// document.querySelector('li').addEventListener('click', () => console.log('li 클릭'));
// document.querySelector('ul').addEventListener('click', () => console.log('ul 클릭'));
// document.querySelector('div').addEventListener('click', () => console.log('div 클릭'));

//event capturing
document.querySelector('li').addEventListener('click', () => console.log('li 클릭'));
document.querySelector('div').addEventListener('click', () => console.log('div 클릭'));
document.querySelector('ul').addEventListener('click', () => console.log('ul 클릭'), { capture: true });
