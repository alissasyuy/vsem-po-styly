const node_for_click = document.getElementById("for_click")

function find_edit(){
    const surname  = document.getElementsByTagName('p')[3]
    const name = document.getElementsByTagName('p')[4]
    const pol = document.getElementsByTagName('p')[6].childNodes[0]
    const birth_date  = document.getElementsByTagName('p')[6].childNodes[1]
    console.log(surname.innerText)
    console.log(name.innerText)
    console.log(pol.innerText)
    console.log(birth_date.innerText)

    surname.innerText = 'SYUY'
    name.innerText = 'ALISSA'
    pol.innerText = 'F'
    birth_date.innerText = '15/10/2002 year'

}

node_for_click.addEventListener("click",find_edit)


// const node_for_click = document.getElementById("for_click")
//
// function find_edit(){
//     const surname  = document.getElementsByTagName('div')[3]
//     const name = document.getElementsByTagName('div')[4]
//     console.log(surname.innerText)
//     console.log(name.innerText)
//     // console.log(pol.innerText)
//     // console.log(birth_date.innerText)
//
//     surname.innerText = 'SYUY'
//     name.innerText = 'ALISSA'
//     // pol.innerText = 'F'
//     // birth_date.innerText = '15/10/2002 year'
//
// }
//
// node_for_click.addEventListener("click",find_edit)