import { observable, computed, decorate, action } from "mobx";
import Axios from "axios";
import RESOURCES from "../../lib/resources.json";
import dotenv from "dotenv";

dotenv.config();

class Store {
  // Observables
  // ---------------------------------------------------------------------------

  isLoading = false;
  resources = [];
  tags = [];
  areas = [];

  filterTerms = [];
  searchTerm = "";
  useSearchTerm = this.searchTerm.length > 0;
  // Computed
  // ---------------------------------------------------------------------------

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

  // Actions
  // ---------------------------------------------------------------------------
  async getResources() {
    this.setLoading(true);
    let resp = await Axios.get("/api/resources", {
      headers: { "X-API-KEY": process.env.REACT_APP_MASTER_KEY },
    });
    this.resources = resp.data.response.resources;
    return this.setLoading(false);
  }
  async getAreas() {
    this.setLoading(true);
    let resp = await Axios.get("/api/areas", {
      headers: { "X-API-KEY": process.env.APP_MASTER_KEY },
    });
    this.resources = resp.data.response.areas;
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
  tags: observable,
  areas: observable,

  searchTerm: observable,
  useSearchTerm: observable,

  getResources: action,
  getAreas: action,
  useAllFilters: action,
  onSearchTermChange: action,
});

export default Store;
