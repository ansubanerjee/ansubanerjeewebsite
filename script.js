const frame = document.getElementById("ytEmbed");
const channelID = "UC4QZktNr06L58Z3bIBdeULw";
var guid="";
            
fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=" + channelID))
    .then(response => response.json())
    .then(data => {
        guid = data["items"][0]["guid"]
        const embedURL = "https://youtube.com/embed/" + guid.replace("yt:video:", "")
        frame.src = embedURL;
    })
    .catch(console.error);

