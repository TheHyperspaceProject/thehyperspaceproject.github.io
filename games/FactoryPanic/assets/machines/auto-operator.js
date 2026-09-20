export const machine = {
  id: "auto-operator", name: "Auto-Operator", icon: "🤖",
  efficiency: 0.75, install(factory) {
    factory.machines.push(this);
    return this;
  }
};
