const accountId = 144567

let account_email = "aryan@gmail.com"

var account_password = 34567

account_city = "Noida" //In javascript a variable can be decalred without using any let or const keyword

let account_state; //if you don't put any value in the variable then it will be declared as undefined

// A variable which is declared as constant cannot be changed 
// accountId = 34
account_email = "khdkhk@gmail.com"
account_password = 890765
account_city = "Greater Noida"

// Longest Way to print the output
// console.log(account_city)
// console.log(accountId)
// console.log(account_email)
// console.log(account_password)

// Shortest Way to print the output
console.table([account_city, account_email, accountId, account_password, account_state])

/*
Prefer not to var keyword because of issue in block scope and functional scope
 */