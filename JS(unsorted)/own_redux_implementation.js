function createStore(reducer, initialState) {
  let state = initialState;
  const subscribers = new Set();

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    state = reducer(state, action);

    subscribers.forEach((cb) => cb());

    return action;
  };

  const subscribe = (cb) => {
    subscribers.add(cb);

    return () => {
      subscribers.delete(cb);
    };
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
}

const initialState = {
  a: "test",
  b: 24,
};

const store = createStore((state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}, initialState);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch({ type: "update", payload: { b: 48 } });
store.dispatch({ type: "update", payload: { a: 'Test a field' } });
store.dispatch({ type: "update", payload: { b: 32 } });
