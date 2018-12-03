let bodies = Array.from(document.getElementsByClassName('card-body'));

bodies.forEach( (body) => body.onclick = () => $(body).toggleClass('active') );
