import { startSMTP } from "./smtp";
import { startAPI } from "./api";

process.on("uncaughtException", (err) => {
  if (err.message?.includes("Socket is closed") || err.message?.includes("ERR_SOCKET_CLOSED")) {
    console.log(`[smtp] Connection reset by remote host`);
    return;
  }
  console.error("[fatal] Uncaught exception:", err);
  process.exit(1);
});

console.log("[cloakmail] Starting server...");

startSMTP();
startAPI();
