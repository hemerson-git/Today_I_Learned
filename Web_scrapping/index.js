const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch(
    // {headless: false} mostra o browser
  );
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/hemerson.oliveira');

  const imageList = await page.evaluate(() => {
    //Função executada no browser

    const images = document.querySelectorAll('article img')
    const imgArray = [...images];
    const imageList = imgArray.map(img => ({
      src: img.src
    }));

    return imageList;
  });

  //escrever os dados em um arquivo local (json)
  fs.writeFile('instagram.json', JSON.stringify(imageList, null, 2), err => {
    if(err) throw new Error('something went wrong');
  });
  
  await page.screenshot({path: 'instagram.png'});

  await page.close();
})();
