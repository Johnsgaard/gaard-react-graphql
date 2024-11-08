const { PrismaClient } = require('@prisma/client');
const cheerio = require('cheerio');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const prisma = new PrismaClient();

const buoyUrls = [
  'https://weather.gc.ca/marine/weatherConditions-currentConditions_e.html?mapID=02&siteID=06800&stationID=46131',
  'https://weather.gc.ca/marine/weatherConditions-currentConditions_e.html?mapID=02&siteID=06800&stationID=46132',
  'https://weather.gc.ca/marine/weatherConditions-currentConditions_e.html?mapID=02&siteID=06800&stationID=46206',
  'https://weather.gc.ca/marine/weatherConditions-currentConditions_e.html?mapID=02&siteID=06800&stationID=46146',
  'https://weather.gc.ca/marine/weatherConditions-currentConditions_e.html?mapID=02&siteID=14305&stationID=46304',
  'https://weather.gc.ca/marine/weatherConditions-currentConditions_e.html?mapID=02&siteID=06800&stationID=46303',
];

// 5 minutes
const WAIT_TIME = 1000 * 60 * 5;

const grabBuoyDetailsFromSource = async (buoyUrl) => {
  try {
    const res = await fetch(buoyUrl);

    const rawDOM = await res.text();
    const code = cheerio.load(rawDOM)('main').find('h3').first().text();
    const pageTime = cheerio.load(rawDOM)('.issuedTime').first().text();
    const domTable = cheerio.load(rawDOM)('table');
    const [wind, pressure, waveHeight, airTemp, wavePeriod, waterTemp] =
      domTable.find('td').map((_, element) => domTable.find(element).text());
    const nextScrape = new Date(
      new Date().getTime() + WAIT_TIME,
    ).toLocaleString('en-US', { timeZone: 'America/Vancouver' });

    console.log(
      '------------------------------------\n',
      '\n⚓️: ',
      code,
      '\n🔎🕞: ',
      pageTime,
      '\n💨: ',
      wind,
      '\n💨🗜: ',
      pressure,
      '\n🌊📏: ',
      waveHeight,
      '\n💨🌡️: ',
      airTemp,
      '\n🌊...🌊: ',
      wavePeriod,
      '\n💧🌡️: ',
      waterTemp,
      '\n next srape time:',
      nextScrape,
      '\n------------------------------------\n',
    );

    return {
      name: code,
      pageTime,
      code,
      wind,
      pressure,
      waveHeight,
      airTemp,
      wavePeriod,
      waterTemp,
      nextScrape,
    };
  } catch (error) {
    console.error(
      '[Buoy from source] There was an issue grabbing data from Env Canada',
    );
  }
};

const getFreshData = () => {
  const updateData = async () => {
    for (const buoyUrl of buoyUrls) {
      const buoy = await grabBuoyDetailsFromSource(buoyUrl);

      if (!buoy || typeof buoy === 'undefined') {
        return;
      }

      await prisma.buoy.upsert({
        where: { code: buoy?.code },
        update: { ...buoy },
        create: {
          name: buoy?.name || 'n/a',
          code: buoy?.code || 'n/a',
          ...buoy,
        },
      });

      if (typeof buoy.waveHeight === 'undefined' || !buoy.waveheight) {
        await prisma.buoy.delete({
          where: {
            code: buoy.code,
          },
        });
      }
    }
  };
  updateData();
  setInterval(updateData, WAIT_TIME);
};

const main = async () => {
  getFreshData();
};

module.exports = main;
