const { PrismaClient } = require('@prisma/client');
const cheerio = require('cheerio');

const prisma = new PrismaClient();

const grabBuoyDetailsFromSource = async () => {
  try {
    const res = await fetch(
      `https://weather.gc.ca/marine/weatherConditions-currentConditions_e.html?mapID=02&siteID=06800&stationID=46131`,
    );

    const rawDOM = await res.text();

    const code = cheerio.load(rawDOM)('h3').first().text();

    const domTable = cheerio.load(rawDOM)('table');
    const [wind, pressure, waveHeight, airTemp, wavePeriod, waterTemp] =
      domTable.find('td').map((_, element) => domTable.find(element).text());

    console.log(
      '------------------------------------\n',
      '💨: ',
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

    await prisma.buoy.upsert({
      where: { code: buoy?.code },
      update: { ...buoy },
      create: { name: buoy?.name || 'n/a', code: buoy?.code || 'n/a', ...buoy },
    });
  }, 1000 * 60);
};

const main = async () => {
  callEveryHalfHour();
};

module.exports = main;
