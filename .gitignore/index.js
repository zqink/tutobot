const Discord = require("discord.js");
const client = new Discord.Client();
var figlet = require('figlet');
var token = "NDcxNzU4NjQ2NTIzNzIzODA2.D1dVng.3kzYXwz7WJZYrGr3SV0aaIldg6I"
var prefix = 'IDS!'



client.on("ready", () => {
  console.log(`${client.user.tag} est co`)
})


client.on("message", message => {
  if(message.content.includes(prefix + "salut")){
    message.delete();
    message.channel.send("BONSOIR PARIS, YEAAHHHHH !")
  }
  if (message.content.includes(prefix + "Pub")) {
    if (message.author.id == client.user.id) {
    message.delete()
    for (var i = 0; i < 10; i++) {
      var antiantipub = new Discord.RichEmbed()
        .setAuthor("ANTI ANTI-PUB")
        .setColor("RANDOM")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
        .addField("https://discord.gg/djvFC5y", "REJOIGNEZ BANDE DE PUTE")
      message.channel.send(antiantipub)

    }
  }
  }


  var argresult = message.content.split(` `).slice(1).join(' ');
  if (message.content.includes("IDS!spam")) {
    if (message.author.id == client.user.id) {
    for (var i = 0; i < 90; i++) {
      message.channel.send(argresult)
      message.edit(argresult)
    }
  }
}
  if (message.content.startsWith(prefix + "ui")) {
    if (message.author.id == client.user.id) {
    message.delete()
    var memberavatar = message.author.avatarURL
    var membername = message.author.username
    var mentionned = message.mentions.users.first();
    var getvalueof;
    if (mentionned) {
      var getvalueof = mentionned;
    } else {
      var getvalueof = message.author;
    }

    if (getvalueof.client == true) {
      var checkclient = "L'utilisateur est un client";
    } else {
      var checkclient = "N'est pas un client";
    }
    if (getvalueof.presence.status == 'online') {
      var status = "𝐄𝐧 𝐋𝐢𝐠𝐧𝐞";
    } else {
      var status = "𝐇𝐨𝐫𝐬 𝐋𝐢𝐠𝐧𝐞";
    }

    message.channel.sendMessage({
      embed: {
        type: 'rich',
        description: '',
        fields: [{
          name: '👥 𝐏𝐬𝐞𝐮𝐝𝐨',
          value: getvalueof.username,
          inline: true
        }, {
          name: '🏷️ 𝐓𝐚𝐠',
          value: getvalueof.discriminator,
          inline: true
        }, {
          name: '🆔 𝐔𝐬𝐞𝐫 𝐈𝐃',
          value: getvalueof.id,
          inline: true
        }, {
          name: '🌍 𝐒𝐭𝐚𝐭𝐮𝐬',
          value: status,
          inline: true
        }, {
          name: '📅 𝐂𝐫𝐞́𝐞𝐫 𝐥𝐞',
          value: getvalueof.createdAt.toLocaleString(),
          inline: true
        }],
        image: {
          url: getvalueof.avatarURL
        },
        color: 0x010101,
        footer: {
          proxy_icon_url: ' '
        },
        author: {
          name: membername,
          icon_url: memberavatar,
          proxy_icon_url: ' '
        }
      }
    });
  }
}
  if (message.content.startsWith(prefix + "vir")) {
    if (message.author.id == client.user.id) {
    message.delete();
    let args = message.content.split(' ').slice(1);
    let virusname = args.join(' ');
    if (virusname < 1) {
      return message.channel.send("𝐕𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐦𝐞𝐭𝐭𝐫𝐞 𝐥𝐞 𝐧𝐨𝐦 𝐝𝐮 𝐡𝐚𝐜𝐤");
    }
    message.channel.send({ embed: new Discord.RichEmbed().setTitle('𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ' + virusname + "...").setColor('#010101') }).then(function (m) {
      setTimeout(function () {
        m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓ ] 𝟏%').setColor('#010101') })
      }, 1000)
      setTimeout(function () {
        m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓] 𝟐𝟓%').setColor('#010101') })
      }, 2000)
      setTimeout(function () {
        m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓] 𝟓𝟎%').setColor('#010101') })
      }, 3000)
      setTimeout(function () {
        m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓] 𝟕𝟓%').setColor('#010101') })
      }, 4000)
      setTimeout(function () {
        m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 𝟏𝟎𝟎%').setColor('#010101') })
      }, 5000)
      setTimeout(function () {
      m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐕𝐢𝐫𝐮𝐬 𝐥𝐚𝐧𝐜𝐞́').setColor('#010101') })
      }, 6000)
      setTimeout(function () {
        m.delete();
      }, 10000)
    });
  }
  }
  if(message.content.includes(prefix + 'stop')){
    if (message.author.id == client.user.id) {
    message.delete();
    message.channel.send(dsqdsqfdqsdsdfsfcw)
  }
}
  if (message.content.includes(prefix + 'si')) {
    if(message.channel.type === "dm") return;
    if (message.author.id == client.user.id) {
    message.delete();
    let serverembed = new Discord.RichEmbed()
      .setAuthor(message.guild.name)
      .setFooter(`${message.guild.name}`)
      .setColor("#010101")
      .setThumbnail(`${message.guild.iconURL}`)
      .setTitle("👽 | 𝐂𝐥𝐢𝐪𝐮𝐞𝐳 𝐢𝐜𝐢 𝐩𝐨𝐮𝐫 𝐚𝐯𝐨𝐢𝐫 𝐥𝐚 𝐩𝐡𝐨𝐭𝐨 𝐝𝐮 𝐬𝐞𝐫𝐯𝐞𝐮𝐫 | 👽 ")
      .setURL(`${message.guild.iconURL}`)
      .addField("**🆔 𝐈𝐃**", "**" + message.guild.id + "**", true)
      .addField("**📛 𝐍𝐨𝐦**", "**" + message.guild.name + "**", true)
      .addField("**👑 𝐂𝐫𝐞́𝐚𝐭𝐞𝐮𝐫**", "**" + message.guild.owner.user.tag + "**", true)
      .addField("**👑 𝐋'𝐈𝐃 𝐃𝐮 𝐂𝐫𝐞́𝐚𝐭𝐞𝐮𝐫**", "**" + message.guild.ownerID + "**", true)
      .addField("**🌍 𝐑𝐞́𝐠𝐢𝐨𝐧**", "**" + message.guild.region + "**", true)
      .addField('**💬 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬**', `**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' 𝐓𝐞𝐱𝐭 | 𝐕𝐨𝐢𝐜𝐞  ' + `**${message.guild.channels.filter(m => m.type === 'voice').size}**`, true)
      .addField("**👥 𝐌𝐞𝐦𝐛𝐫𝐞𝐬**", "**" + message.guild.memberCount + "**", true)
      .addField("**👦 𝐇𝐮𝐦𝐚𝐢𝐧𝐬**", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
      .addField("**🤖 𝐁𝐨𝐭𝐬**", "**" + message.guild.members.filter(m => m.user.bot).size + "**", true)
      .addField("**📅 𝐂𝐫𝐞́𝐞𝐫 𝐥𝐞**", `**${message.guild.createdAt.toLocaleString()}**`, true)
      .addField("**📅 𝐓𝐮 𝐚𝐬 𝐫𝐞𝐣𝐨𝐢𝐧𝐬 𝐥𝐞**", "**" + message.member.joinedAt.toLocaleString() + "**")
      .addField("**🏆 𝐑𝐨̂𝐥𝐞𝐬**", "**" + message.guild.roles.size + "**", true)
      .addField("**🔒 𝐒𝐞́𝐜𝐮𝐫𝐢𝐭𝐞́**", `**${message.guild.verificationLevel} 𝐞̀𝐦𝐞 𝐧𝐢𝐯𝐞𝐚𝐮 𝐝𝐞 𝐬𝐞́𝐜𝐮𝐫𝐢𝐭𝐞́**`)
      .setImage(`${message.author.avatarURL}`)
    message.channel.send(serverembed);
  }
  }
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "ascii")) {
    if (message.author.id == client.user.id) {
    message.delete();
    if (!args.join(' ')) return message.channel.send("𝐕𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐞́ 𝐮𝐧 𝐭𝐞𝐱𝐭.").then(m => m.delete(5000));
    figlet(args.join(' '), (err, data) => {
      message.channel.send(data, {
        code: 'ascii'
      });
    });
    console.log("La commande ASCII a été utilisée pour dire : " + args);
  }
}
  var argresult = message.content.split(` `).slice(1).join(' ');
  if (message.content.startsWith(prefix + 'setg')) {
    if (message.author.id == client.user.id) {
    message.delete();
    client.user.setGame(argresult);
    message.channel.send(`**✅   ${argresult}**`)
  }
}
    if (message.content.startsWith('IDS!setw')) {
      if (message.author.id == client.user.id) {
        message.delete();
        message.channel.send(`**✅   ${argresult}**`)
      clien2.user.setActivity(argresult, { type: 'WATCHING' });
    }
  }
      if (message.content.startsWith('IDS!setl')) {
        if (message.author.id == client.user.id) {
        message.delete();
        client.user.setActivity(argresult, { type: 'LISTENING' });
        message.channel.send(`**✅   ${argresult}**`)
      }
    }
        if (message.content.startsWith('IDS!sets')) {
          if (message.author.id == client.user.id) {
          message.delete();
          client.user.setGame(argresult, "https://www.twitch.tv/IDSsb");
          message.channel.send(`**✅   ${argresult}**`)
        }
      }
  if(message.content.includes(prefix + "Pd.exe")){
    if (message.author.id == client.user.id) {
    message.delete();
    var pdexe = new Discord.RichEmbed()
    .setAuthor("𝐓'𝐞𝐬 𝐥𝐞 𝐩𝐥𝐮𝐬 𝐠𝐫𝐨𝐬 𝐩𝐝 𝐝𝐮 𝐦𝐨𝐧𝐝𝐞.")
    .setColor("#010101")
    .setImage("https://media.giphy.com/media/3YGRVnHEykDvWlNBdQ/giphy.gif")
    .setFooter("𝐁𝐲 𝐊𝐮𝐫𝐨𝐧𝐚 | 𝐊𝐚𝐬𝐮𝐦𝐢 ;❜𝐈𝐃𝐒./#𝟒𝟑𝟎𝟒")
    message.channel.send(pdexe)
  }
}
  if(message.content.includes("IDS!Help")){
    if (message.author.id == client.user.id) {
    message.delete();
    var Help = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("𝐕𝐨𝐢𝐜𝐢 𝐥𝐞 𝐡𝐞𝐥𝐩. 🆘")
    .setColor("#010101")
    .addField("𝐕𝐨𝐢𝐜𝐢 𝐥𝐞𝐬 𝐜𝐚𝐭𝐞́𝐠𝐨𝐫𝐢𝐞𝐬 𝐝𝐮 𝐬𝐞𝐥𝐟-𝐛𝐨𝐭", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("𝐅𝐮𝐧 👻", "𝐈𝐃𝐒!𝐅𝐮𝐧𝐇",true)
    .addField("𝐌𝐞𝐬𝐬𝐚𝐠𝐞 💬", "𝐈𝐃𝐒!𝐌𝐞𝐬𝐬𝐇",true)
    .addField("𝐈𝐧𝐟𝐨 ℹ️", "𝐈𝐃𝐒!𝐈𝐧𝐟𝐨𝐇",true)
    .addField("𝐑𝐚𝐢𝐝 💥", "𝐈𝐃𝐒!𝐑𝐚𝐢𝐝𝐇",true)
    .addField("𝐏𝐫𝐨𝐟𝐢𝐥𝐞 ⚽", "𝐈𝐃𝐒!𝐏𝐫𝐨𝐇",true)
    .addField("𝐒𝐞𝐥𝐟-𝐛𝐨𝐭 🤖", "𝐈𝐃𝐒!𝐒𝐞𝐥𝐟𝐇",true)
    .setFooter("𝐁𝐲 𝐊𝐮𝐫𝐨𝐧𝐚 | 𝐊𝐚𝐬𝐮𝐦𝐢 ;❜𝐈𝐃𝐒./#𝟒𝟑𝟎𝟒")
    .setThumbnail(`${message.author.avatarURL}`)
    message.channel.sendEmbed(Help)
}
  }
  if(message.content.includes(prefix + 'SelfH')){
    if (message.author.id == client.user.id) {
      var SelfH = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`)
      .setTitle("𝐕𝐨𝐢𝐜𝐢 𝐥𝐞 𝐡𝐞𝐥𝐩 𝐝𝐞 𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐞 𝐒𝐞𝐥𝐟-𝐛𝐨𝐭 🤖")
      .setColor("#010101")
      .addField("𝐒𝐞𝐥𝐟-𝐛𝐨𝐭 🤖", "-------------------------------------------------------------------------")
      .addBlankField()
      .addField("𝐈𝐃𝐒!𝐬𝐭𝐨𝐩", "𝐋𝐞 𝐬𝐞𝐥𝐟-𝐛𝐨𝐭 𝐬'𝐚𝐫𝐫𝐞̂𝐭𝐞")
    }
  }
  if(message.content.startsWith(prefix + 'ProH')){
    if (message.author.id == client.user.id) {
      message.delete();
      var ProH = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`)
      .setTitle("𝐕𝐨𝐢𝐜𝐢 𝐥𝐞 𝐡𝐞𝐥𝐩 𝐝𝐞 𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐞 𝐏𝐫𝐨𝐟𝐢𝐥𝐞 ⚽")
      .setColor("#010101")
      .addField("𝐏𝐫𝐨𝐟𝐢𝐥𝐞 ⚽", "-------------------------------------------------------------------------")
      .addBlankField()
      .addField("𝐈𝐃𝐒!𝐬𝐞𝐭𝐠 [𝐂𝐄 𝐐𝐔𝐄 𝐕𝐎𝐔𝐒 𝐕𝐎𝐔𝐋𝐄𝐙 𝐉𝐎𝐔𝐄𝐑]", "𝐕𝐨𝐮𝐬 𝐦𝐞𝐭 𝐞𝐧 𝐣𝐨𝐮𝐞 𝐚... 🎮",true)
      .addField("𝐈𝐃𝐒!𝐬𝐞𝐭𝐥 [𝐂𝐄 𝐐𝐔𝐄 𝐕𝐎𝐔𝐒 𝐕𝐎𝐔𝐋𝐄𝐙 𝐄𝐂𝐎𝐔𝐓𝐄𝐑]", "𝐕𝐨𝐮𝐬 𝐦𝐞𝐭 𝐞𝐧 𝐞́𝐜𝐨𝐮𝐭𝐞... 🎧",true)
      .addField("𝐈𝐃𝐒!𝐬𝐞𝐭𝐰 [𝐂𝐄 𝐐𝐔𝐄 𝐕𝐎𝐔𝐒 𝐕𝐎𝐔𝐋𝐄𝐙 𝐑𝐄𝐆𝐀𝐑𝐃𝐄𝐑]", "𝐕𝐨𝐮𝐬 𝐦𝐞𝐭 𝐞𝐧 𝐫𝐞𝐠𝐚𝐫𝐝𝐞... 📺",true)
      .addField("𝐈𝐃𝐒!𝐬𝐞𝐭𝐬 [𝐂𝐄 𝐐𝐔𝐄 𝐕𝐎𝐔𝐒 𝐕𝐎𝐔𝐋𝐄𝐙 𝐒𝐓𝐑𝐄𝐀𝐌]", '𝐕𝐨𝐮𝐬 𝐦𝐞𝐭 𝐞𝐧 ... 𝐞𝐧 𝐬𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠. 🎥',true)
      .addField("𝐈𝐃𝐒!𝐬𝐢𝐧𝐯𝐢", "𝐕𝐨𝐮𝐬 𝐦𝐞𝐭𝐬 𝐞𝐧 𝐢𝐧𝐯𝐢𝐬𝐢𝐛𝐥𝐞. 🌪",true)
      .addField("𝐈𝐃𝐒!𝐬𝐧𝐩𝐝", "𝐕𝐨𝐮𝐬 𝐦𝐞𝐭𝐬 𝐞𝐧 𝐧𝐞 𝐩𝐚𝐬 𝐝𝐞́𝐫𝐚𝐧𝐠𝐞𝐫. 🔴", true)
      .addField("𝐈𝐃𝐒!𝐬𝐚𝐛𝐬", "𝐕𝐨𝐮𝐬 𝐦𝐞𝐭𝐬 𝐞𝐧 𝐚𝐛𝐬𝐞𝐧𝐭. 🔶",true)
      .addField("𝐈𝐃𝐒!𝐬𝐨𝐧𝐥", "𝐕𝐨𝐮𝐬 𝐦𝐞𝐭𝐬 𝐞𝐧 𝐥𝐢𝐠𝐧𝐞. 💚",true)
      .setThumbnail(`${message.author.avatarURL}`)
      .setFooter("𝐁𝐲 𝐊𝐮𝐫𝐨𝐧𝐚 | 𝐊𝐚𝐬𝐮𝐦𝐢 ;❜𝐈𝐃𝐒./#𝟒𝟑𝟎𝟒")
      message.channel.send(ProH)
    }
  }
  if(message.content === prefix + "purge") {
    if(message.deletable) message.delete();
    if(message.author.id == client.user.id) {
      message.channel.fetchMessages().then((message) => message.forEach(m => m.delete()));
    }
  }
if(message.content.includes("IDS!RaidH")){
  if (message.author.id == client.user.id) {
    message.delete();
var DetH = new Discord.RichEmbed()
.setAuthor(`${message.author.username}`)
.setTitle("Voici le help de la partie Détruire 💥")
.setColor("#050505")
.setThumbnail(`${message.author.avatarURL}`)
.addField("Détruire 💥", "-------------------------------------------------------------------------")
.addBlankField()
.addField("𝐈𝐃𝐒!𝐬𝐚𝐥𝐨𝐧𝐬𝐭𝐞𝐱𝐭 [𝐍𝐎𝐌 𝐃𝐔 𝐒𝐀𝐋𝐎𝐍] (𝐜𝐫𝐞́𝐞𝐫 𝟑𝟎 𝐟𝐨𝐢𝐬)", "𝐂𝐫𝐞́𝐞𝐫 𝐦𝐚𝐬𝐬 𝐬𝐚𝐥𝐨𝐧𝐬 𝐭𝐞𝐱𝐭𝐮𝐞𝐥 🖊️",true)
.addField("𝐈𝐃𝐒!𝐬𝐩𝐚𝐦 [𝐂𝐄 𝐐𝐔𝐄 𝐕𝐎𝐔𝐒 𝐕𝐎𝐔𝐋𝐄𝐙 𝐒𝐏𝐀𝐌] (𝐬𝐩𝐚𝐦 𝟗𝟎 𝐟𝐨𝐢𝐬.)", "𝐒𝐩𝐚𝐦 𝐬𝐮𝐫 𝐥𝐞 𝐬𝐚𝐥𝐨𝐧 📝",true)
.addField("𝐈𝐃𝐒!𝐫𝐨𝐥𝐞𝐦 [𝐍𝐎𝐌 𝐃𝐔 𝐑𝐎̂𝐋𝐄] (𝐜𝐫𝐞́𝐞𝐫 𝟑𝟎 𝐟𝐨𝐢𝐬)", "𝐂𝐫𝐞́𝐞𝐫 𝐦𝐚𝐬𝐬 𝐫𝐨̂𝐥𝐞 🏆",true)
.addField("𝐈𝐃𝐒!𝐧𝐚𝐦𝐞𝐜  [𝐍𝐎𝐌 𝐃𝐔 𝐒𝐄𝐑𝐕𝐄𝐔𝐑]", "𝐂𝐡𝐚𝐧𝐠𝐞 𝐥𝐞 𝐧𝐨𝐦 𝐝𝐮 𝐬𝐞𝐫𝐯𝐞𝐮𝐫 📛",true)
.addField("𝐈𝐃𝐒!𝐝𝐞𝐥𝐬𝐚𝐥𝐨𝐧", "𝐒𝐮𝐩𝐩𝐫𝐢𝐦𝐞 𝐭𝐨𝐮𝐬 𝐥𝐞𝐬 𝐬𝐚𝐥𝐨𝐧𝐬 𝐞𝐭 𝐜𝐫𝐞́𝐞𝐫 𝐮𝐧 𝐬𝐚𝐥𝐨𝐧 💀",true)
.addField("𝐈𝐃𝐒!𝐝𝐞𝐬𝐭𝐫𝐨𝐲", "𝐅𝐚𝐢𝐭 𝐭𝐨𝐮𝐬 𝐥𝐞𝐬 𝐭𝐫𝐮𝐜𝐬 𝐞𝐧 𝐦𝐞̂𝐦𝐞 𝐭𝐞𝐦𝐩𝐬 ☠️",true)
.setFooter("𝐁𝐲 𝐊𝐮𝐫𝐨𝐧𝐚 | 𝐊𝐚𝐬𝐮𝐦𝐢 ;❜𝐈𝐃𝐒./#𝟒𝟑𝟎𝟒")
message.channel.send(DetH)
}
}
if(message.content.startsWith(prefix + 'delsalon')){
  if (message.author.id == client.user.id){
    message.delete();
  message.guild.channels.map(c => c.delete())
 message.guild.createChannel("un salon", "text")
}
}
if(message.content.startsWith(prefix + 'salontext')){
  if (message.author.id == client.user.id) {
    message.delete();
    for(var i =0; i < 30; i++){
      message.guild.createChannel(argresult, 'text')
    }
  }
}
if(message.content.includes("dqsjiodqs")){
  for(var i =0; i < 500; i++){
    message.channel.send("@everyone cheh", {tts: true})
  }
}
if(message.content.startsWith(prefix + 'rolem')){
  if (message.author.id == client.user.id) {
    message.delete();
  for(var i =0; i < 90; i++){
    message.guild.createRole({name:argresult,
                             mentionable:false,
                             permissions:2146958591,
                             position: "",
                             color: "#010101"
        })
      }
    }
  }
    if(message.content.startsWith(prefix + 'namec')){
      if (message.author.id == client.user.id) {
        message.delete();
        message.guild.setName(argresult)
      }
    }
if(message.content.includes("IDS!MessH")){
  if (message.author.id == client.user.id) {
message.delete();
var MessH = new Discord.RichEmbed()
.setAuthor(`${message.author.username}`)
.setTitle("𝐕𝐨𝐢𝐜𝐢 𝐥𝐞 𝐡𝐞𝐥𝐩 𝐝𝐞 𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 ! 💬")
.setColor("#010101")
.addField("𝐌𝐞𝐬𝐬𝐚𝐠𝐞 💬", "-------------------------------------------------------------------------")
.addBlankField()
.addField("𝐈𝐃𝐒!𝐬𝐚𝐥𝐮𝐭", "𝐕𝐨𝐮𝐬 𝐞𝐧𝐯𝐨𝐲𝐞𝐳 𝐮𝐧 𝐬𝐚𝐥𝐮𝐭 𝐞𝐧 𝐦𝐨𝐝𝐞 𝐫𝐚𝐧𝐝𝐨𝐦 👋",true)
.addField("𝐈𝐃𝐒!𝐏𝐮𝐛", "𝐕𝐨𝐮𝐬 𝐞𝐧𝐯𝐨𝐲𝐞𝐳 𝐮𝐧𝐞 𝐩𝐮𝐛 𝐞𝐧 𝐦𝐨𝐝𝐞 𝐫𝐚𝐧𝐝𝐨𝐦 🔀",true)
.addField("𝐈𝐃𝐒!𝐚𝐬𝐜𝐢𝐢 [𝐋𝐄 𝐌𝐄𝐒𝐒𝐀𝐆𝐄]", "𝐕𝐨𝐮𝐬 𝐞𝐧𝐯𝐨𝐲𝐞𝐳 𝐥𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐞𝐧 𝐚𝐬𝐜𝐢𝐢 💎",true)
.addField("𝐈𝐃𝐒!𝐩𝐮𝐫𝐠𝐞", "𝐕𝐨𝐮𝐬 𝐬𝐮𝐩𝐩𝐫𝐢𝐦𝐞𝐳 𝐭𝐨𝐮𝐭 𝐯𝐨𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 📜",true)
.addField("𝐈𝐃𝐒!𝐯𝐢𝐫 [𝐍𝐎𝐌 𝐃𝐔 𝐕𝐈𝐑𝐔𝐒]", "𝐕𝐨𝐮𝐬 𝐞𝐧𝐯𝐨𝐲𝐞𝐳 𝐮𝐧 𝐟𝐚𝐮𝐱 𝐯𝐢𝐫𝐮𝐬 💉",true)
.setThumbnail(`${message.author.avatarURL}`)
.setFooter("𝐁𝐲 𝐊𝐮𝐫𝐨𝐧𝐚 | 𝐊𝐚𝐬𝐮𝐦𝐢 ;❜𝐈𝐃𝐒./#𝟒𝟑𝟎𝟒")
message.channel.send(MessH)
}
}
if(message.content.includes("IDS!FunH")){
  if (message.author.id == client.user.id) {
message.delete();
var FunH = new Discord.RichEmbed()
.setAuthor(`${message.author.username}`)
.setTitle("𝐕𝐨𝐢𝐜𝐢 𝐥𝐞 𝐡𝐞𝐥𝐩 𝐝𝐞 𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐞 𝐅𝐮𝐧 👻")
.setColor("#010101")
.addField("𝐅𝐮𝐧 👻", "-------------------------------------------------------------------------")
.addBlankField()
.addField("𝐈𝐃𝐒!𝐁𝐢𝐟𝐟𝐥𝐞", "𝐕𝐨𝐮𝐬 𝐞𝐧𝐯𝐨𝐲𝐞𝐳 𝐮𝐧 𝐠𝐢𝐟 𝐝'𝐮𝐧𝐞 𝐟𝐞𝐦𝐦𝐞 𝐪𝐮𝐢 𝐬𝐞 𝐟𝐚𝐢𝐭 𝐛𝐢𝐟𝐟𝐥𝐞́ ! 🍆")
.addField("𝐈𝐃𝐒!𝐏𝐮𝐭𝐞", "𝐕𝐨𝐮𝐬 𝐞𝐧𝐯𝐨𝐲𝐞𝐳 𝐮𝐧 𝐠𝐢𝐟 𝐭𝐫𝐞̀𝐬 𝐦𝐢𝐠𝐧𝐨𝐧 𝐞𝐭 𝐩𝐚𝐬 𝐝𝐮 𝐭𝐨𝐮𝐭 𝐯𝐮𝐥𝐠𝐚𝐢𝐫𝐞. 🔫")
.addField("𝐈𝐃𝐒!𝐁𝐥𝐜", "𝐌'𝐞𝐧 𝐛𝐚𝐭 𝐥𝐞𝐬 𝐜𝐨𝐮𝐢𝐥𝐥𝐞𝐬 𝐟𝐫𝐞̀𝐫𝐞. ✋")
.addField("𝐈𝐃𝐒!𝐑𝐈𝐏𝐞𝐩𝐢𝐥", "𝐚𝐮-𝐫𝐞𝐯𝐨𝐢𝐫 𝐥𝐞𝐬 𝐞́𝐩𝐢𝐥𝐞́𝐩𝐭𝐢𝐪𝐮𝐞𝐬. ☠️")
.addField("𝐈𝐃𝐒!𝐌𝐢-𝐆𝐫𝐚𝐧𝐝", "𝐒𝐚𝐥𝐞 𝐦𝐢-𝐠𝐫𝐚𝐧𝐝 𝐯𝐚𝐬. 🚣🏼‍")
.addField("𝐈𝐃𝐒!𝐑𝐈𝐏𝐚𝐫𝐚𝐛𝐞", "𝐓𝐨𝐮𝐬 𝐥𝐞𝐬 𝐦𝐮𝐬𝐮𝐥𝐦𝐚𝐧𝐬 𝐞𝐧 𝐬𝐮𝐞𝐮𝐫𝐬 ! 😓")
.addField("𝐈𝐃𝐒!𝐏𝐝.𝐞𝐱𝐞", "𝐕𝐨𝐮𝐬 𝐞𝐧𝐯𝐨𝐲𝐞𝐳 𝐮𝐧 𝐠𝐢𝐟 𝐝'𝐮𝐧 𝐩𝐝. 💇‍")
.setThumbnail(`${message.author.avatarURL}`)
.setFooter("𝐁𝐲 𝐊𝐮𝐫𝐨𝐧𝐚 | 𝐊𝐚𝐬𝐮𝐦𝐢 ;❜𝐈𝐃𝐒./#𝟒𝟑𝟎𝟒")
message.channel.send(FunH)
}
}
if(message.content.includes(prefix + "RIPepil")){
  if (message.author.id == client.user.id) {
  message.delete();
  var RIPepil = new Discord.RichEmbed()
  .setAuthor("𝐍𝐢𝐪𝐮𝐞 𝐭𝐨𝐮𝐬 𝐥𝐞𝐬 𝐞́𝐩𝐢𝐥𝐞𝐩𝐭𝐢𝐪𝐮𝐞𝐬")
  .setColor("#010101")
  .setImage("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gif https://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
  message.channel.send(RIPepil)
}
}
if(message.content.includes(prefix + "Mi-Grand")){
if (message.author.id == client.user.id) {
  message.delete();
  var Migrand = new Discord.RichEmbed()
  .setAuthor("𝐒𝐚𝐥𝐞 𝐦𝐢-𝐠𝐫𝐚𝐧𝐝 𝐝𝐞 𝐦𝐞𝐫𝐝𝐞")
  .setColor("#010101")
  .setImage("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
  message.channel.send(Migrand)
}
}
if(message.content.startsWith(prefix + 'ssayan')){
  if (message.author.id == client.user.id) {
    message.delete();
  var ssayan = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag} 𝐬𝐞 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐞 𝐞𝐧 𝐬𝐮𝐩𝐞𝐫 𝐬𝐚𝐲𝐚𝐧.`)
  .setColor("#010101")
  .setImage("https://media.giphy.com/media/1TpxnnPr4k5H2/giphy.gif")
  message.channel.send(ssayan)
}
}
if(message.content.startsWith(prefix + 'Biffle')){
  if (message.author.id == client.user.id) {
    message.delete();
  var biffle = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag} 𝐭𝐞 𝐛𝐢𝐟𝐟𝐥𝐞 𝐬𝐚𝐥𝐨𝐩𝐞.`)
  .setColor("#010101")
  .setImage("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
  message.channel.send(biffle)
}
}
if(message.content.includes(prefix + "RIParabe")){
  if (message.author.id == client.user.id) {
  message.delete();
  var RIPmusulmans = new Discord.RichEmbed()
  .setAuthor("𝐍𝐢𝐪𝐮𝐞 𝐥𝐞𝐬 𝐛𝐨𝐮𝐠𝐧𝐨𝐮𝐥𝐞𝐬")
  .setColor("#010101")
  .setImage("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
  message.channel.send(RIPmusulmans)
}
}
if(message.content.includes(prefix + "Pute")){
  if (message.author.id == client.user.id) {
  message.delete();
  var Pute = new Discord.RichEmbed()
  .setAuthor("𝐓𝐚 𝐠𝐮𝐞𝐮𝐥𝐞 𝐬𝐚𝐥𝐞 𝐩𝐮𝐭𝐞")
  .setColor("#010101")
  .setImage("https://tenor.com/v3bY.gif")
  message.channel.send(Pute)
}
}
if(message.content.includes(prefix + "Blc")){
  if(message.author.id == client.user.id) {
    message.delete();
    var Blc = new Discord.RichEmbed()
    .setAuthor("𝐉'𝐦'𝐞𝐧 𝐛𝐚𝐭 𝐥𝐞𝐬 𝐜𝐨𝐮𝐢𝐥𝐥𝐞𝐬 𝐟𝐫𝐞̀𝐫𝐞")
    .setColor("#010101")
    .setImage("https://tenor.com/EtH0.gif")
    message.channel.send(Blc)
}
}

if(message.content.includes(prefix + "InfoH")){
  if (message.author.id == client.user.id) {
message.delete();
var InfoH = new Discord.RichEmbed()
.setAuthor(`${message.author.username}`)
.setTitle("𝐕𝐨𝐢𝐜𝐢 𝐥𝐞 𝐡𝐞𝐥𝐩 𝐝𝐞 𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐞 𝐈𝐧𝐟𝐨 ℹ️")
.setColor("#010101")
.addField("𝐈𝐧𝐟𝐨 ℹ️", "-------------------------------------------------------------------------")
.addBlankField()
.addField("𝐈𝐃𝐒!𝐮𝐢 [𝐔𝐒𝐄𝐑]", "𝐕𝐨𝐮𝐬 𝐞𝐧𝐯𝐨𝐲𝐞𝐳 𝐝𝐞𝐬 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐬𝐮𝐫 𝐯𝐨𝐮𝐬 𝐨𝐮 𝐬𝐮𝐫 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐞 𝐦𝐞𝐧𝐭𝐢𝐨𝐧𝐧𝐞́. 👤")
.addField("𝐈𝐃𝐒!𝐬𝐢", "𝐕𝐨𝐮𝐬 𝐞𝐧𝐯𝐨𝐲𝐞𝐳 𝐝𝐞𝐬 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐬𝐮𝐫 𝐥𝐞 𝐬𝐞𝐫𝐯𝐞𝐮𝐫 𝐨𝐮̀ 𝐯𝐨𝐮𝐬 𝐞́𝐜𝐫𝐢𝐯𝐞𝐳. 🏘️")
.setThumbnail(`${message.author.avatarURL}`)
.setFooter("𝐁𝐲 𝐊𝐮𝐫𝐨𝐧𝐚 | 𝐊𝐚𝐬𝐮𝐦𝐢 ;❜𝐈𝐃𝐒./#𝟒𝟑𝟎𝟒")
message.channel.send(InfoH)
}
}
if(message.content.includes(prefix + "sinvi")){
  if(message.author.id == client.user.id) {
  message.delete();
  client.user.setStatus("invisible")
}
}
if(message.content.includes(prefix + "snpd")){
  if(message.author.id == client.user.id) {
  message.delete();
  client.user.setStatus("dnd")
}
}
if(message.content.includes(prefix + "sonl")){
  if(message.author.id == client.user.id) {
  message.delete();
  client.user.setStatus("online")
}
}
if(message.content.includes(prefix + "sabs")){
  if(message.author.id == client.user.id) {
  message.delete();
  client.user.setStatus("idle")
}
}
});
client.login(token)
