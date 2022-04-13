let anakinAttack = 25
let obiWanAttack = 35
let anakinHealth = 100
let anakinDefense = 0
let obiWanHealth = 100
let obiWanDefense = 0

if (anakinAttack > obiWanAttack){
  console.log("Anakin has the stronger attack.")
} else if (obiWanAttack > anakinAttack){
  console.log("ObiWan has the higher attack.")
} else {
  console.log("The force is with both of them.")
}

if (anakinHealth <= 0){
  console.log("Anakin is ded")
} else {
    anakinHealth -= obiWanAttack
    console.log(`Anakin's health is now ${anakinHealth} after ObiWan's attack.`)
}

anakinDefense += 25

if (anakinHealth <= obiWanAttack - anakinDefense){
  console.log("Anakin has fallen.")
} else {
  anakinHealth -= obiWanAttack - anakinDefense
  console.log(`Anakin's health is now ${anakinHealth} with his armor taking the brunt of the damage.`)
}

console.log("Anakin finds and takes a medpack.")

if (anakinHealth + 50 >= 100){
  anakinHealth = 100
  console.log(`Anakin's health is now ${anakinHealth}.`)
} else {
  anakinHealth += 50
  console.log(`Anakin's health is now ${anakinHealth}.`)
}

for (let i = 0; i < 5; i++){
  anakinHealth -= obiWanAttack - anakinDefense
  console.log(`Anakin's health is: ${anakinHealth}`)
}

while (anakinHealth > 0){
  anakinHealth -= obiWanAttack - anakinDefense
  console.log(`Anakin's health is: ${anakinHealth}`)
  if (anakinHealth <= 0){
    console.log("Anakin has fallen.")
  }
}
