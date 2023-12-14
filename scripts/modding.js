const GITHUB_LOGO = '<img src="assets/github-mark-white.svg">';
const MODRINTH_LOGO = '<img src="assets/modrinth.svg">';
const CURSEFORGE_LOGO = '<img src="assets/curseforge.svg">';

class Mod {
    constructor (name, description, icon, github, modrinth, curseforge, modrinthID, curseforgeID, tags, series) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.github = github;
        this.modrinth = modrinth;
        this.curseforge = curseforge;
        this.modrinthID = modrinthID;
        this.curseforgeID = curseforgeID;
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

        let badgeDiv = document.createElement("div");

        if (this.modrinthID != null) {
            let modrinthBadge = document.createElement("img");
            modrinthBadge.className = "downloadBadge";
            modrinthBadge.alt = "Modrinth Downloads";
            modrinthBadge.src = "https://img.shields.io/modrinth/dt/" + this.modrinthID + "?style=flat-square&logo=modrinth&labelColor=7E0EB4&color=F6F6F6"
            badgeDiv.appendChild(modrinthBadge);
            badgeDiv.appendChild(document.createTextNode("\u00A0\u00A0"));
        }

        if (this.curseforgeID != null) {
            let curseforgeBadge = document.createElement("img");
            curseforgeBadge.className = "downloadBadge";
            curseforgeBadge.alt = "CurseForge Downloads";
            curseforgeBadge.src = "https://img.shields.io/curseforge/dt/" + this.curseforgeID + "?style=flat-square&logo=curseforge&labelColor=7E0EB4&color=F6F6F6";

            badgeDiv.appendChild(curseforgeBadge);
            badgeDiv.appendChild(document.createTextNode("\u00A0\u00A0"));
        }

        if (this.modrinthID != null || this.curseforgeID != null) contentTextTitle.appendChild(badgeDiv);

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

        if (this.modrinth != null || this.curseforge != null) {
            let rowBreak = document.createElement("div");
            rowBreak.className = "rowBreak";
            download.appendChild(rowBreak);
        }

        if (this.modrinth != null) {
            let modrinthPage = document.createElement("a");
            modrinthPage.href = this.modrinth;
            modrinthPage.innerHTML = MODRINTH_LOGO;
            download.appendChild(modrinthPage);
        }

        if (this.curseforge != null) {
            if (this.modrinth != null) download.appendChild(document.createTextNode("\u00A0\u00A0"));

            let curseforgePage = document.createElement("a");
            curseforgePage.href = this.curseforge;
            curseforgePage.innerHTML = CURSEFORGE_LOGO;
            download.appendChild(curseforgePage);
        }

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

class Series {
    constructor (name, description) {
        this.name = name;
        this.description = description;
    }

