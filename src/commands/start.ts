import { bot } from "../core/bot.ts";
import { start } from "../controllers/index.ts";
import { hasDeepLink } from "../middlewares/index.ts";

bot.command("start", hasDeepLink, start);
