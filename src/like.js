let btn = document.querySelector('button');
let classObj = {
  ori: 'large',
  large: 'ori'
}

btn.addEventListener('click', ()=>{
  btn.classList = classObj[btn.classList[0]];

});

export default btn