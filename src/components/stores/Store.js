import { observable, computed, decorate, action } from 'mobx';
import Axios from "axios";
import RESOURCES from "../../lib/resources.json";


class Store {
  // Observables
  // ---------------------------------------------------------------------------

  resources = RESOURCES || []
  // filterTerms = []
  searchTerm = ""

  // Computed
  // ---------------------------------------------------------------------------

  get areas() {
  //   let all = this.resources
  //   .map(r => r.Area && r.area.split(","))
  //   .map(a => a[0])
  //   .filter(a => a.length > 0);
  // let set = [...new Set(all)];
  // return set;
  return this.resources
  }

  get tags() {

  }

  get filteredResources() {
    // Term only for now, case insensitivce
    let pattern = new RegExp(this.searchTerm, 'i')
    return this.resources.filter( r => r.Title && r.Title.match(pattern))
  }
  // Actions
  // ---------------------------------------------------------------------------

  async getResources(){
    let data = Axios.get("/api/resources")
    return this.resources = data.resources.data.resources
  }

  setSearchTerm(term){
    return this.searchTerm = term
  }
}

decorate(Store, {
  resources: observable,
  searchTerm: observable,
  areas: computed,
  filteredResources: computed,
  tags: computed,
  getResources: action,
  onSearchTermChange: action,

});

export default Store;

