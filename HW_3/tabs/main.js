const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');


const changeClass = el => {
    console.log(el)
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab){
            content[i].classList.add('active');
        }
    }
})


const contents = document.getElementById('contents')

const changeClass_1 = el1 => {
    console.log(el1)
    for(let x = 0; x < content.lenght; x++) {
        content[x].classList.remove('active');
    }
    el1.classList.add('active');
}

contents.addEventListener('click', e => {
    const currTab = e.target.dataset.contents;
    changeClass_1(e.target);
    for(let x = 0; x < contents.length; x++) {
        contents[x].classList.remove('active');
        if(contents[x].dataset.btn === currTab){
            contents[x].classList.add('active');
        }
    }
})
