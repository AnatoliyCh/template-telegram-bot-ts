import Telegraf from "telegraf";
import { config } from "./config";

const bot = new Telegraf(config.BOT_TOKEN);
bot.start(ctx => ctx.reply("Welcome!"));
bot.help(ctx => ctx.reply("Send me a sticker"));
bot.on("sticker", ctx => ctx.reply("👍"));
bot.hears("hi", ctx => ctx.reply("Hey there"));
bot.launch();
