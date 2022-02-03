

myElements = {
       elementHomePage : 
                 {
                        selector : '//div[@class="category-cards"]/div[@class="card mt-4 top-card"][1]//h5',
                        locateStrategy: 'xpath'
                 },
        formHomePage : 
                 {
                        selector : '//div[@class="category-cards"]/div[@class="card mt-4 top-card"][2]//h5',
                        locateStrategy: 'xpath'
                 },
        alertsHomePage : 
                 {
                        selector : '//div[@class="category-cards"]/div[@class="card mt-4 top-card"][3]//h5',
                        locateStrategy: 'xpath'
                 },
        widgetsHomePage : 
                 {
                        selector : '//div[@class="category-cards"]/div[@class="card mt-4 top-card"][4]//h5',
                        locateStrategy: 'xpath'
                 },
        bannerHomePage: 'img[class="banner-image"]'
};

myCommands = [
        {
            async clickOnHomePageAndVerify(input){
                    if(input == "elements")
                    {
                        return this.click('@elementHomePage').pause(3000).assert.urlEquals('https://demoqa.com/elements');
                    }
                    else if(input == "forms")
                    {
                        return this.click('@formHomePage').pause(3000).assert.urlEquals('https://demoqa.com/forms');
                    }
                    else if(input == "alerts")
                    {
                        return this.click('@alertsHomePage').pause(3000).assert.urlEquals('https://demoqa.com/alertsWindows');
                    }
                    else if(input == "widgets")
                    {
                        return this.click('@widgetsHomePage').pause(3000).assert.urlEquals('https://demoqa.com/widgets');
                    }
                    else if(input == "bannerHomePage")
                    {
                       this.click('@bannerHomePage',function(){
                            this.windowHandles(function(result){
                                console.log(result.value);
                                result = result.value[1];
                                this.switchWindow(result,function(){
                                    this.waitForElementVisible("body",30000);
                                    this.assert.title("Tools QA - Selenium Training");
                                });

                            });



                       });
                       
                    }

                    
                    
            },
                    async alternateApproach(){

                        await this.click('@bannerHomePage');
                        this.pause(3000);
                        this.api.windowHandles(function(result){
                            console.log(result.value);
                        });
                    }

        }
];

module.exports = {

url: "https://demoqa.com",
elements:myElements,
commands:myCommands,
url: "https://demoqa.com"

};