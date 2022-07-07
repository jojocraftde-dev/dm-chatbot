module.exports.run = async(client, message, args) => {
let db = client.db
if (!message.member.hasPermission("ADMINSTRATOR")) return message.channel.send(client.em("", ":x: Du hast nicht die Berechtugung dazu!!! :("))
if(!args[0]) return message.channel.send(client.em("", " <a:warn:906791748154568725> Wie wäre es, wenn du **einen Kanal erwähnst oder eine Kanal-ID angibst.** :/"))
let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
if (!channel) return message.channel.send(client.em('', '<a:warn:906791748154568725> Das ist kein Kanal'))

db.set(`${message.guild.id}_chatchannel`, `${channel.id}`)
message.channel.send(client.em('Chat-Kanal', `<a:yes:906785808940425267> Der Chatkanal dieses Servers ist eingestellt auf ${channel}`))
}
module.exports.config = {
  name: 'setchat',
  aliases: ['sc']
}