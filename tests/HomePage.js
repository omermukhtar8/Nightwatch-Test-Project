module.exports = {
     
   beforeEach:(browser)=>{
       const homePage = browser.page.HomePageObject();
       homePage.navigate();
       browser.waitForElementVisible("body");
   },

   after:(browser)=>{
       browser.end();
   },

// "verifying elements on home page":(browser)=>{
        
//         const homePageElementsExpected = ["Elements","Forms","Alerts, Frame & Windows","Widgets","Interactions","Book Store Application"];

//         browser.getText('div[class="category-cards"]', (result)=>{

//             let homePageElementsActual = result.value.split("\n");
//             console.log(homePageElementsActual);

//             for(let i=0;i<homePageElementsExpected.length;i++)

//             {
//             browser.assert.equal(homePageElementsActual.includes(homePageElementsExpected[i]),true,"Expected is"+homePageElementsExpected[i]);
//             }
//         })
// }
// ,

// "verifying redirection after clicking on Elements on home page'":(browser)=>{
//             const homePage1 = browser.page.HomePageObject();
//             homePage1.clickOnHomePageAndVerify("elements");
// }
// ,

// "verifying redirection after clicking on Forms on home page'":(browser)=>{
//     const homePage2 = browser.page.HomePageObject();
//     homePage2.clickOnHomePageAndVerify("forms");
// }
// ,

// "verifying redirection after clicking on Alerts, Frame & Windows on home page'":(browser)=>{
//     const homePage3 = browser.page.HomePageObject();
//     homePage3.clickOnHomePageAndVerify("alerts");
// },

// "verifying redirection after clicking on Widgets on home page'":(browser)=>{
//     const homePage4 = browser.page.HomePageObject();
//     homePage4.clickOnHomePageAndVerify("widgets");
// },



"verifying new tab open when we click on home page banner'":(browser)=>{
    const homePage5 = browser.page.HomePageObject();
    var result = homePage5.clickOnHomePageAndVerify("bannerHomePage");
}

};