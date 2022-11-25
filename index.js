function receivesAFunction(spy){
    spy()
}


function returnsANamedFunction(){
    return function instructions() {

    }
}


function returnsAnAnonymousFunction () {
    return () =>{ console.log ('My name')
}
}