import axios from 'axios';
import cheerio from 'cheerio'

async function getData(url) {
    
    const { data: rawData } = await axios.get(url)
    return rawData
  
}

async function parseResponse(rawData){

    const $ = cheerio.load(rawData)
    const wiki = $('.article__container')
        .get()
        .map(p => {

            const paragraphs = $(p)
            const content = paragraphs.find('p').text()
            console.log(content)
          
            return content
        })
    console.log(wiki)
}
export { getData, parseResponse};