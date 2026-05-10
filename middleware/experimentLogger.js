const fs = require("fs");

function authLogger(req, res, next) {
  const start = Date.now();

  const requestSize = Buffer.byteLength(JSON.stringify(req.body || {}));

  res.on("finish", () => {
    const duration = Date.now() - start;

    const log = {
      layer: "AUTH_SERVER",
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      durationMs: duration,
      requestSizeBytes: requestSize,
      responseSize: res.get("Content-Length") || 0,
      time: new Date().toISOString(),
    };

    fs.appendFileSync(
      "auth-logs.txt",
      JSON.stringify(log) + "\n"
    );

    console.log("🔐 AUTH LOG:", log);
  });

  next();
}

module.exports = authLogger;