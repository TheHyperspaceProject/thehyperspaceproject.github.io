export const machine = {
  id: "power-optimizer", name: "Power Optimizer", icon: "⚡",
  efficiency: 0.9, install(factory) {
    factory.machines.push(this);
    return this;
  }
};
