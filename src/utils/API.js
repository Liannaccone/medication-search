import axios from "axios";
const baseUrl = 'https://rxnav.nlm.nih.gov/REST/';
const nameSearchPath = 'drugs.json?name=';
const relatedPath_ingredient = '/related.json?tty=IN';
const relatedPath_SCDSBD = '/related.json?tty=SCD+SBD';


export default {
  search: function(query) {
    return axios.get(baseUrl + nameSearchPath + query);
  },
  searchSimilar: function(query) {
  	return axios.get(baseUrl + 'rxcui/' + query + relatedPath_ingredient)
  },
  findAlternative: function(query) {
  	return axios.get(baseUrl + 'rxcui/' + query + relatedPath_SCDSBD)
  }

};


