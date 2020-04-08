import { observable, computed, decorate, action } from "mobx";
import Axios from "axios";
import RESOURCES from "../../lib/resources.json";

class Store {
  // Observables
  // ---------------------------------------------------------------------------

  isLoading = false;
  resources = RESOURCES || [];
  sortBy = [];
  // filterTerms = []
  searchTerm = "";
  useSearchTerm = this.searchTerm.length > 0;
  // Computed
  // ---------------------------------------------------------------------------

  get areas() {
    //   let all = this.resources
    //   .map(r => r.Area && r.area.split(","))
    //   .map(a => a[0])
    //   .filter(a => a.length > 0);
    // let set = [...new Set(all)];
    // return set;
    return this.resources;
  }

  get tags() {}

  get filtered() {
    // const pattern = new RegExp(this.searchTerm, "i");
    const filtered = this.resources.filter((r) => this.filterByAll(r));
    return filtered;
  }

  filterByAll(r) {
    const pattern = new RegExp(this.searchTerm, "i");

    if (
      (r.Title && r.Title.match(pattern)) || // if title exists and matches
      (r["Source (Organization)"] && // if source exists and matches
        r["Source (Organization)"].match(pattern)) ||
      (r.Tags && r.Tags.includes(this.searchTerm)) // if tag exists
    ) {
      return true;
    } else {
      return false;
    }
  }
  // filterTitle(r) {
  //   const pattern = new RegExp(this.searchTerm, "i");
  //   return r.Title && r.Title.match(pattern);
  // }

  // filterSource(r) {
  //   const pattern = new RegExp(this.searchTerm, "i");
  //   return (
  //     r["Source (Organization)"] && r["Source (Organization)"].match(pattern)
  //   );
  // }

  // filterTags(r) {
  //   const tags = r.Tags.includes(this.searchTerm);
  //   return r.Tags.includes(this.searchTerm);
  // }

  useAllFilters(r) {
    // Term only for now, case insensitivce

    const pattern = new RegExp(this.searchTerm, "i");
    const titleMatch = (r) => r.Title && r.Title.match(pattern);
    const sourceMatch = (r) =>
      r["Source (Organization)"] && r["Source (Organization)"].match(pattern);
    // const tagMatch = r.Title && r.Title.match(pattern);

    return this;

    // return
  }
  // Actions
  // ---------------------------------------------------------------------------
  async getResources() {
    this.setLoading(true);
    let resp = await Axios.get("/api/resources");
    this.resources = resp.data.resources;
    return this.setLoading(false);
  }
  async getAreas() {
    this.setLoading(true);
    let resp = await Axios.get("/api/resources");
    this.resources = resp.data.resources;
    return this.setLoading(false);
  }

  setSearchTerm(term) {
    this.useSearchTerm = term.length > 0;
    return (this.searchTerm = term);
  }

  toggleSortBy(value) {
    return (this.sortBy =
      this.sortBy.indexOf(value) === -1
        ? this.sortBy.push(value)
        : this.sortBy.filter((v) => v !== value));
  }

  setLoading(bool) {
    return (this.isLoading = bool);
  }
}

decorate(Store, {
  isLoading: observable,
  resources: observable,
  searchTerm: observable,
  useSearchTerm: observable,
  areas: computed,
  filtered: computed,
  tags: computed,
  getResources: action,
  useAllFilters: action,
  onSearchTermChange: action,
});

export default Store;
