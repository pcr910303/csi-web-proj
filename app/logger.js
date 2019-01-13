const logger = require("pino")({
    level: "trace"
});

logger.info("logger level is:", logger.level);

module.exports = logger;
