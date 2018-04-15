import axios from "axios";
const baseUrl = 'https://rxnav.nlm.nih.gov/REST/drugs.json?name=';

export default {
  search: function(query) {
    return axios.get(baseUrl + query);
  }
};