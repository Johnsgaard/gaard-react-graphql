const { PrismaClient } = require('@prisma/client');
const cheerio = require('cheerio');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const prisma = new PrismaClient();

const grabBuoyDetailsFromSource = async () => {
  try {
    const res = await fetch(
      `https://weather.gc.ca/marine/weatherConditions-currentConditions_e.html?mapID=02&siteID=06800&stationID=46131`,
    );

    const rawDOM = await res.text();

    const code = cheerio.load(rawDOM)('h3').first().text();
    const pageTime = cheerio.load(rawDOM)('.issuedTime').first().text();
    const domTable = cheerio.load(rawDOM)('table');
    const [wind, pressure, waveHeight, airTemp, wavePeriod, waterTemp] =
      domTable.find('td').map((_, element) => domTable.find(element).text());

    console.log(
      '------------------------------------\n',
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
    };
  } catch (error) {
    console.error(
      '[Buoy from source] There was an issue grabbing data from Env Canada',
    );
  }
};

const callEveryHalfHour = () => {
  setInterval(async () => {
    const buoy = await grabBuoyDetailsFromSource();

    if (!buoy || typeof buoy === 'undefined') {
      return;
    }
    await prisma.buoy.upsert({
      where: { code: buoy?.code },
      update: { ...buoy },
      create: { name: buoy?.name || 'n/a', code: buoy?.code || 'n/a', ...buoy },
    });
  }, 1000 * 60 * 30);
};

const main = async () => {
  callEveryHalfHour();
};

module.exports = main;
