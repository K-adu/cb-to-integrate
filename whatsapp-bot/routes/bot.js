
const express = require("express")
const puppeteer = require("puppeteer")

const bot = express.Router()

bot.get("/", async (req, res) =>{

    try{
        const browser = await puppeteer.launch({headless: false})
        const page = await browser.newPage();
    }catch(err){
        console.log(err)
    }
})

module.exports = bot;