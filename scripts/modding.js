const GITHUB_LOGO = '<img src="assets/github-mark-white.svg">';
const MODRINTH_LOGO = '<img src="assets/modrinth.svg">';
const CURSEFORGE_LOGO = '<img src="assets/curseforge.svg">';

class Mod {
    constructor (name, description, icon, github, modrinth, curseforge, tags, series) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.github = github;
        this.modrinth = modrinth;
        this.curseforge = curseforge;
        this.tags = tags;
        this.series = series;
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

        let rowBreak = document.createElement("div");
        rowBreak.className = "rowBreak";

        let modrinthPage = document.createElement("a");
        modrinthPage.href = this.modrinth;
        modrinthPage.innerHTML = MODRINTH_LOGO;

        let curseforgePage = document.createElement("a");
        curseforgePage.href = this.curseforge;
        curseforgePage.innerHTML = CURSEFORGE_LOGO;

        download.appendChild(githubPage);
        download.appendChild(rowBreak);
        download.appendChild(modrinthPage);
        download.appendChild(document.createTextNode("\u00A0\u00A0"));
        download.appendChild(curseforgePage);
        newDiv.appendChild(download);

        return newDiv;
    }

    hasTag (tag) {
        if (tag == null || tag == undefined) return true;
        else return this.tags.includes(tag);
    }

    isSeries (series) {
        if (series == null || series == undefined) return true;
        else return this.series == series;
    }
}

const MOD_LIST = [
    new Mod(
        "Tooltip Scroll",
        "The <em>first</em> tooltip scrolling mod for Fabric.",
        "assets/ModIcons/TooltipScroll.png",
        "https://github.com/Provismet/Tooltip-Scroll-Fabric",
        "https://modrinth.com/mod/tooltip-scroll",
        "https://www.curseforge.com/minecraft/mc-mods/tooltip-scroll-fabric",
        ["QoL", "client-side"],
        null
    ),
    new Mod(
        "Dynamic Fullbright",
        "An alternative approach to a \"fullbright\" mod. This mod scales and clamps light levels to ranges set by the user, with a goal to maintain lighting ambience for custom builds.",
        "assets/ModIcons/DynamicFullbright.png",
        "https://github.com/Provismet/Dynamic-Fullbright",
        "https://modrinth.com/mod/dynamic-fullbright",
        "https://www.curseforge.com/minecraft/mc-mods/dynamic-fullbright",
        ["QoL", "client-side"],
        null
    ),
    new Mod(
        "Extra Damage Enchantments",
        "Adds 5 additional entity groups and weapon enchantments that deal additional damage to them. This is a family of mods offering extensions to Neat and Origins.",
        "assets/ModIcons/ExtraDE.png",
        "https://github.com/Provismet/Extra-Damage-Enchantments",
        "https://modrinth.com/mod/extra-damage-enchantments",
        "https://www.curseforge.com/minecraft/mc-mods/extra-damage-enchantments",
        ["compatibility", "content", "game mechanics", "client-server"],
        null
    ),
    new Mod(
        "Provi's Origins",
        "An Origins addon that brings 9 new Origins and many unique and custom power types.",
        "assets/ModIcons/ProviOrigins.png",
        "https://github.com/Provismet/Provi-Origins",
        "https://modrinth.com/mod/provis-origins",
        "https://www.curseforge.com/minecraft/mc-mods/provis-origins",
        ["content", "client-server", "game mechanics"],
        "Provi Projects"
    ),
    new Mod(
        "Dual Swords",
        "Yet another dual wielding mod. This time with a focus on risk-versus-reward parry/riposte gameplay.",
        "assets/ModIcons/DualSwords.png",
        "https://github.com/Provismet/Dual-Swords",
        "https://modrinth.com/mod/dual-swords",
        "https://www.curseforge.com/minecraft/mc-mods/dual-swords",
        ["content", "game mechanics", "client-server"],
        null
    ),
    new Mod(
        "Virtual Motion Capture for Minecraft",
        "Implements the VMC protocol into Minecraft, allowing the client to send BlendShapes and manipulate vtuber models.",
        "assets/ModIcons/VMCMC.png",
        "https://github.com/Provismet/VMC-MC",
        "https://modrinth.com/mod/virtual-motion-capture-for-minecraft",
        "https://www.curseforge.com/minecraft/mc-mods/vmc-mc",
        ["client-side"],
        null
    )
]

function renderList () {
    let tag = document.getElementById("tagSelect").value;
    if (tag == "null") tag = null;

    let series = document.getElementById("seriesSelect").value;
    if (series == "null") series = null;

    let contentList = document.getElementById("contentList");
    contentList.innerHTML = "";
    
    for (let mod of MOD_LIST) {
        if (mod.hasTag(tag) && mod.isSeries(series)) {
            contentList.appendChild(mod.createContentItem());
            contentList.appendChild(document.createElement("br"));
        }
    }
}

function getAllTags () {
    let tags = [];

    for (let mod of MOD_LIST) {
        for (let tagName of mod.tags) {
            if (!tags.includes(tagName)) {
                tags.push(tagName);
            }
        }
    }
    tags.sort();

    return tags;
}

function getAllSeries () {
    let series = [];

    for (let mod of MOD_LIST) {
        if (!series.includes(mod.series) && mod.series != null) {
            series.push(mod.series);
        }
    }
    series.sort();

    console.log(series);
    return series;
}

function onLoad () {
    let tagSelect = document.getElementById("tagSelect");
    for (let tagName of getAllTags()) {
        let newOption = document.createElement("option");
        newOption.value = tagName;
        newOption.innerHTML = tagName;

        tagSelect.appendChild(newOption);
    }

    let seriesSelect = document.getElementById("seriesSelect");
    for (let seriesName of getAllSeries()) {
        let newOption = document.createElement("option");
        newOption.value = seriesName;
        newOption.innerHTML = seriesName;

        seriesSelect.appendChild(newOption);
    }

    renderList();
}
