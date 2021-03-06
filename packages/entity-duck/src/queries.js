export default class Queries {
  supportedActions = {}

  hasSupport(name, action = {}) {
    const actions = this.supportedActions[name] || [];
    const supported = actions.includes(action.name);

    if (process.env.NODE_ENV !== 'production') {
      if (!supported && !actions.includes(`!${action.name}`)) throw new Error(`@entity-duck queries.${name}: action name "${action.name}" is not supported`);
    }

    return supported;
  }

  clear() {
    return { type: '@@NOOP' };
  }

  errors() {
    return undefined;
  }

  makeMapStateToProps(action = {}) {
    return state => ({
      errors: action.duck.queries.errors(action, state),
      pagination: action.duck.queries.pagination(action, state),
      processing: action.duck.queries.processing(action, state),
      processingDidFail: action.duck.queries.processingDidFail(action, state),
      value: action.duck.queries.value(action, state),
      valueInitial: action.duck.queries.valueInitial(action, state),
    });
  }

  makeMapDispatchToProps(action = {}) {
    return {
      clear: (...args) => action.duck.queries.clear(action, ...args),
      onChange: (...args) => action.duck.queries.onChange(action, ...args),
      onSubmit: (...args) => action.duck.queries.onSubmit(action, ...args),
      process: () => action,
    };
  }

  onChange() {
    return { type: '@@NOOP' };
  }

  onSubmit() {
    return { type: '@@NOOP' };
  }

  pagination() {
    return undefined;
  }

  processing() {
    return false;
  }

  processingDidFail() {
    return false;
  }

  value() {
    return undefined;
  }

  valueInitial() {
    return undefined;
  }
}
