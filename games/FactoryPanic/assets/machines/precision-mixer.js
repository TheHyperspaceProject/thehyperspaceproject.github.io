export const machine = {
  id: "precision-mixer", name: "Precision Mixer", icon: "🧪",
  efficiency: 0.68, install(factory) {
    factory.machines.push(this);
    return this;
  }
};
