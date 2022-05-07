import { Context, NextFunction } from '../packages/index.ts';
import { users } from '../database/index.ts';

async function hasDeepLink(ctx: Context, next: NextFunction) {
  if (!users.includes) users.push(ctx.from!.id); // add user to database
  if (!ctx.match) return await next(); // no match
  if (isNaN(parseInt(ctx.match.toString()))) return await next(); // match string
  if (users.includes(parseInt(ctx.match.toString()))) return await next(); // user already registered

  await ctx.api.sendMessage(parseInt(ctx.match.toString()), `New user: <a href="tg://user?id=${ctx.from!.id}">${ctx.from!.first_name + ' ' + (ctx.from?.last_name || '')}</a>`, { parse_mode: 'HTML' });
  await next();
}

export { hasDeepLink };