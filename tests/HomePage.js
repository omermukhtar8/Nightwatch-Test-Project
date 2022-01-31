module.exports = {
     
   beforeEach:(browser)=>{
       const homePage = browser.page.HomePageObject();
       homePage.navigate();
       browser.waitForElementVisible("body");
   },

   after:(browser)=>{
       browser.end();
   },

"verifying elements on home page":(browser)=>{
        
        const homePageElementsExpected = ["Elements","Forms","Alerts, Frame & Windows","Widgets","Interactions","Book Store Application"];

        browser.getText('div[class="category-cards"]', (result)=>{

            let homePageElementsActual = result.value.split("\n");
            console.log(homePageElementsActual);

            for(let i=0;i<homePageElementsExpected.length;i++)

            {
            browser.assert.equal(homePageElementsActual.includes(homePageElementsExpected[i]),true,homePageElementsExpected[i]);
            }

        })
},

"verifying redirection after clicking on Elements on home page'":(browser)=>{
            const homePage1 = browser.page.HomePageObject();
            homePage1.clickOnHomePage("elements");
            browser.pause(3000);
            browser.assert.urlEquals('https://demoqa.com/elements');
},

"verifying redirection after clicking on Forms on home page'":(browser)=>{
    const homePage2 = browser.page.HomePageObject();
    homePage2.clickOnHomePage("forms");
    browser.pause(3000);
    browser.assert.urlEquals('https://demoqa.com/forms');
},

"verifying redirection after clicking on Alerts, Frame & Windows on home page'":(browser)=>{
    const homePage3 = browser.page.HomePageObject();
    homePage3.clickOnHomePage("alerts");
    browser.pause(3000);
    browser.assert.urlEquals('https://demoqa.com/alertsWindows');
},

"verifying redirection after clicking on Widgets on home page'":(browser)=>{
    const homePage4 = browser.page.HomePageObject();
    homePage4.clickOnHomePage("widgets");
    browser.pause(3000);
    browser.assert.urlEquals('https://demoqa.com/widgets');
}

};