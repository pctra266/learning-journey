var nodes = document.getElementsByTagName('button');

for (let i = 0; i< nodes.length; i++){
    nodes[i].addEventListener('click', function(){
        console.log('You click element #' + i);
    })
}

// var -> let; cuz var is function scope