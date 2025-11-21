export const initSentry = async () => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { initSentry } = await import("./node.config");
    initSentry();
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    const { initSentry } = await import("./edge.config");
    initSentry();
  }
};
