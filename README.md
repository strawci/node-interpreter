# 🍓 StrawCI Interpreter

This package is responsible for interpreting actions in JSON format. It is made specifically for StrawCI.

## 👷 Constructor

```javascript
const Interpreter = require("@strawci/interpreter");
const interpreter = new Interpreter();
```

## 📝 Action Body

```json
{
    "type": "bash",
    "arg": "Command to be executed"
}
```

### 💻 Functions

```javascript
// Run a single action
interpreter
    .runAction({
        type: "bash",
        arg: "echo Hello world",
    })
    .then(({ stdout, stderr }) => {
        console.log(stdout || stderr);
        console.log("Finished");
    });

// Run multiple actions
const actions = [
    { type: "bash", arg: "echo First command" },
    { type: "bash", arg: "echo Second command" },
    { type: "bash", arg: "echo Third command" },
    { type: "bash", arg: "echo Fourth command" },
];

interpreter
    .runActions(actions, (err, stdout, stderr) => {
        console.log(stdout || stderr);
    })
    .catch((e) => {
        console.error("Failed running command: " + e);
    })
    .then(() => {
        console.log("Finished.");
    });
```

### ❤️ The End

Made with Love by [Sammwy](https://twitter.com/sammwy)</a>
