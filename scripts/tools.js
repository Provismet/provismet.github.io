const GITHUB_LOGO = '<img src="assets/github-mark-white.svg">';

class Tool {
    constructor (name, description, icon, githubName) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.githubName = githubName;
        this.github = "https://github.com/Provismet/" + githubName;
    }

     createContentItem () {
        let newDiv = document.createElement("div");
        newDiv.className = "contentItem";

        let contentIcon = document.createElement("img");
        contentIcon.src = this.icon;
        contentIcon.className = "contentIcon"

        newDiv.appendChild(contentIcon);

        let contentText = document.createElement("div");
        contentText.className = "contentText";

        let contentTextTitle = document.createElement("h2");
        contentTextTitle.textContent = this.name;

        let contentTextDescription = document.createElement("p");
        contentTextDescription.innerHTML = this.description;

        contentText.appendChild(contentTextTitle);

        let badgeDiv = document.createElement("div");

        let githubBadge = document.createElement("img");
        githubBadge.className = "downloadBadge";
        githubBadge.alt = "Github Downloads";
        githubBadge.src = "https://img.shields.io/github/downloads/Provismet/" + this.githubName + "/total?style=flat-square&logo=github&labelColor=7E0EB4&color=F6F6F6";
        badgeDiv.appendChild(githubBadge);
        badgeDiv.appendChild(document.createTextNode("\u00A0\u00A0"));

        contentTextTitle.appendChild(badgeDiv);

        contentText.appendChild(contentTextDescription);
        newDiv.appendChild(contentText)

        let vDiv = document.createElement("div");
        vDiv.className = "vDiv";
        newDiv.appendChild(vDiv);

        let download = document.createElement("div");
        download.className = "download";

        let githubPage = document.createElement("a");
        githubPage.href = this.github;
        githubPage.innerHTML = GITHUB_LOGO;
        download.appendChild(githubPage);

        newDiv.appendChild(download);

        return newDiv;
    }
}

const TOOLS_LIST = [
    new Tool(
        "Modrinth Modpack Installer",
        "A simple installer that builds a Minecraft profile from a <em>.mrpack</em> file.",
        "assets/ToolIcons/Modpack.png",
        "Modrinth-Modpack-Installer"
    ),
    new Tool(
        "LilyPanel",
        "Python GUI for Inochi Session, allowing users to more easily manage their toggles.",
        "assets/ToolIcons/LilyPanel.png",
        "LilyPanel"
    )
];

function onLoad () {
    let contentList = document.getElementById("contentList");
    contentList.innerHTML = "";

    for (let tool of TOOLS_LIST) {
        contentList.appendChild(tool.createContentItem());
        contentList.appendChild(document.createElement("br"));
    }
}
