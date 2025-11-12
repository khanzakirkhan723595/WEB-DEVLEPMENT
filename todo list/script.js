document.addEventListener("DOMContentLoaded",()=>{
    //this ensure that untill all the html not load , javascript won't run
    //we will write all javascript here

    //step-1: HTML elements ko JavaScript mein laana

    const todoInput=document.getElementById("todo-input");  //where user will write tasks
    const dueDateInput=document.getElementById("due-date"); //to add due date with tasks
    const addTaskButton=document.getElementById("add-task-btn"); //task will add after clicking this button
    const todoList=document.getElementById("todo-list"); //where list of tasks shows like <ul>
    const clearCompletedBtn=document.getElementById("clear-completed-btn"); //for clear completed task

    // show/hide button based on saved tasks
    function toggleClearButton() {
        const hasCompleted = tasks.some(task => task.completed);
        if (hasCompleted) {
            clearCompletedBtn.style.display = "inline-block";
        } else {
            clearCompletedBtn.style.display = "none";
        }
}



    //step-2: Pehle se saved tasks uthana (LocalStorage se)

    let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
    //localStorage.getItem("tasks"): it checks whether any old list create means koi poorani list to nhi bni 
    //JSON.parse(): it convert string into javscript array
    //if nothing is there then start with [](empty array)

    //step-3: Purane tasks screen par dikhana

    tasks.forEach((task) => renderTask(task));
    //pahle se saved tasks ko screen pr dikhane ke liye renderTask() function use kiya gaya hai 

    toggleClearButton(); // for clear button

    //step-4: Add button pe click hone par naya task banana
    addTaskButton.addEventListener("click",()=>{
        const taskText = todoInput.value.trim();
        if(taskText==="") return;
        //when user click on button
            //taskText me input box ka value liya
            //.trim() removes extra spaces
            //if input is empty then function will stop there.
    

    //step-4.1:Naya task object banana
    const newTask={
        id:Date.now(), //unique ID
        text: taskText, //user input
        completed: false, //initially not done
        dueDate: dueDateInput.value || null // ✅ NEW FIELD
        /** 
         ➡️ dueDateInput.value gives us the selected date
        ➡️ If nothing selected → set to null
        **/

    };
    //every task is an object and in that object there is 3 propeties
    //Date.now() ek unique number deta hai(timestamp).

    //step-4.2: Task list mein add karna
    tasks.push(newTask); //array me add kro
    saveTasks();         //localStorage update kro
    renderTask(newTask); //screen pr dikhao
    todoInput.value="";  //input box clean kro

    toggleClearButton(); // it is for clear complete button 

    //push() → array mein new task add.
    //saveTasks() → localStorage mein update.
    //renderTask() → list ke roop mein screen par dikhana.
    //value = "" → input field reset.
    });

    //Step-5: Task ko render (screen pe dikhana)
    function renderTask(task){
        const li = document.createElement("li");
        li.setAttribute("data-id",task.id); 
        //why not id , why data-id
            //id attribute HTML mein unique hona chahiye — ek page par ek hi element ka id="something" ho sakta hai.
            //data-id ek custom attribute hai — jisme hum apna data rakh sakte hain (jaise task ka ID).
            //Yeh har <li> par same naam (data-id) se ho sakta hai, bas value alag-alag honi chahiye (123, 456, 789...).
            //Browser ko koi dikkat nahi hoti data-id ke repetition se — kyunki yeh custom hai, id jaise strict nahi.  
        //ek <li> tag banaya gaya
        //data-id se oosko unique bnaya ,taaki delete/edit aasan hoo

        //Step 5.1: Completed task ko style karna
        if(task.completed) li.classList.add("completed");
        //agar task already complete hai to uss <li> ko CSS class de di gayi

        //Step 5.2: List item ke andar text aur delete button
        li.innerHTML=`<span>${task.text}</span>
                    <small>${task.dueDate ? "(Due: " + task.dueDate + ")" : ""}</small>
                    <button>delete</button>`;

        // Step 5.3: Task complete/incomplete toggle
        li.addEventListener("click",(e)=>{
            if(e.target.tagName==="BUTTON") return; 
            //tagName hamesha uppercase mein return hota hai — yeh JavaScript ka default behavior hai.
            //Chahe HTML mein tum <button> likho ya <BUTTON> —
            //JavaScript ka tagName uppercase "BUTTON" hi dega.
            task.completed=!task.completed;
            //ye toggle karta hai true <-> false:
            //Agar task pehle complete nahi tha (false), ab true ho gaya.
            //Agar complete tha (true), ab false ho gaya.
            li.classList.toggle("completed");
            //Ye toggle karta hai CSS class:
            //Agar class="completed" already hai → hata dega.
            //Agar nahi hai → add kar dega.
            //use:Tumhare CSS mein completed class ho sakta hai
            saveTasks();
            //Local storage update karta hai — taki tumhare changes browser band hone ke baad bhi safe rahen.
            toggleClearButton();

        });

        //Step 5.4: Delete button ka action
        li.querySelector("button").addEventListener("click",(e)=>{
            e.stopPropagation();
            tasks=tasks.filter((t)=>t.id !==task.id);
            //(t) => t.id !== task.id
                //Ye ek arrow function hai.
                //Har task (t) ke id ko check karta hai.
                //Sirf woh tasks array mein rakhte hain jinka id delete wale task ke id ke barabar nahi hai.
            li.remove();
            //HTML se <li> element hata do (DOM se remove).
            saveTasks();
            //Update hua tasks[] ko localStorage me wapas save karo.
            //Taaki browser close/open hone ke baad bhi changes yaad rahein.
            toggleClearButton(); // for clear button
        });

        //Step 5.5: <li> ko list mein add karo
        todoList.appendChild(li);

    }



    //Step 6: Save Function – Local Storage Update
    function saveTasks(){                           //////////
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }

    //JavaScript array ko JSON string mein convert kar ke localStorage mein store karna.
    //Isse browser band hone ke baad bhi data bacha rahta hai.

    //ADD CLEAR COMPLETED BUTTON
    
    clearCompletedBtn.addEventListener("click",()=>{
        //filter out completed task
        tasks=tasks.filter(task=>!task.completed);
        //save updated task list
        saveTasks();
        //clear and re-render task list
        todoList.innerHTML=""; //clear all <li>
        tasks.forEach(renderTask);//re-add only uncompleted tasks
        toggleClearButton(); // for clear button

        


    });


    //for active , completed filter
    const filterButtons=document.querySelectorAll(".filter-btn");
    filterButtons.forEach((btn)=>{
        /** Har button ke liye loop lagate hain.
            Taaki sab buttons par click event lagaya ja sake.
        **/
        btn.addEventListener("click",()=>{
        /**Jab user kisi filter button par click kare,
           Tab ye function chale. 
        **/
            //remove active class from all buttons
            filterButtons.forEach((b)=>b.classList.remove("active"));
            //Pehle sabhi buttons se "active" class hata do.
            //Isse pehle select hua button deselect ho jaata hai

            btn.classList.add("active");
            //Click hua button active ho jata hai (CSS se highlight).
            //Taaki user ko dikhe kaunsa filter apply hua hai.



            const filter=btn.getAttribute("data-filter");

            //before rendering check for 'completed'
            if(filter==="completed"){
                const completed=tasks.filter(task=>task.completed);
                if(completed.length===0){
                    alert("No completed tasks available.");
                    return; // stop rendering
                }
            }
            renderFilteredTasks(filter);
            /**
             Ye function tasks ko filter karta hai aur screen par dikhata hai.
            Filter ka value depend karta hai:
                "all" → sab dikhaye
                "active" → sirf uncompleted
                "completed" → sirf completed 
            **/
        });
    });
    function renderFilteredTasks(filter){
        todoList.innerHTML="";
        let filteredTasks=[];
        if(filter==="all")
            filteredTasks=tasks;
        else if(filter==="active")
            filteredTasks=tasks.filter((task)=> !task.completed);
        else if(filter==="completed"){
            filteredTasks=tasks.filter((task)=> task.completed);
        }
        filteredTasks.forEach(renderTask);
    }

    
});