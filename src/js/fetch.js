export default {
  query: "moon",
  page: 1,
  perPage: 4,
  baseUrl: `https://api.pexels.com/v1`,
  getFetc() {
    let key = "563492ad6f9170000100000199db60a6f1fc43d1b572b8ed904aa680";
    let params = `/search?query=${query}`;
      let url = this.baseUrl + params;
      let options = {
          method: "GET",
          headers: {
              Authorization: key,
          },
      }
    return fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
          console.log(data);
          return data.fotos;
      })
        .then((r) => {
            console.log(r);
        })
  },
};





