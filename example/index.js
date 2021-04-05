const Interpreter = require("../src");

const interpreter = new Interpreter();

// Run a single action
interpreter
    .runAction({
        type: "bash",
        arg: "echo Hello world",
    })
    .catch((e) => {
        console.error("Failed running command: " + e);
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
