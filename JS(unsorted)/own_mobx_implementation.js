let currentReaction = null;

function autoRun(cb) {
  try {
    currentReaction = cb;
    cb();
  } finally {
    currentReaction = null;
  }
}

function observable(value) {
  const deps = new Map();

  const addReaction = (key) => {
    if (!currentReaction) {
      return;
    }
    if (!deps.has(key)) {
      deps.set(key, new Set());
    }

    const reactionForKey = deps.get(key);
    reactionForKey.add(currentReaction);
  };

  const runReactions = (key) => {
    const reactions = deps.get(key);
    if (!reactions) {
      return;
    }

    reactions.forEach((cb) => cb());
  };

  const proxy = new Proxy(value, {
    get(target, property) {
      addReaction(property);

      return target[property];
    },
    set(target, property, value) {
      if (target[property] === value) {
        return true;
      }

      target[property] = value;

      runReactions(property);

      return true;
    },
  });

  return proxy;
}

const state = observable({
  a: "test",
  b: 24,
});

autoRun(() => {
  console.log(state.a);
});

state.b = 28;
state.b = 48;
state.b = 48;

state.a = "Test 28";
state.a = "Test 28";
state.a = "Test 32";
