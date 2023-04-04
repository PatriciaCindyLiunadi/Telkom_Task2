const urls = [
    "https://www.boredapi.com/api/activity",
    "https://www.boredapis.com/api/activity",
    "https://www.boredapis2.com/api/activity",
];

function fetchData(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            return { data, url };
        })
        .catch((error) => console.error(`Error fetching data from ${url}`, error));
}

Promise.all(urls.map(fetchData))
    .then((results) => {
        const validResult = results.find((result) => result.data.activity);
        console.log(validResult);
    })
    .catch((error) => console.error("Error fetching data", error));
