import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


describe( 'add and remove movie', () => {
test('add movie', async () => {

        await driver.findElement(By.xpath('(//input)')).sendKeys('Weekend At Bernies\n')
        await driver.findElement(By.xpath('(//input)')).sendKeys('Chemical X\n')
await driver.sleep(5000)
})

test('watched movie', async () => {

    await driver.findElement(By.xpath("//ul")).click()
    await driver.sleep(5000)
})

})