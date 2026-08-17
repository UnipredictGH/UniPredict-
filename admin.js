var CUR = “dash”;
var TABS = [
{id:“dash”, label:“Dashboard”},
{id:“unis”, label:“Universities”},
{id:“progs”, label:“Programmes”}
];

function buildTabs() {
var el = document.getElementById(“tabs”);
el.innerHTML = “”;
for (var i = 0; i < TABS.length; i++) {
var t = TABS[i];
var b = document.createElement(“button”);
b.className = “tab” + (CUR === t.id ? “ on” : “”);
b.textContent = t.label;
b.onclick = function(id) { return function() { CUR = id; buildTabs(); document.getElementById(“main”).textContent = “You clicked: “ + id; }; }(t.id);
el.appendChild(b);
}
}

buildTabs();
document.getElementById(“main”).textContent = “Tabs loaded OK. Click a tab.”;
