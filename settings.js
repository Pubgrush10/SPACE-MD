require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADp67VqCiyF8TAQAAGsHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVmAbkHtERC4oKXlq848Y8lFBAKRZYVaAw4b9PYE*PzMPubC8PRJFkZJ48eU59AyTHDE1QDcxvoKC4ghy1R14XCJjALuMYUdAFEeQQmCB*21i+dlP9kmxXFurk56zuy7LiZeOBkROxIbUyZMVhu09ewaMLivKY4fAPBSecKOQUyv0CayxwtVCZDprDubm*rYnh5Tty3F48JV0uRfYKHm1FiCkmiVOk6IIozCaoXkBMPwe*4zmahfNboTbTSV2prnbWt8o4j4YxdmJZtecnandStBbY5+CPDgML8oBPZlc0UiS021vn*Qs8ZHih2MNRx7WlkTQaR+Lp*A6f4YSgyI0Q4ZjXn+ZdtevFnVbGbhHPEpGPjLluux053dLY0koHTT2EtIGXaeLsc8BPmnxYwdHegRvJcFI6uw12wxlG1b5AJBQO42C2XJ6vyalxfwe+oB9aOf8f3q9W5tvYQhta7bUajVehaATbwSUwFgPUpPPhTfCgiyrpfP4k78IUrtJqMIqHL+vJqmPETPKSI7Pq9LK7jOztOvY7YrLrbW+*4ENe0j+hPG11f6PZJ1Jc3yaSsQyNu5JbnWFTCGrUc9TYKKNTyfZzFsY4s5p+edi7h+HcUGXLR0edMD8TlgvFI+Kuua5HESdry399TnRGtRsBU3x0AUUJZpxCjnPSxlSpC2BUrVBIEX+yC6gQV53cVccuwZIQjUuPdWw1m1yrqpNyZ0im3nWjHfKpp7+CLihoHiLGUDTGjOe0niHGYIIYMP*+2gUE3fn73tpuPbELYkwZ35CyyHIYfSz14ycMw7wkfFWTsN8eEAWm8CuMOMckYS2NJYE0THGF+inkDJgxzBj6OSCiKAImpyX6adp+HrW872x*vVsYC9AFl+c+cARMIGmaKGtaT1d0U*+Lfbm1RWFRfCGIgy7InkmKpBuarMiaJknPvDb8+ImuLRYhDnHGgAn604lNM8cnXrO43YLAWlnWxLJaxj6m+VDFO+1ktqx3xgaexIvuhJEwH5wVmXDbP6ToXrH7SF*18sNtuto7*1QEmGCbTTpDu9RxcHy7KqewaXa6UNupnEThrH3RnerNstTOL471crcCP5sn6dX2yklvZvT93nB2kcWzjTkNri9CbyyddgPrte0WoQqH6Pdm61h1l5x5OdM3i2iureA28ZZ+HewgHiTeHFVzGefSaXbc+EsepCRAp4HDPImifdxv5m54zhsVN7RjiTa89gtBNizrXa9Pv2Q*7in8lFK7p*YzxuhpewLb7f3X3t5ht+ISHt3fKvy4Rv7FivahccKs2o5y41DZ43E08JU35Gn+ZhTs2VGbLSuHq6OwL2R38Hh87YIigzzO6QWYAJKI5jgCXUDzslWrS+L8D836VuIOfvg0g4xbvxywxhfEOLwUwBQ1RZJFQ9fE96wFzYsxZCkwgTiR07Hcyrm2imLFIf8wFLDaZ6rK4PEdUEsBAhQDFAAACAgAOnrtWoKLIXxMBAAAawcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdAQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '27678728845',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'pubgrush10',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
