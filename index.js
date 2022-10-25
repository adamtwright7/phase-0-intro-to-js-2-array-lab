let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.splice(cats.length,0,name)
    return cats
}

function destructivelyPrependCat(name) {
    cats.splice(0,0,name)
    return cats 
}

function destructivelyRemoveLastCat() {
    cats.splice(-1,1)
    return cats 
}

function destructivelyRemoveFirstCat() {
    cats.splice(0,1)
    return cats 
}

function appendCat(name) {
    return [...cats, name]
}

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat() {
    return cats.slice(0,-1)
}

function removeFirstCat() {
    return cats.slice(1)
}