    getElement () {
        let div = document.createElement("div");
        div.className = "seriesDesc";

        let title = document.createElement("h1");
        title.textContent = this.name;

        let description = document.createElement("p");
        description.innerHTML = this.description;

        div.appendChild(title);
        div.appendChild(description);

        return div;
    }
}

const SERIES_OBJ = {
    "Provi's Projects": new Series("Provi's Projects", "A collection of mods that I've chosen to brand under my name.<br>These are the mods that I consider to be some of my best work; expect them to be complex, large, or simply very impactful."),
    "???": new Series("???", "Hold up, let me cook. Something interesting is coming...")
};

const MOD_LIST = [
    new Mod(
        "Tooltip Scroll",
        "The <em>first</em> tooltip scrolling mod for Fabric.",
        "assets/ModIcons/TooltipScroll.png",
        "https://github.com/Provismet/Tooltip-Scroll-Fabric",
        "https://modrinth.com/mod/tooltip-scroll",
        "https://www.curseforge.com/minecraft/mc-mods/tooltip-scroll-fabric",
        "wySVd6d8",
        "495546",
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
        "tF7P4IlX",
        "867410",
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
        "d2UQqqct",
        "740021",
        ["compatibility", "content", "game mechanics", "client-server"],
        SERIES_OBJ["???"]
    ),
    new Mod(
        "Provi's Origins",
        "An Origins addon that brings 9 new Origins and many unique and custom power types.",
        "assets/ModIcons/ProviOrigins.png",
        "https://github.com/Provismet/Provi-Origins",
        "https://modrinth.com/mod/provis-origins",
        "https://www.curseforge.com/minecraft/mc-mods/provis-origins",
        "uze1qMee",
        "881653",
        ["content", "client-server", "game mechanics"],
        SERIES_OBJ["Provi's Projects"]
    ),
    new Mod(
        "Dual Swords",
        "Yet another dual wielding mod. This time with a focus on risk-versus-reward parry/riposte gameplay.",
        "assets/ModIcons/DualSwords.png",
        "https://github.com/Provismet/Dual-Swords",
        "https://modrinth.com/mod/dual-swords",
        "https://www.curseforge.com/minecraft/mc-mods/dual-swords",
        "3VQn6Vwv",
        "893211",
        ["content", "game mechanics", "client-server"],
        SERIES_OBJ["???"]
    ),
    new Mod(
        "Virtual Motion Capture for Minecraft",
        "Implements the VMC protocol into Minecraft, allowing the client to send BlendShapes and manipulate vtuber models.",
        "assets/ModIcons/VMCMC.png",
        "https://github.com/Provismet/VMC-MC",
        "https://modrinth.com/mod/virtual-motion-capture-for-minecraft",
        "https://www.curseforge.com/minecraft/mc-mods/vmc-mc",
        "ub8B8TcT",
        "922189",
        ["client-side"],
        null
    ),
    new Mod(
        "Provi's Health Bars",
        "Adds sleek and expansive health bars to Minecraft. Intended as a spiritual successor to ToroHealth, which is no longer officially maintained.",
        "assets/ModIcons/ProviHealth.png",
        "https://github.com/Provismet/ProviHealth",
        "https://modrinth.com/mod/provis-health-bars",
        "https://www.curseforge.com/minecraft/mc-mods/provihealth",
        "4wDQsby8",
        "945133",
        ["client-side", "QoL"],
        SERIES_OBJ["Provi's Projects"]
    ),
    new Mod(
        "Provi's Monumenta Modpack",
        "An optimised and feature-complete modpack for the Minecraft server <a href=https://playmonumenta.com/>Monumenta</a>.<br>Despite the name, this is not part of the \"Provi's Projects\" series.",
        "assets/ModIcons/monumenta.png",
        "https://github.com/Provismet/Monumenta-Modpack",
        "https://modrinth.com/modpack/provis-monumenta-modpack",
        null,
        "uOOyjFmb",
        null,
        ["modpack", "client-side", "QoL"],
        null
    )
];

function renderList () {
    let tag = document.getElementById("tagSelect").value;
    if (tag == "null") tag = null;

    let series = document.getElementById("seriesSelect").value;
    if (series == "null") series = null;
    else series = SERIES_OBJ[series];

    renderListFromParams(tag, series);
}

function renderListFromParams (tag, series) {
    let contentList = document.getElementById("contentList");
    contentList.innerHTML = "";

    if (series != null) {
        contentList.appendChild(series.getElement());
        contentList.appendChild(document.createElement("br"));
    }
    
    for (let mod of MOD_LIST) {
        if (mod.hasTag(tag) && mod.isSeries(series)) {
            contentList.appendChild(mod.createContentItem());
            contentList.appendChild(document.createElement("br"));
        }
    }
}

function getTagFromURL () {
    const query = new URLSearchParams(window.location.search);
    
    let tag = null;
    if (query.has("tag")) tag = query.get("tag");
    if (tag == "null") tag = null;

    return tag;
}

function getSeriesFromURL () {
    const query = new URLSearchParams(window.location.search);

    let series = null;
    if (query.has("series")) series = query.get("series");
    if (series == "null") series = null;
    else series = SERIES_OBJ[series];

    return series;
}

function readURL () {
    renderListFromParams(getTagFromURL(), getSeriesFromURL());
}

function setURL () {
    let tag = document.getElementById("tagSelect").value;
    let series = document.getElementById("seriesSelect").value;

    const query = new URLSearchParams(window.location.search);

    if (query.has("tag")) query.set("tag", tag);
    else query.append("tag", tag);

    if (query.has("series")) query.set("series", series);
    else query.append("series", series);

    window.location.search = query.toString();
    readURL();
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

    for (let seriesObj in SERIES_OBJ) {
        series.push(seriesObj);
    }

    return series;
}

function onLoad () {
    let selectedTag = getTagFromURL();
    let tagSelect = document.getElementById("tagSelect");
    for (let tagName of getAllTags()) {
        let newOption = document.createElement("option");
        newOption.value = tagName;
        newOption.innerHTML = tagName;
        if (selectedTag == tagName) newOption.selected = true;

        tagSelect.appendChild(newOption);
    }

    let selectedSeries = getSeriesFromURL();
    let seriesSelect = document.getElementById("seriesSelect");
    for (let seriesName of getAllSeries()) {
        let newOption = document.createElement("option");
        newOption.value = seriesName;
        newOption.innerHTML = seriesName;
        if (selectedSeries != null && selectedSeries.name == seriesName) newOption.selected = true;

        seriesSelect.appendChild(newOption);
    }

    readURL();
}
