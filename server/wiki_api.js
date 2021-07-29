const fetch=require( "../node_modules/node-fetch");

const scrape_api = async (url) => {
  const res=await fetch(url);
  const result=await res.json();
  return result;
};

module.exports = {
  scrape_api,
};
