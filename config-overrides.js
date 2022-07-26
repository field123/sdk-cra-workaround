module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    util: false,
    constants: false,
    path: false,
    stream: false,
    assert: false,
  });
  config.resolve.fallback = fallback;
  return config;
};
