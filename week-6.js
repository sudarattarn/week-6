console.log('say Hello')

let firstName ='Sudarat'
let lastName ='Kongbun'
let age = 18
console.log(`My Name is ${firstName} ${lastName}
I'm ${age} year old`)

let num1 = 20
let num2 = 10
let sum = num1*num2// opertor + - * / %
let co = num1==num2//Condition opertor ==,!=,<,<=,>,>=
console.log(`Reslt : ${co}`)

let Name = firstName+lastName
console.log('Name : ',Name)
console.log(2*(num1-num2)/2)

let height = 165
let weight = 65
let bmi = weight /((height/100) * (height/100));
console.log(bmi)
if(bmi<18.50) {
    console.log(`BMI : ${bmi.toFixed(2)}
    อยู่ในเกณท์ : น้ำหนักน้อย/ผอม
    ภาวะเสี่ยงโรค : มากกว่าคนปกติ`)
}else if(bmi<23.00) {
    console.log(`BMI : ${bmi.toFixed(2)}
    อยู่ในเกณท์ : ปกติ (สุขภาพดี)
    ภาวะเสี่ยงโรค : เท่าคนปกติ`)
}else if(bmi<25.00) {
    console.log(`BMI : ${bmi.toFixed(2)}
    อยู่ในเกณท์ : ท้วม / โรคอ้วนระดับ 1
    ภาวะเสี่ยงโรค :อันตรายระดับ 1 `)
}else if(bmi<30.00) {
    console.log(`BMI : ${bmi.toFixed(2)}
    อยู่ในเกณท์ : อ้วน / โรคอ้วนระดับ 2
    ภาวะเสี่ยงโรค :อันตรายระดับ 2`)
}else if(bmi>=30.00) {
    console.log(`BMI : ${bmi.toFixed(2)}
    อยู่ในเกณท์ : อ้วนมาก / โรคอ้วนระดับ 3
    ภาวะเสี่ยงโรค :อันตรายระดับ 3`)
}else{
    console.log('ไม่เข้าเงื่อนไขใดๆ')
}


