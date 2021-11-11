// Author : Ramaguru Radhakrishnan
// Date : 11-Nov-2021
// Description: To get the Google Scholar Publications and Citation Stats

const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("7f9f9c41b5d103050275e9c3258d9d45e4a4fcec333b24bff50bd3ddb4c08f09");

console.log("\n\n\n");
console.log("Feteching the details from Google Scholar");

const faculty_1 = {
  engine: "google_scholar_author",
  author_id: "Xl_P9V0AAAAJ",
  hl: "en"
};

const faculty_2 = {
  engine: "google_scholar_author",
  author_id: "nlt0DD4AAAAJ",
  hl: "en"
};

const faculty_3 = {
  engine: "google_scholar_author",
  author_id: "K2n1nh0AAAAJ",
  hl: "en"
};

const faculty_4 = {
  engine: "google_scholar_author",
  author_id: "8AwtAWsAAAAJ",
  hl: "en"
};

const faculty_6 = {
  engine: "google_scholar_author",
  author_id: "W6nvRkQAAAAJ",
  hl: "en"
};

const faculty_7 = {
  engine: "google_scholar_author",
  author_id: "-DjvKqgAAAAJ",
  hl: "en"
};

const faculty_9 = {
  engine: "google_scholar_author",
  author_id: "jaxJad8AAAAJ",
  hl: "en"
};

const callback = function(data) {
  
  author = data['author']['name'];
  publications = data['articles'].length;
  citations_c = data['cited_by']['table'][0]['citations']['all'];
  hindex_c = data['cited_by']['table'][1]['h_index']['all'];
  i10index_c = data['cited_by']['table'][2]['i10_index']['all'];
  console.log("-------------------------------------------------------------------------------");
  console.log(author + " has " + publications + " publications ~~~ citations : " + citations_c + ", h-index : " + hindex_c + ", i10-index : " + i10index_c);
  
};

search.json(faculty_1, callback);
search.json(faculty_2, callback);
search.json(faculty_3, callback);
search.json(faculty_4, callback);
search.json(faculty_6, callback);
search.json(faculty_7, callback);
search.json(faculty_9, callback);

console.log("-------------------------------------------------------------------------------");
console.log("\n");