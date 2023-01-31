

const userInterface = (function() {

    // //initializes project name and its corresponding array of to-dos from storage
    // //_projectName: String - name of current working project. 
    // //_tempLibrary: Array of to-do objects
    // //_allProjectNames: Array of strings (project titles)
    // let [_projectName, _tempLibrary, _allProjectNames] = storage.initialize();


    
    
    // //displays the default project's to-do's on window-load
    document.addEventListener("DOMContentLoaded", function() {
        displayToDos();
        //displayProjects();
    });
    const toDoItems = ["Create a To-Do by pressing '+' at the bottom right",
                        "Delete a To-Do by clicking on the box to the left",
                        "Create a New Project by clicking the '+' in the upper-left corner",
                        "Change Projects by clicking on the Project Name (to the left)",
                        ];
    const projectItems = [];
    

    const addToDoButton = document.getElementById("add-todo-button");
    const addToDoForm = document.getElementById("add-todo-form");
    const addToDoCancel = document.getElementById("add-todo-cancel");
    const backButton = document.getElementById("back-button");
    const backPopup = document.getElementById("back-popup");
    const importButton = document.getElementById("import-button");
    const importPopup = document.getElementById("import-popup");
    const projectButton = document.getElementById("add-project-button");
    const projectPopup = document.getElementById("add-project-popup");
    const undoButton = document.getElementById("undo-button");
    const undoPopup = document.getElementById("undo-popup");
    const redoButton = document.getElementById("redo-button");
    const redoPopup = document.getElementById("redo-popup");
    
    const addToDoPopup = document.getElementById("add-todo-popup");
    const importForm = document.getElementById("import-form");
    const importYes = document.getElementById("import-yes");
    const importNo = document.getElementById("import-no");
    const addProjectForm = document.getElementById("add-project-form");




    backButton.addEventListener('mouseover', function(event){
        backPopup.classList.toggle("show");
    });
    backButton.addEventListener('mouseleave', function(event){
        backPopup.classList.toggle("show");
    });

    importButton.addEventListener('mouseover', function(event){
        importPopup.classList.toggle("show");
    });
    importButton.addEventListener('mouseleave', function(event){
        importPopup.classList.toggle("show");
    });
    projectButton.addEventListener('mouseover', function(event){
        projectPopup.classList.toggle("show");
    });
    projectButton.addEventListener('mouseleave', function(event){
        projectPopup.classList.toggle("show");
    });
    undoButton.addEventListener('mouseover', function(event){
        undoPopup.classList.toggle("show");
    });
    undoButton.addEventListener('mouseleave', function(event){
        undoPopup.classList.toggle("show");
    });
    redoButton.addEventListener('mouseover', function(event){
        redoPopup.classList.toggle("show");
    });
    redoButton.addEventListener('mouseleave', function(event){
        redoPopup.classList.toggle("show");
    });
    addToDoButton.addEventListener('mouseover', function(event){
        addToDoPopup.classList.toggle("show");
    });
    addToDoButton.addEventListener('mouseleave', function(event){
        addToDoPopup.classList.toggle("show");
    });
    
    // window.addEventListener('click', ({target}) => {
    //     console.log(target.id);
    //     if (window.getComputedStyle(addToDoForm).getPropertyValue('display')==='block'
    //         && (!target.id || target.id !== "addToDoForm")) {
    //             addToDoForm.style.display = 'none';
    //         }
    // });


    // document.addEventListener("click", (e) => {
    //     const isClosest = e.target.closest("#addToDoForm");
    //     if (!isClosest && window.getComputedStyle(addToDoForm).getPropertyValue('display')==='block'){
    //         addToDoForm.style.display = 'none'
    //     }

    // })

    importButton.addEventListener('click', function(event){
        event.stopPropagation();
        const dimmer = document.createElement("div");
        dimmer.style.width = window.innerWidth + 'px';
        dimmer.style.height = window.innerHeight + 'px';
        dimmer.className = 'dimmer';
        dimmer.onclick = function(){
            document.body.removeChild(this);
            importForm.style.display = 'none';
        }
        document.body.appendChild(dimmer);
        if (window.getComputedStyle(importForm).getPropertyValue('display')==='none') {
            importForm.style.display = 'block';
        }
    })
    importYes.addEventListener('click', function(event){
        event.preventDefault();
        const dimmer = document.querySelector(".dimmer");
        document.body.removeChild(dimmer);

        importForm.style.display = 'none';
    })
    importNo.addEventListener('click', function(event){
        event.preventDefault();
        const dimmer = document.querySelector(".dimmer");
        document.body.removeChild(dimmer);
        importForm.style.display = 'none';
    })
    projectButton.addEventListener('click', function(event){
        event.stopPropagation();
        const dimmer = document.createElement("div");
        dimmer.style.width = window.innerWidth + 'px';
        dimmer.style.height = window.innerHeight + 'px';
        dimmer.className = 'dimmer';

        dimmer.onclick = function(){
            document.body.removeChild(this);
            addProjectForm.reset();
            addProjectForm.style.display = 'none';
        }
        document.body.appendChild(dimmer);

        if (window.getComputedStyle(addProjectForm).getPropertyValue('display')==='none') {
            addProjectForm.style.display = 'block';
        }
    })

    addToDoButton.addEventListener('click', function(event) {
        event.stopPropagation();
        const dimmer = document.createElement("div");
        dimmer.style.width = window.innerWidth + 'px';
        dimmer.style.height = window.innerHeight + 'px';
        dimmer.className = 'dimmer';

        dimmer.onclick = function(){
            document.body.removeChild(this);
            addToDoForm.reset();
            addToDoForm.style.display = 'none';
        }
        document.body.appendChild(dimmer);

        if (window.getComputedStyle(addToDoForm).getPropertyValue('display')==='none') {
            addToDoForm.style.display = 'block';
        }
    });



    addToDoCancel.addEventListener('click', function(event){
        event.preventDefault();
        const dimmer = document.querySelector(".dimmer");
        document.body.removeChild(dimmer);
        addToDoForm.reset();
        addToDoForm.style.display = 'none';
    })

    

    //processes new to-do object inputted by user and adds to the project's library
    addToDoForm.addEventListener('submit', function(event) {
        const dimmer = document.querySelector(".dimmer");
        document.body.removeChild(dimmer);
        event.preventDefault();
        addToDoForm.style.display = 'none';
        const title = document.getElementById("title").value;
        addToDoForm.reset();

        toDoItems.push(title);
        //_projectName = document.getElementById("projectTitle").innerHTML;
        //storage.setStorage(_projectName, _tempLibrary);
        
        displayToDos();
    });


    addProjectForm.addEventListener('submit', function(event){
        const dimmer = document.querySelector(".dimmer");
        document.body.removeChild(dimmer);
        event.preventDefault();
        addProjectForm.style.display = 'none';
        

        const projectInput = document.getElementById("project-name").value;
        projectItems.push(projectInput);
        addProjectForm.reset();
        displayProjects();

    });




    //displays the available projects as clickable links (to display their respective to-dos)
    const displayProjects = function() {

    
        const projectUi = document.getElementById("project-display");
        
        projectUi.innerHTML = "";
        const defaultLink = document.createElement('a');
        defaultLink.innerHTML = "Inbox";
        // defaultLink.addEventListener('click', function() {
        //     displayToDos("Inbox");
        // });
        projectUi.appendChild(defaultLink);

        const projectTitle = document.createElement('h4');
        projectTitle.innerHTML = "Choose a Project to display"
        projectUi.appendChild(projectTitle);

        for (const project of projectItems) {
            if (project === "Inbox") { continue;}
            const projectLink = document.createElement('a');
            projectLink.innerHTML = project;
            // projectLink.addEventListener('click', function(){
            //     displayToDos(project);
            // });
            projectUi.appendChild(projectLink);
            
        }
    };

    const displayToDos = function(){

        const toDoUi = document.getElementById("to-do-container");
        toDoUi.innerHTML = "";

        // const projectTitle = document.getElementById("projectTitle");
        // projectTitle.innerHTML = project;
        for (const toDo of toDoItems) {
            const newDiv = document.createElement('div');
            newDiv.classList.add("todo-item");
            newDiv.innerHTML += //`<div class="toDoLabel">`+
                                `<label class="toDoCheckmark">`+
                                `   <input type=checkbox data-value="${toDo}">`+
                                `   <span class=checkmark></span>`+
                                `</label>`+
                                `<h3>${toDo}</h3>`;
                                // `</div>`+
                                // `<p>${toDo.description}</p>`+
                                // `<p>Due: ${toDo.dueDate}</p>`+
                                // `<p>Priority: ${toDo.priority}</p>`+
                                // `<p>Notes: ${toDo.notes}</p>`;
                                
            const checkbox = newDiv.querySelector('input');
            checkbox.addEventListener('change', function(e) {
                const index = toDoItems.indexOf(toDo);
                toDoItems.splice(index, 1);
                displayToDos();
                //setTimeout(()=> {
                // newDiv.classList.add('toDoItemVanish');
                // newDiv.addEventListener('transitionend', function(e){newDiv.classList.add('toDoItemGone')});
                // _tempLibrary = storage.deleteToDo(project, this.getAttribute('data-value'));
                //displayToDos(project);
                //}, 500);
                
            });

            // click on to-do item to open up more info
            // newDiv.addEventListener('click', ()=> {
            //     const toDoPs = newDiv.querySelectorAll('p');
            //     if (window.getComputedStyle(toDoPs[0]).getPropertyValue('display') === 'none') {
            //         toDoPs.forEach(toDoP => toDoP.style.display = 'block');
            //         //toDoPs.style.display = 'block';
            //     } else {
            //         toDoPs.forEach(toDoP => toDoP.style.display = 'none');
            //         //toDoPs.style.display = 'none';
            //     }
            // })

            toDoUi.appendChild(newDiv);
        }

    };

    // const removeToDo = function(toDo) {
    //     console.log("yay");
    // };





})();