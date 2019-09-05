    
const puppeteer = require('puppeteer');
async function tweet(){
    
    let data = {}

        let browser = await puppeteer.launch({headless: false, slowMo: 100, args: ['--no-sandbox']});
        let page = await browser.newPage()
        try{
        await page.setViewport({width: 1920, height: 1080})
        await page.goto("https://twitter.com/")
        const navigationPromise = page.waitForNavigation( { timeout: 0, waitUntil: 'domcontentloaded' })
        await navigationPromise

        //For Clicking a login button
        const loginButton = '#doc > div > div.StaticLoggedOutHomePage-content > div.StaticLoggedOutHomePage-cell.StaticLoggedOutHomePage-utilityBlock > div.StaticLoggedOutHomePage-signupBlock > div.StaticLoggedOutHomePage-noSignupForm > div > a.js-nav.EdgeButton.EdgeButton--medium.EdgeButton--secondary.StaticLoggedOutHomePage-buttonLogin'
        await page.waitForSelector(loginButton)
        await page.click(loginButton)

        //For fetching username
        const mainInput = "#page-container > div > div.signin-wrapper > form > fieldset > div:nth-child(2) > input"
        await page.waitForSelector(mainInput,{timeout:300000})
        await page.type(mainInput,'bessy.sebastin@gmail.com')

        //For fetching password
        const passInput = "#page-container > div > div.signin-wrapper > form > fieldset > div:nth-child(3) > input"
        await page.waitForSelector(passInput,{timeout:300000})
        await page.type(passInput,'Evershine 103')

        //To click login button
        const submitButton = "#page-container > div > div.signin-wrapper > form > div.clearfix > button"
        await page.waitForSelector(submitButton)
        await page.click(submitButton)
        await navigationPromise
        await page.waitFor(1000 * 12)

        
         //go to status id
         var status_id ='https://twitter.com/BessySebastin/status/1164465178525569024'
         await page.goto(status_id)
         const comment ="div.css-1dbjc4n.r-sdzlij.r-1p0dtai.r-xoduu5.r-1d2f490.r-xf4iuw.r-u8s1d.r-zchlnj.r-ipm5af.r-o7ynqc.r-6416eg"
         await page.waitForSelector(comment)
         await page.click(comment)
 
         const add_comment ='div.notranslate.public-DraftEditor-content'
         await page.waitForSelector(add_comment)
         await page.click(add_comment)
         await page.type(add_comment,'loii')
         
         const status = 'div.css-901oao.r-1awozwy.r-jwli3a.r-6koalj.r-18u37iz.r-16y2uox.r-1qd0xha.r-a023e6.r-vw2c0b.r-1777fci.r-eljoum.r-dnmrzs.r-bcqeeo.r-q4m81j.r-qvutc0'
         await page.click(status);
         await page.waitFor(1000 * 12)

   
            
       // for retweet or favourite 
        const reTweet = 'div[data-testid="retweet"]'
        await page.waitForSelector(reTweet);
        await page.click(reTweet);
        const confirmRetweet ='div[data-testid="retweetConfirm"]'
        await page.waitForSelector(confirmRetweet);
        await page.click(confirmRetweet);
        await page.waitFor(20000)
        
       
        

       // for like or favourite 
        const likeButton = 'div[data-testid="like"]'
        await page.waitForSelector(likeButton);
        await page.click(likeButton);
         

        // //For getting status_Id
        // data = await page.waitFor('div.css-901oao.r-hkyrab.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0', {timeout: 175000
        // }).then(async () => {
        //     await page.click("div.css-901oao.r-hkyrab.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0")
        //     await page.waitFor(1000 * 15)
        //     await page.evaluate(() => window.location.href)
        //             data['status'] = await page.evaluate(() => window.location.href)
        //             console.log(data)
        //             await browser.close()
        //             return data
        //         })
        //         return data
                
          
    } 
    catch (e) {
        //data['success'] = false
        await browser.close()
        console.log(e)
        //throw new Error('Failed to tweet..')
    }
    
}

tweet()