const form = document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    
    calcBmi(height, weight, result)
    
})

const calcBmi = (height, weight, result) => {

    if(height <= 0){
        result.innerHTML = "Please Enter a valid height"
    }
    else if(weight <= 0){
        result.innerHTML = "Please Enter a valid weight"
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `Your BMI is: ${bmi}`
    }
}


