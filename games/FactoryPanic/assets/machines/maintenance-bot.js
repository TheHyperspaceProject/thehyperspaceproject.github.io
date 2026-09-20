export const machine = {
  id: "maintenance-bot", name: "Maintenance Bot", icon: "🔧",
  efficiency: 0.82, install(factory) {
    factory.machines.push(this);
    return this;
  }
};
