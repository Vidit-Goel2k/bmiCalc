const form = document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const bmiResult = document.querySelector("#bmiResult")
    
    const instructions = document.querySelector("#instructions")
    instructions.innerHTML = ""

    if(height <= 0){
        bmiResult.innerHTML = "Please Enter a valid height"
    }
    else if(weight <= 0){
        bmiResult.innerHTML = "Please Enter a valid weight"
    }
    else{
        calcBmi(height, weight, bmiResult)
    }
})

const calcBmi = (height, weight, bmiResult) => {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    bmiResult.innerHTML = `Your BMI is: ${bmi}`
    const category = findCategory(bmi)
    const categoryResult = document.querySelector("#category")
    categoryResult.innerHTML = `Your BMI Category is: ${category}`
}

const findCategory = (bmi) => {
    let category
    switch (true) {
        case (bmi<18.5):
            category = "UnderWeight"
            break;
        case (bmi>=18.5 && bmi < 24.9):
            category = "Normal Weight"
            break;
        case (bmi>=25 && bmi < 29.9):
            category = "OverWeight"
            break;
        case (bmi>=30):
            category = "Obesity"
            break;
        default:
            category = "Please enter valid Height or Weight"
            break;
    }
    return category
}


