export const machine = {
  id: "scrap-recycler", name: "Scrap Recycler", icon: "♻️",
  efficiency: 0.72, install(factory) {
    factory.machines.push(this);
    return this;
  }
};
