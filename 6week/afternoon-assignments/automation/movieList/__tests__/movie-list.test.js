const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {By} = require('selenium-webdriver')

beforeEach(async ()=>{
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async ()=>{
    await driver.quit()
})

const editList = async (driver)=>{
    // Adding Movie
    let input = await driver.findElement(By.xpath(`//input`))
    await input.sendKeys('Saving Private Ryan\n');

    await driver.sleep(2000)

    // Cross off Movie
    let crossOff = await driver.findElement(By.xpath(`//span`))
    await crossOff.click()

    await driver.sleep(2000)

    // Deleting Movie
    let remove = await driver.findElement(By.xpath(`(//ul/li/button)`))
    await remove.click()

    await driver.sleep(2000)
    let ul = await driver.findElement(By.xpath(`//ul`))

    // Checking if deleted
    expect(ul.hasChildren).toBeFalsy()
    await driver.sleep(2000)
}

test(`Edit movies`, async ()=>{
    await editList(driver)
    await driver.sleep(3000)
})