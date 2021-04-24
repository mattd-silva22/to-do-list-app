
const clear = null

function Add_Item() {  
    var temp_item = document.getElementById('text-input').value
    
    if ( temp_item.trim().length != 0) {
        document.getElementById('text-input').value = clear
        
        //cria elemento li e add classe css  
        var li = document.createElement('li') 
        li.classList.add('list-item') 
        
        
        // cria botao e funcao de COMPLETAR  tarefa
        var span_v_btn = document.createElement('span')
        span_v_btn.classList.add('complete-btn')
        var teste = document.createElement('input')
        teste.setAttribute('type' , 'checkbox') 
        span_v_btn.appendChild(teste)
        span_v_btn.addEventListener('click', function(e) {
            var test_class = span_task.className
            if ( test_class == 'task-complete' ) {
                span_task.classList.remove('task-complete')
            } else {
            span_task.classList.add('task-complete')
            }
             }, false); 
        li.appendChild(span_v_btn)
                
        
        
        
        // cria span , add task dentro dela append a li
        var span_task = document.createElement('span')
        var task = document.createTextNode(temp_item)
        span_task.appendChild(task) 
        li.appendChild(span_task) 

        
        // cria botao e funcao de REMOVER tareja
        var span_x_btn = document.createElement('span') 
        span_x_btn.classList.add('remove-btn')
        let z = document.createTextNode('X') 
        span_x_btn.appendChild(z)
        span_x_btn.addEventListener('click', function(e) {
            li.parentNode.removeChild(li);
            }, false); 
        li.appendChild(span_x_btn)
        
        document.getElementById('list').appendChild(li)
        
    } else {
        alert("favor digite algo no campo")
        document.getElementById('text-input').value = clear
    }
    

 }

 
