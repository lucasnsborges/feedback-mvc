import storage from "../utils/storage";
import Idea from "../models/idea";

class Controller {
  get hash() {
    const str = (location.hash.match(/\w+/g) || [])[0];
    return str !== "completed" && str !== "active" ? "all" : str;
  }

  get newIdeas() {
    return this.filter("new");
  }

  get inProgress() {
    return this.filter("inprogress");
  }

  init(render) {
    this.ideas = storage.get().map(i => new Idea(i));

    this.update = () => {
      render(this.filtered);
      storage.set(this.ideas);
    };

    window.onhashchange = this.update;
  }

  // Actions

  add(title, description) {
    this.ideas.push(new Idea({ title, description }));
    this.update();
  }
}

export default new Controller();
