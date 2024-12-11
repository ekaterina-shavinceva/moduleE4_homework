function checkTheName(name, obj){
    for(let key in obj){
        if(key === name){
            return true
        }else {
            return false
        }
    }
}

const room = {
    S: 14,
    color: 'white',
    height: 2.5
}

checkTheName('height', room)