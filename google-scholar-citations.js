// Author : Ramaguru Radhakrishnan
// Created Date : 11-Nov-2021
// Updated Date : 30-Oct-2022
// Description: To get the Google Scholar Publications and Citation Stats

const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("7f9f9c41b5d103050275e9c3258d9d45e4a4fcec333b24bff50bd3ddb4c08f09");

console.log("\nFeteching the details from Google Scholar");

const faculty_1 = {
  engine: "google_scholar_author",
  author_id: "Xl_P9V0AAAAJ", // Dr. M. Sethumadhavan
  hl: "en"
};

const faculty_2 = {
  engine: "google_scholar_author",
  author_id: "nlt0DD4AAAAJ", // Dr. Chungath Srinivasan
  hl: "en"
};

const faculty_3 = {
  engine: "google_scholar_author",
  author_id: "K2n1nh0AAAAJ", // Dr. Lakshmy K.V
  hl: "en"
};

const faculty_4 = {
  engine: "google_scholar_author",
  author_id: "8AwtAWsAAAAJ", // Dr. Amritha P P
  hl: "en"
};

const faculty_5 = {
  engine: "google_scholar_author",
  author_id: "NHVcW84AAAAJ", // Dr. Praveen K
  hl: "en"
};

const faculty_6 = {
  engine: "google_scholar_author",
  author_id: "W6nvRkQAAAAJ", // Mr. Ashok Kumar Mohan
  hl: "en"
};

const faculty_7 = {
  engine: "google_scholar_author",
  author_id: "QdXcVjUAAAAJ", // Mr. Saurabh Shrivastava
  hl: "en"
};

const faculty_8 = {
  engine: "google_scholar_author",
  author_id: "-DjvKqgAAAAJ", // Mr. Ramaguru Radhakrishnan
  hl: "en"
};

const faculty_9 = {
  engine: "google_scholar_author",
  author_id: "jaxJad8AAAAJ", // Dr. Sangeetha Viswanathan
  hl: "en"
};

const faculty_10 = {
  engine: "google_scholar_author",
  author_id: "ZWxL_tkAAAAJ", // Ms. Ambili K N 
  hl: "en"
};

const researh_scholar_1 = {
  engine: "google_scholar_author", // Mr. Rajeev K
  author_id: "D9kO6VgAAAAJ",
  hl: "en"
};

const researh_scholar_2 = {
  engine: "google_scholar_author", // Mr. Aravind Vishnu S S
  author_id: "8q2B8WYAAAAJ",
  hl: "en"
};

const researh_scholar_3 = {
  engine: "google_scholar_author", // Ms. Merly Anne Philip
  author_id: "ZWxL_tkAAAAJ",
  hl: "en"
};

const researh_scholar_4 = {
  engine: "google_scholar_author", // Mr. Joseph Nelson
  author_id: "ZWxL_tkAAAAJ",
  hl: "en"
};

const researh_scholar_5 = {
  engine: "google_scholar_author", // Ms. Zeenath A U
  author_id: "ZWxL_tkAAAAJ",
  hl: "en"
};

const researh_scholar_6 = {
  engine: "google_scholar_author", // Mr. Harish R
  author_id: "weIsDiIAAAAJ",
  hl: "en"
};

console.log("******************************************");

const callback = function(data) {
  
  author = data['author']['name'];
  publications = data['articles'].length;
  citations_c = data['cited_by']['table'][0]['citations']['all'];
  hindex_c = data['cited_by']['table'][1]['h_index']['all'];
  i10index_c = data['cited_by']['table'][2]['i10_index']['all'];
  console.log( author + " has " + publications + " publications ~~~ citations : " + citations_c + ", h-index : " + hindex_c + ", i10-index : " + i10index_c);
  console.log("----------------------------------------------------------------------------------------------");
  
};

//console.log("\t\t FACULTY \t\t");
search.json(faculty_1, callback);
search.json(faculty_2, callback);
search.json(faculty_3, callback);
search.json(faculty_4, callback);
search.json(faculty_5, callback);
search.json(faculty_6, callback);
search.json(faculty_7, callback);
search.json(faculty_9, callback);
search.json(faculty_10, callback);

//setTimeout(30000);
//console.log("******************************************");
//console.log("\t\t RESEARCH SCHOLAR \t\t");
search.json(researh_scholar_1, callback);
search.json(researh_scholar_2, callback);
search.json(researh_scholar_3, callback);
//search.json(researh_scholar_4, callback);
//search.json(researh_scholar_5, callback);
search.json(researh_scholar_6, callback);
//search.json(researh_scholar_7, callback);
//search.json(researh_scholar_8, callback);
//search.json(researh_scholar_9, callback);
//search.json(researh_scholar_10, callback);

console.log("\n");
