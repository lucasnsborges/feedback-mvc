class Idea {
  constructor(idea) {
    const { title, description } = idea;

    this.title = title || "";
    this.description = description || "";
    this.status = "new";
    this.votes = [];
    this.uid = uid || new Date().toJSON().replace(/[^\w]/g, "");
    this.link = `/${this.uid}`;
  }
}

export default Idea;
