import { getData, parseResponse} from './lib/scraper';

async function scrapperScrape() {
    
    const url = "https://stackedco.de/understanding-golang-channels"

    const html = await getData(url);
    const getContent = await parseResponse(html);    
    console.log('yaaay', getContent)
}

scrapperScrape()