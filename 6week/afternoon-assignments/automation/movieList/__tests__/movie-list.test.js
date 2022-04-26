const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {editList} = require('../functions/editing-list.js')

beforeEach(async ()=>{
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async ()=>{
    await driver.quit()
})

test(`Edit movies`, async ()=>{
    await editList(driver)
    await driver.sleep(3000)
})