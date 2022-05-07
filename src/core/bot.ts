import { Bot } from "../packages/index.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

if (!Deno.env.get("BOT_TOKEN")) {
  throw new Error("BOT_TOKEN environment variable is required");
}

const bot = new Bot(Deno.env.get("BOT_TOKEN")!.toString());

bot.init()
  .then(() => console.log("Bot has successfully launched"))
  .catch(() => console.log("Couldn't run"));

bot.start();

export { bot };
