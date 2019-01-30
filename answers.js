//WORK IN PROGRESS



let getUSA = () =>
{
    let usa = document.getElementById('USA');
    console.log("Inner HTML is ", usa.innerHTML);
}

let getPeopleInSales = () =>
{
    let people = document.getElementsByClassName("empName");
    for (person in people) console.log(people[person].value);
}

let getAnchorChildren = () =>
{
    let anchors = document.getElementsByTagName("A");
        for (a in anchors) 
            for (let child = anchors[a].getElementsByTagName("SPAN"); child.length;) 
                console.log(child.innerHTML);
}

let getHobbies = () =>
{
    let select = document.getElementsByName("select")
        for (option in select) 
            if (select[option].selected) 
                console.log(people[person].value);
}

let getCustomAttribute = () =>
{
    let elems = document.getElementsByName("*")
        for (elem in elems) 
            if (elems[elem]["dataCustom-Attr"]) 
            {
                console.log("Element name is     ", elems[elem]);
                console.log("dataCustom-Attr is  ", elems[elem]["dataCustom-Attr"]);
            }
}

let getHobbies = () =>
{
    let select = document.getElementsByName("select")
        for (option in select) 
            if (select[option].selected) 
                console.log(people[person].value);
}

//#6 onchange
let unobtrusiveSum = () =>
{
    
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
        let n1, n2 = 0;
    let span = document.getElementById("sum");
        let sum = () => {span.innerHTML = n1 + n2;}

    num1.addEventListener("change", () => {n1 = num1.value; this.sum();})
    num2.addEventListener("change", () => {n2 = num2.value; this.sum();})

}

//#7 onchange
let unobtrusiveSkill = () =>
{
    let selects = document.getElementsByTagName("select");
    for (select in selects)
        selects[select].addEventListener("change", () => 
        {
            if (selects[select].selected)
                alert("Are you sure " + this.value + " is one of your skills?");
        });
}

//#8
let favoriteColor = () =>
{
   
    let radios = document.getElementsByName("favoriteColor");
    let oldRad;

    //get the current checked radio button
    for (radio in radios)
        if (radios[radio].checked)
            oldRad = radios[radio];

    for (radio in radios)
        radios[radio].addEventListener("change", () => 
        {
            if (oldRad != this)  return false;
            alert("So you like " + this.value + " more than " + oldRad + " now?");
            oldRad = this;
        })

}
