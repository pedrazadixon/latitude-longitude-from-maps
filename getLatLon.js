const getLatLon = async function (q) {
    try {
        url = 'https://www.google.com/maps/search/' + q;
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
            }
        });

        const data = await response.text();
        const regex = /window\.APP_INITIALIZATION_STATE=\[\[\[[-\d.]+,(-?\d+\.\d+),(-?\d+\.\d+)\]/;
        const matches = data.match(regex);

        if (matches === null) return [];

        if (matches.length < 3) return [];

        if (isNaN(matches[1]) || isNaN(matches[2])) return [];

        return [{ lat: matches[2], lon: matches[1] }];

    } catch (error) {
        console.log(error);
        return []
    }
}

module.exports = getLatLon;