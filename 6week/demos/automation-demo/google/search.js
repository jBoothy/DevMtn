// Here we need to import By, which will allow us to use either css or xpath selectors in our code
const { By } = require('selenium-webdriver')

const search = async (driver, searchTerm) => {

    // We are starting with an await since we're dealing with promises and the browser
    // We have our automation find the element which we can then use the sendKeys method to type
    // into that element, and the \n to hit enter after typing the search term
    await driver.findElement(By.name('q')).sendKeys(`${searchTerm}\n`)

    // We are then setting a variable to be the text from the results of our Google search
    // Instead of using the sendKeys method, we are using the getText method which will return 
    // the text in that element as a string
    let resultsText = await driver.findElement(By.id('res')).getText()

    // We make our restults lower case and then expect it to contain our original search term
    expect(resultsText.toLowerCase()).toContain(searchTerm.toLowerCase())
    // expecting google search results to contain "tenet"

    // Clears search bar
    await driver.findElement(By.name('q')).clear()

    // Adding new search using hard code
    await driver.findElement(By.name('q')).sendKeys(`norse odin\n`)

    // Clicking the images tab
    await driver.findElement(By.xpath(`(//a[text()="Images"])[1]`)).click()

    // Keeping page open for a couple seconds
    await driver.sleep(2000)
}

module.exports = {
    search
}