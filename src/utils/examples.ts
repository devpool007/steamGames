import { getSteamPriceOverview } from "../api/getSteamPriceOverviews";
import { getSteamGameNamefromID } from "../api/getSteamGameNamefromID";

// Example usage together with getSteamGameNamefromID
async function testGetSteamGameAPIs() {
  const appids = [3240220, 292030, 377160];
  const country = "de"; // Example country code

  try {
    const result = await getSteamPriceOverview(appids, country);

    for (const appid of appids) {
      const price = result[appid]?.data?.price_overview?.final_formatted;
      const name = await getSteamGameNamefromID(appid);
      console.log(`Current Price of  ${name}:`, price);
    }
  } catch (error) {
    console.error("Error fetching game details:", error);
  }
}

// Call the test
testGetSteamGameAPIs();
