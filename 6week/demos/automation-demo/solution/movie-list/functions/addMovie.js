//Here we'll import some things from Selenium that we'll use for our automation
// import { By } from 'selenium-webdriver'
const { By } = require('selenium-webdriver')

const addMovie = async (driver) => {
    //here we are defining the type of the parameter of our function using basic typescript
    //the driver will be a WebDriver - if any other type of argument is passed the function will not run
    
    //first we need to select the input field
    await driver.findElement(By.xpath(`//input`)).sendKeys('Back to the Future')

    //now we will select the add button
    await driver.findElement(By.xpath(`//button`)).click()

    //if we review index.js we will see that adding a movie creates an <li> element
    
    //we will now have our automation test to ensure that the correct element was added

    //find the li element
    const movie = await driver.findElement(By.xpath(`//li`))
    //use the .isDisplayed method on selenium which evaluates to true or false
    const displayed = movie.isDisplayed()

    //expect displayed to be true
    expect(displayed).toBeTruthy()

}

module.exports = {
    addMovie
}