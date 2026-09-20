export const machine = {
  id: "turbo-press", name: "Turbo Press", icon: "🌀",
  efficiency: 0.65, install(factory) {
    factory.machines.push(this);
    return this;
  }
};
