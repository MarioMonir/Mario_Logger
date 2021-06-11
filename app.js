const logger = require("./logger.js");

logger.info("mario");
logger.info("monir");

try {
  addColors();
} catch (err) {
  logger.error(err.message);
  logger.error(err.stack);
}

