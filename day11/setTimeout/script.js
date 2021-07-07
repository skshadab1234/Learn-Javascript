var id = setTimeout(Animation, 5000)

function Animation(){
    document.querySelector(".timeout").style.width = '500px';
    document.querySelector(".timeout").style.height = '500px';
    document.querySelector(".timeout").style.backgroundColor = 'red';
}

function remove_timeout(){
    clearTimeout(id)
}