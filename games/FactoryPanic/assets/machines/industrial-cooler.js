export const machine = {
  id: "industrial-cooler", name: "Industrial Cooler", icon: "❄️",
  efficiency: 0.8, install(factory) {
    factory.machines.push(this);
    return this;
  }
};
