const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "200 Subscribers Road",
        state: "Creating Discord bots",
        startTimestamp: new Date(),
        largeImageKey: "large",
        largeImageText: "Sub 2 UltraX",
        smallImageKey: "small",
        smallImageText: "Road to 200 subs",
        buttons : [{label : "Subscribe" , url : "https://youtube.com/c/UltraX1"},{label : "Discord" , url : "https://discord.gg/7kMWXGTxCD"}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '809721690225115187'
})