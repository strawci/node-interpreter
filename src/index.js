const bashExecutor = require("./bash_executor");

class StrawInterpreter {
    constructor() {
        this.executers = new Map();

        this.executers.set("bash", bashExecutor);
    }

    async runAction(action) {
        const executor = this.executers.get(action.type);
        if (executor) {
            return executor(action.arg);
        } else {
            throw new Error(
                "Cannot find an Executor for action type " + action.type
            );
        }
    }

    async runActions(actions, callback) {
        for (const action of actions) {
            await this.runAction(action).then(({ stdout, stderr }) => {
                if (callback) {
                    callback(null, stdout, stderr);
                }
            });
        }
    }
}

module.exports = StrawInterpreter;
