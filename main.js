function obct(name, a, w) {
    if (a >= 5 && a <= 7) {
        if (w < 15) {
            console.log("underweight ", a)
            return `Hello ${name} !!! Your weight is less than recommended value of 15KG at an age of ${a}`
        }
        else if (w > 20) {
            console.log("overweight ", a)
            return `Hello ${name} !!! Your weight is greater than recommended value of 20KG at an age of ${a}`
        }
        else {
            console.log("perfect weight")
            return `Hello ${name} !!! Your weight is perfect`
        }
    }
    else if (a >= 8 && a <= 10) {
        if (w < 21) {
            console.log("underweight ", a)
            return `Hello ${name} !!! Your weight is less than recommended value of 21KG at an age of ${a}`
        }
        else if (w > 25) {
            console.log("overweight ", a)
            return `Hello ${name} !!! Your weight is greater than recommended value of 25KG at an age of ${a}`
        }
        else {
            console.log("perfect weight")
            return `Hello ${name} !!! Your weight is perfect`
        }
    }
    else if (a >= 11 && a <= 15) {
        if (w < 26) {
            console.log("underweight ", a)
            return `Hello ${name} !!! Your weight is less than recommended value of 26KG at an age of ${a}`
        }
        else if (w > 30) {
            console.log("overweight ", a)
            return `Hello ${name} !!! Your weight is greater than recommended value of 30KG at an age of ${a}`
        }
        else {
            console.log("perfect weight")
            return `Hello ${name} !!! Your weight is perfect`
        }
    }
    else if (a >= 16 && a <= 20) {
        if (w < 31) {
            console.log("underweight ", a)
            return `Hello ${name} !!! Your weight is less than recommended value of 31KG at an age of ${a}`
        }
        else if (w > 40) {
            console.log("overweight ", a)
            return `Hello ${name} !!! Your weight is greater than recommended value of 40KG at an age of ${a}`
        }
        else {
            console.log("perfect weight")
            return `Hello ${name} !!! Your weight is perfect`
        }
    }
    else {
        return 'error'

    }
}
document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault()
    var name = document.getElementById("name").value
    var age = parseInt(document.getElementById("age").value)
    var weight = parseInt(document.getElementById("weight").value)
    if (validate(name, age, weight)) {
        console.log("values are valid")
        append("p", obct(name, age, weight), "msg")
        // clearing the error log
        renderError("")
    }
    else {
        console.log("error occured")
    }
})

function validate(name, age, weight) {
    informError("weight",false)
    informError("age",false)
    informError("name",false)
    if (isNaN(age) && isNaN(weight) && name == '') {
        informError("weight")
        informError("age")
        informError("name")
        renderError("all fields are required")
        return false
    }
    else if (name == '') {
        informError("name")
        renderError("name is required")
        return false
    }
    else if (isNaN(age)) {
        informError("age")
        renderError("age is invalid/required")
        return false
    }
    else if (isNaN(weight)) {
        informError("weight")
        renderError("weight is invalid/required")
        return false
    }
    else if (age < 5 && weight <= 0) {
        informError("weight")
        informError("age")
        renderError("age is invalid and weight should be greater than 0",)
        return false
    }
    else if (age < 5) {
        informError("age")
        renderError("age should be greater than 5")
        return false
    }
    else if (weight <= 0) {
        informError("weight")
        renderError("weight cannot be less than 1",)
        return false
    }

    else if (age > 20) {
        informError("weight")
        informError("age")
        renderError("age greater than 20 is not supported")
        return false
    }
    else {
        informError("age", false)
        informError("weight", false)
        return true
    }
}

// render border errors in html 
function informError(id, error = true) {
    document.getElementById(id).style.borderColor = error ? "red" : ""
}
// static error
function renderError(content) {
    document.getElementById("error").innerHTML = content
}
// appending in html form 
function append(type, content, parent) {
    var node = document.createElement(type)
    node.innerText = content
    document.getElementById(parent).prepend(node)
}