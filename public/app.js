//toggle button
const toggleBtn = document.querySelector('.toggle-btn');
const contenedordelinks = document.querySelector('.contenedor-de-links');

toggleBtn.addEventListener('click', () =>{
    toggleBtn.classList.toggle('active');
    contenedordelinks.classList.toggle('show');
})

const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})

//creacion de proyecto dinamico//

const projectcontainer= document.querySelector('.project-container');

projects.forEach(project => {
    projectcontainer.innerHTML +=  `
    <div class="project-card" data-tags="#all,${project.tags}">
        <img src="img/${project.Image}" alt="">
            <div class="content">
              <h1 class="project-name">${project.name}</h1>
              <span class="tags">${project.tags}</span>
            </div>
    </div>
    `;
})

//filters

const filters= document.querySelectorAll('.filter-btn');

filters.forEach(filterbtn => {
    filterbtn.addEventListener('click' , () => {
        let id= filterbtn.getAttribute('id');
        let projectCards= document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if( card.getAttribute('data-tags').includes(id)){
                card.classList.remove('hide');
            }else{
            card.classList.add('hide');
            }
        })
        filters.forEach(btn => btn.classList.remove('active'));
        filterbtn.classList.add('active')
    } )
})


//contact form

const contactBtn= document.querySelector('.contact-btn');
const firstname= document.querySelector('.first-name');
const lastname= document.querySelector('.last-name');
const email= document.querySelector('.email');
const msg= document.querySelector('.message');

contactBtn.addEventListener('click', () =>{
    if(firstname.value.length && lastname.value.length && email.value.length && msg.value.length){
        fetch('/mail', {
            method: 'post',
            headers: new Headers({'Content-Type' : 'application/json'}),
            body: JSON.stringify({
                firstname: firstname.value,
                lastname: lastname.value,
                email: email.value,
                msg: msg.value,
            })
        })

        .then(res => res.json())
        .then(data =>{
            alert(data);
        })
    }
})