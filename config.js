const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22383571008";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "92xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSUHAIL_23_31_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDgxLFxuICAgICAgICA1NixcbiAgICAgICAgNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkzLFxuICAgICAgICA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDYwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MixcbiAgICAgICAgMTg3LFxuICAgICAgICA4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDc0LFxuICAgICAgICAzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MixcbiAgICAgICAgODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicTJHd0dxc3p3RkdZYW9raG1Rak44OTMyc0htbjFYRFVwelEzVm55UnJ1ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjM4MzU3MTAwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDQwMjkzODIyNkZGNTJGMTQ1MTIyRUVBNUY5NzU5ODdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNDY4NjYyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIzODM1NzEwMDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFEM0U0QjNDREU0Q0IzNDVEQTM3MzNBNDE0NUQ5RkJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQ2ODY2M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxMVdlejNEMVJSU0drSjNGSlBwbHV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJkZWRiNDFmLTc1ZDctNDBlOC1hYzdjLTJmMGJmMjU1ZTZiMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICAxMzIsXG4gICAgICAyNTUsXG4gICAgICAxOTMsXG4gICAgICAxOTcsXG4gICAgICAyMjMsXG4gICAgICAyMDcsXG4gICAgICA5MyxcbiAgICAgIDYwLFxuICAgICAgMTY5LFxuICAgICAgMTY5LFxuICAgICAgMTkwLFxuICAgICAgMTM3LFxuICAgICAgMjIsXG4gICAgICAyNDMsXG4gICAgICAxOTEsXG4gICAgICAxNzEsXG4gICAgICAxMjcsXG4gICAgICAxODYsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgOTYsXG4gICAgICAxMDUsXG4gICAgICA2MyxcbiAgICAgIDUsXG4gICAgICA0MSxcbiAgICAgIDIwNixcbiAgICAgIDI0NSxcbiAgICAgIDU1LFxuICAgICAgMTUwLFxuICAgICAgMjgsXG4gICAgICAyMzMsXG4gICAgICA0MyxcbiAgICAgIDEwOSxcbiAgICAgIDIwOSxcbiAgICAgIDE4MCxcbiAgICAgIDM2LFxuICAgICAgMTMwLFxuICAgICAgMjQzLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRktYRlhBUFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMzgzNTcxMDA4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNjA5NDMzMjQ5Nzk2NDo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuWNjSTwnZOu8J2UgvCdk63wnZO48J2TvuKBuOWNjVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04vRW9Zb0VFSzZTcTdVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiKzZFcHFSNXhXMGtVL3FyaGdEUTJpMEl5OWNVUU96ZlZlMlc0Qnk4Ky95UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJZ1I1dGxSQWtYZzZ0RVowL09aTnNXRUFxZFdPQlZzcWNkR09BL2hNbWJvOVFKVDkySXJaeHJETjNyYWp5UURiZFlXQXYyUWg0YkdPaCtjakwvSHlBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUUXRwdWEvaUFwTUxGd1RJcmh0cnF2MHFLYXZ5RmUvRUVIVm9HWGpHVmkyL2lTWG5WdzNCaGhoWUZQaVo0MC8rWHFtTExQeFZmWUc5c1RSZW5IbjNqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjM4MzU3MTAwODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQ2ODY1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpPeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSk95Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidXpCVHRvWXJEQWF4YWpMQjJyREpsbnUxZ2p5NHZNaXF4aWtIVnZPZXEwaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDk1MjYyODE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxMDY4MTE4OTFcIn0iCn0=SION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "♤",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
