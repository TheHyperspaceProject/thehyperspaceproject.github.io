export const machine = {
  id: "ai-controller", name: "AI Controller", icon: "🧠",
  efficiency: 0.6, install(factory) {
    factory.machines.push(this);
    return this;
  }
};
