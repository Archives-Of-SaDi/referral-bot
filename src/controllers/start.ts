import { bot } from "../core/bot.ts";
import { Context } from "../packages/index.ts";

async function start(ctx: Context) {
  const msg = `Hello <b>${
    ctx.from!.first_name + " " + (ctx.from?.last_name || "")
  }</b>\nYour referral link is: https://t.me/${bot.botInfo.username}?start=${
    ctx.from!.id
  }`;
  await ctx.reply(msg, { parse_mode: "HTML" });
}

export { start };
