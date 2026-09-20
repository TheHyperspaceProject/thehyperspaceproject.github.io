export const machine = {
  id: "heat-recovery", name: "Heat Recovery Unit", icon: "♨️",
  efficiency: 0.88, install(factory) {
    factory.machines.push(this);
    return this;
  }
};
