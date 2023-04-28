var formSubmit=document.querySelector('#form')

formSubmit.addEventListener('submit',(e) => {
e.preventDefault()
var firstName = document.querySelector('#firstName')
var lastName = document.querySelector('#lastName')
var adress = document.querySelector('#adress')
var pincode = document.querySelector('#pincode')
var gender = document.querySelector('#gender')
var food = document.querySelector('#food')
var state = document.querySelector('#state')
var country = document.querySelector('#country')

if(count > 2) {
  document.querySelector('tbody').append(tableRow)
}else{
  alert("Must choose at least 2 out of 5 options")
}




for(let i of array){
  i.value = ''
}

})