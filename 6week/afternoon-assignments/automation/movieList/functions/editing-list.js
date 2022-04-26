const {By} = require('selenium-webdriver')

const editList = async (driver)=>{
    // Adding Movie
    await driver.findElement(By.xpath(`//input`)).sendKeys('Saving Private Ryan');
    await driver.sleep(2000)
    await driver.findElement(By.xpath(`//button`)).click()
    await driver.sleep(2000)
    // Cross off Movie
    await driver.findElement(By.xpath(`//span`)).click()
    await driver.sleep(2000)
    // Deleting Movie
    await driver.findElement(By.xpath('(//button)[2]'))
    await driver.sleep(2000)
}

module.exports = {
    editList
}