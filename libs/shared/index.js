function greet(appName, person) {
  return `Hello ${person} from ${appName} (via shared)`;
}

function add(a, b) {
  return a + b;
}

module.exports = { greet, add };
