 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

test("Should run", ()=>{
  expect(2).toBe(2)
})

test("First name should be Patten", ()=>{
  expect(testData.firstName).toBe("Patten")
})

describe("formatTitle tests", ()=>{
  test("formatTitle should return a string", ()=>{
    let formattedTitle = formatTitle(testData.title)
    expect(typeof formattedTitle).toBe("string") // this is an assertion
  })
  test("formatTitle should format title correctly", ()=>{
    let formattedTitle = formatTitle(testData.title)
    expect(formattedTitle).toBe("Nulla Ac")
  })

describe("shortenBio tests", ()=>{
  test("shortenBio is shorter than original bio", ()=>{
    let shortBio = shortenBio(testData.bio)
    expect(shortBio.length).toBeLessThan(testData.bio.length)
  })
  test("Should add periods to the end of the string", ()=>{
    let shortBio = shortenBio(testData.bio)
    expect(shortBio).toContain("...")
    })
  })
})

describe("convertLength tests", ()=>{
  test("convertLength should return an array with length of 2", ()=>{
    let converted = convertLength(testData.length)
    expect(converted).toHaveLength(2)
  })
  test("convertLength can handle numbers < 60", ()=>{
    let converted = convertLength(30)
    expect(converted[1]).toEqual(30)
  })
})

// difference between toBe and toEqual -- referencing where something is stored
// feels really similar when you're checking a primitive (number, string, etc)

// // this will pass
// test('toBe vs toEqual', () => {
//   const myObj = {myNum: 4}
//   const myObjTwo = {myNum: 4}
//   expect(myObj).toEqual(myObjTwo)
// })

// // this will fail
// test('toBe vs toEqual again', () => {
//   const myObj = {myNum: 4}
//   const myObjTwo = {myNum: 4}
//   expect(myObj).toBe(myObjTwo)
// })

// Objects and arrays need to use .toEqual