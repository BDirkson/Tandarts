(this.webpackJsonpdentist_react=this.webpackJsonpdentist_react||[]).push([[0],{13:function(e,n,a){},17:function(e,n,a){e.exports=a(30)},22:function(e,n,a){},23:function(e,n,a){},24:function(e,n,a){},30:function(e,n,a){"use strict";a.r(n);var r=a(0),m=a.n(r),l=a(15),s=a.n(l),d=(a(22),a(13),a(8)),t=a(1),i=function(){return m.a.createElement("div",null,"Home!")},g=(a(23),function(e){var n=e.time,a=e.patient;return m.a.createElement("div",{className:"appointment"},m.a.createElement("span",{className:"time"},function(e){return e<10?"0".concat(e,":00u"):"".concat(e,":00u")}(n)),m.a.createElement("span",{className:"patient"},a))}),o=function(e){var n=e.appointments.map((function(e,n){var a=e.time,r=e.patient;return m.a.createElement(g,{time:a,patient:r,key:n})}));return m.a.createElement("div",{className:"day"},n)},u=function(e){var n=function(e){var n={};return e.forEach((function(e){var a=e.day;n.hasOwnProperty(a)||(n[a]=[]),n[a].push(e)})),n}(e.appointments),a=Object.values(n).map((function(e,n){return m.a.createElement(o,{appointments:e,key:n})}));return m.a.createElement("div",{className:"calendarview"},m.a.createElement("div",{className:"header"},m.a.createElement("div",null,"Maandag"),m.a.createElement("div",null,"Dinsdag"),m.a.createElement("div",null,"Woensdag"),m.a.createElement("div",null,"Donderdag"),m.a.createElement("div",null,"Vrijdag")),m.a.createElement("div",{className:"table"},a))},h=(a(24),function(e){var n=e.time,a=e.patient,r=e.dentist,l=e.assistant;return m.a.createElement("li",{className:"appointment"},m.a.createElement("div",{className:"time"},function(e){return e<10?"0".concat(e,":00u"):"".concat(e,":00u")}(n)),m.a.createElement("div",{className:"patient"},"Pati\xebnt: ",a),m.a.createElement("div",{className:"dentist"},"Tandarts: ",r),m.a.createElement("div",{className:"assistant"},"Assistent: ",l))}),N=function(e){var n=e.appointments.map((function(e,n){var a=e.time,r=e.patient,l=e.dentist,s=e.assistant;return m.a.createElement(h,{time:a,patient:r,dentist:l,assistant:s,key:n})}));return m.a.createElement("ul",{className:"dayview"},n)},f=[{name:"Aad",surname:"Groen",gender:"male",region:"Netherlands"},{name:"Harm van der",surname:"Pol",gender:"male",region:"Netherlands"},{name:"Pieter",surname:"Meijer",gender:"male",region:"Netherlands"},{name:"Michiel",surname:"Gerritsen",gender:"male",region:"Netherlands"},{name:"Sander van",surname:"Wijk",gender:"male",region:"Netherlands"},{name:"Olaf de",surname:"Ruiter",gender:"male",region:"Netherlands"},{name:"Teun de",surname:"Wit",gender:"male",region:"Netherlands"},{name:"Tom",surname:"Schouten",gender:"male",region:"Netherlands"},{name:"Mirthe",surname:"Meijer",gender:"female",region:"Netherlands"},{name:"Lisa",surname:"Kok",gender:"female",region:"Netherlands"},{name:"Emiel de",surname:"Vos",gender:"male",region:"Netherlands"},{name:"Diewertje van",surname:"Loon",gender:"female",region:"Netherlands"},{name:"Arjan van",surname:"Vliet",gender:"male",region:"Netherlands"},{name:"Femke",surname:"Meijer",gender:"female",region:"Netherlands"},{name:"Lonneke",surname:"Sanders",gender:"female",region:"Netherlands"},{name:"Christien",surname:"Prins",gender:"female",region:"Netherlands"},{name:"Mathijs",surname:"Mol",gender:"male",region:"Netherlands"},{name:"Carlijn",surname:"Bos",gender:"female",region:"Netherlands"},{name:"Eelco van der",surname:"Meer",gender:"male",region:"Netherlands"},{name:"Willemijn",surname:"Hofman",gender:"female",region:"Netherlands"},{name:"Reinout van der",surname:"Veen",gender:"male",region:"Netherlands"},{name:"Lotte",surname:"Hoekstra",gender:"female",region:"Netherlands"},{name:"Aart",surname:"Willems",gender:"male",region:"Netherlands"},{name:"Florus",surname:"Prins",gender:"male",region:"Netherlands"},{name:"Valentijn",surname:"Gerritsen",gender:"male",region:"Netherlands"},{name:"Paul de",surname:"Vos",gender:"male",region:"Netherlands"},{name:"Henk",surname:"Postma",gender:"male",region:"Netherlands"},{name:"Willemijn van",surname:"Dijk",gender:"female",region:"Netherlands"},{name:"Boudewijn van",surname:"Dijk",gender:"male",region:"Netherlands"},{name:"Jaap de",surname:"Ruiter",gender:"male",region:"Netherlands"},{name:"Floor van",surname:"Veen",gender:"female",region:"Netherlands"},{name:"Tom de",surname:"Leeuw",gender:"male",region:"Netherlands"},{name:"Heleen van",surname:"Loon",gender:"female",region:"Netherlands"},{name:"Luuk",surname:"Hermans",gender:"male",region:"Netherlands"},{name:"Huib van der",surname:"Veen",gender:"male",region:"Netherlands"},{name:"Jaap",surname:"Hoekstra",gender:"male",region:"Netherlands"},{name:"Mathijs van",surname:"Dijk",gender:"male",region:"Netherlands"},{name:"Peter de",surname:"Koning",gender:"male",region:"Netherlands"},{name:"Maartje",surname:"Schouten",gender:"female",region:"Netherlands"},{name:"Thomas van",surname:"Dam",gender:"male",region:"Netherlands"},{name:"Huib",surname:"Verhoeven",gender:"male",region:"Netherlands"},{name:"Imke van",surname:"Dongen",gender:"female",region:"Netherlands"},{name:"Maartje",surname:"Kramer",gender:"female",region:"Netherlands"},{name:"Willemijn van",surname:"Dongen",gender:"female",region:"Netherlands"},{name:"Daan",surname:"Timmermans",gender:"male",region:"Netherlands"},{name:"Tom",surname:"Huisman",gender:"male",region:"Netherlands"},{name:"Doortje de",surname:"Bruijn",gender:"female",region:"Netherlands"},{name:"Reinout",surname:"Hoekstra",gender:"male",region:"Netherlands"},{name:"Victor de",surname:"Graaf",gender:"male",region:"Netherlands"},{name:"Ivo van",surname:"Vliet",gender:"male",region:"Netherlands"},{name:"Valentijn",surname:"Evers",gender:"male",region:"Netherlands"},{name:"Imke",surname:"Jansen",gender:"female",region:"Netherlands"},{name:"Willemijn de",surname:"Lange",gender:"female",region:"Netherlands"},{name:"Luuk",surname:"Mulder",gender:"male",region:"Netherlands"},{name:"Stefan",surname:"Hendriks",gender:"male",region:"Netherlands"},{name:"Leentje",surname:"Schouten",gender:"female",region:"Netherlands"},{name:"Petra de",surname:"Wit",gender:"female",region:"Netherlands"},{name:"Thea",surname:"Kramer",gender:"female",region:"Netherlands"},{name:"Aad",surname:"Koning",gender:"male",region:"Netherlands"},{name:"Aart",surname:"Dekker",gender:"male",region:"Netherlands"},{name:"Quintin",surname:"Jonker",gender:"male",region:"Netherlands"},{name:"Eline van de",surname:"Velde",gender:"female",region:"Netherlands"},{name:"Kristien van de",surname:"Velde",gender:"female",region:"Netherlands"},{name:"Dirk van der",surname:"Pol",gender:"male",region:"Netherlands"},{name:"Kristien",surname:"Scholten",gender:"female",region:"Netherlands"},{name:"Anna",surname:"Hendriks",gender:"female",region:"Netherlands"},{name:"Eva de",surname:"Haan",gender:"female",region:"Netherlands"},{name:"Ivo",surname:"Willems",gender:"male",region:"Netherlands"},{name:"Chris van",surname:"Loon",gender:"male",region:"Netherlands"},{name:"Laura van der",surname:"Meulen",gender:"female",region:"Netherlands"},{name:"Jack",surname:"Vos",gender:"male",region:"Netherlands"},{name:"Hanneke van",surname:"Veen",gender:"female",region:"Netherlands"},{name:"Eelco",surname:"Bos",gender:"male",region:"Netherlands"},{name:"Lisa van der",surname:"Horst",gender:"female",region:"Netherlands"},{name:"Gerrit",surname:"Hoekstra",gender:"male",region:"Netherlands"},{name:"Klaas van der",surname:"Velden",gender:"male",region:"Netherlands"},{name:"Femke de",surname:"Graaf",gender:"female",region:"Netherlands"},{name:"Tineke",surname:"Scholten",gender:"female",region:"Netherlands"},{name:"Boudewijn de",surname:"Vries",gender:"male",region:"Netherlands"},{name:"Corien de",surname:"Haan",gender:"female",region:"Netherlands"},{name:"Florus van den",surname:"Berg",gender:"male",region:"Netherlands"},{name:"Victor van de",surname:"Velde",gender:"male",region:"Netherlands"},{name:"Arjan",surname:"Verhoeven",gender:"male",region:"Netherlands"},{name:"Ineke van",surname:"Dam",gender:"female",region:"Netherlands"},{name:"Stefan van",surname:"Beek",gender:"male",region:"Netherlands"},{name:"Willeke",surname:"Kuijpers",gender:"female",region:"Netherlands"},{name:"Suzanne de",surname:"Koning",gender:"female",region:"Netherlands"},{name:"Rik",surname:"Smeets",gender:"male",region:"Netherlands"},{name:"Harm",surname:"Bosman",gender:"male",region:"Netherlands"},{name:"Christiaan",surname:"Dekker",gender:"male",region:"Netherlands"},{name:"Gerrit",surname:"Jonker",gender:"male",region:"Netherlands"},{name:"Victor",surname:"Timmermans",gender:"male",region:"Netherlands"},{name:"Eelco",surname:"Postma",gender:"male",region:"Netherlands"},{name:"Vincent",surname:"Willems",gender:"male",region:"Netherlands"},{name:"Rob",surname:"Maas",gender:"male",region:"Netherlands"},{name:"Jan",surname:"Timmermans",gender:"male",region:"Netherlands"},{name:"Leentje de",surname:"Boer",gender:"female",region:"Netherlands"},{name:"Lotte",surname:"Vos",gender:"female",region:"Netherlands"},{name:"Twan van der",surname:"Velden",gender:"male",region:"Netherlands"},{name:"Tineke",surname:"Willems",gender:"female",region:"Netherlands"},{name:"Willemijn van der",surname:"Laan",gender:"female",region:"Netherlands"},{name:"Aart",surname:"Peters",gender:"male",region:"Netherlands"},{name:"Suzanne",surname:"Smeets",gender:"female",region:"Netherlands"},{name:"Lisa",surname:"Smeets",gender:"female",region:"Netherlands"},{name:"Renske van der",surname:"Wal",gender:"female",region:"Netherlands"},{name:"Elise",surname:"Dekker",gender:"female",region:"Netherlands"},{name:"Sander",surname:"Smit",gender:"male",region:"Netherlands"},{name:"Wouter",surname:"Groen",gender:"male",region:"Netherlands"},{name:"Stefan de",surname:"Bruin",gender:"male",region:"Netherlands"},{name:"Maaike",surname:"Koster",gender:"female",region:"Netherlands"},{name:"Quintin",surname:"Kuijpers",gender:"male",region:"Netherlands"},{name:"Huib",surname:"Hoekstra",gender:"male",region:"Netherlands"},{name:"Lonneke van",surname:"Dijk",gender:"female",region:"Netherlands"},{name:"Camiel de",surname:"Graaf",gender:"male",region:"Netherlands"},{name:"Lonneke",surname:"Evers",gender:"female",region:"Netherlands"},{name:"Hendrika",surname:"Jacobs",gender:"female",region:"Netherlands"},{name:"Thijs",surname:"Wolters",gender:"male",region:"Netherlands"},{name:"Mirthe van",surname:"Dongen",gender:"female",region:"Netherlands"},{name:"Willemijn",surname:"Smit",gender:"female",region:"Netherlands"},{name:"Ineke",surname:"Bakker",gender:"female",region:"Netherlands"},{name:"Noortje van der",surname:"Veen",gender:"female",region:"Netherlands"},{name:"Anna van der",surname:"Horst",gender:"female",region:"Netherlands"},{name:"Corien de",surname:"Bruin",gender:"female",region:"Netherlands"},{name:"Sara van",surname:"Vliet",gender:"female",region:"Netherlands"},{name:"Lisa van",surname:"Dongen",gender:"female",region:"Netherlands"},{name:"Corien",surname:"Dekker",gender:"female",region:"Netherlands"},{name:"Carlijn van der",surname:"Meulen",gender:"female",region:"Netherlands"},{name:"Florus van der",surname:"Ven",gender:"male",region:"Netherlands"},{name:"Mirthe",surname:"Timmermans",gender:"female",region:"Netherlands"},{name:"Luuk",surname:"Verbeek",gender:"male",region:"Netherlands"},{name:"Wies van de",surname:"Velde",gender:"female",region:"Netherlands"},{name:"Victor de",surname:"Boer",gender:"male",region:"Netherlands"},{name:"Renske de",surname:"Haan",gender:"female",region:"Netherlands"},{name:"Christiaan",surname:"Bakker",gender:"male",region:"Netherlands"},{name:"Boudewijn",surname:"Jansen",gender:"male",region:"Netherlands"},{name:"Thomas de",surname:"Lange",gender:"male",region:"Netherlands"},{name:"Elise",surname:"Visser",gender:"female",region:"Netherlands"},{name:"Laura",surname:"Kuijpers",gender:"female",region:"Netherlands"},{name:"Victor",surname:"Willems",gender:"male",region:"Netherlands"},{name:"Tineke",surname:"Timmermans",gender:"female",region:"Netherlands"},{name:"Roos",surname:"Hendriks",gender:"female",region:"Netherlands"},{name:"Aad van",surname:"Leeuwen",gender:"male",region:"Netherlands"},{name:"Aart",surname:"Scholten",gender:"male",region:"Netherlands"},{name:"Rik",surname:"Huisman",gender:"male",region:"Netherlands"},{name:"Mirthe",surname:"Jacobs",gender:"female",region:"Netherlands"},{name:"Sara van den",surname:"Berg",gender:"female",region:"Netherlands"},{name:"Valentijn",surname:"Hoekstra",gender:"male",region:"Netherlands"},{name:"Paul de",surname:"Ruiter",gender:"male",region:"Netherlands"},{name:"Emma",surname:"Koning",gender:"female",region:"Netherlands"},{name:"Emiel",surname:"Vermeulen",gender:"male",region:"Netherlands"},{name:"Paulien",surname:"Hoekstra",gender:"female",region:"Netherlands"},{name:"Wies",surname:"Jonker",gender:"female",region:"Netherlands"},{name:"Michiel",surname:"Meijer",gender:"male",region:"Netherlands"},{name:"Jacolien van der",surname:"Laan",gender:"female",region:"Netherlands"},{name:"Lotte",surname:"Timmermans",gender:"female",region:"Netherlands"},{name:"Christien",surname:"Vos",gender:"female",region:"Netherlands"},{name:"Femke",surname:"Kuiper",gender:"female",region:"Netherlands"},{name:"Aart",surname:"Huisman",gender:"male",region:"Netherlands"},{name:"Jaap",surname:"Sanders",gender:"male",region:"Netherlands"},{name:"Gerard",surname:"Willems",gender:"male",region:"Netherlands"},{name:"Kristien de",surname:"Haan",gender:"female",region:"Netherlands"},{name:"Peter van der",surname:"Pol",gender:"male",region:"Netherlands"},{name:"Eefke",surname:"Mulder",gender:"female",region:"Netherlands"},{name:"Bas",surname:"Brouwer",gender:"male",region:"Netherlands"},{name:"Johanneke",surname:"Bakker",gender:"female",region:"Netherlands"},{name:"Vincent",surname:"Mulder",gender:"male",region:"Netherlands"},{name:"Ineke van der",surname:"Velden",gender:"female",region:"Netherlands"},{name:"Teun van",surname:"Loon",gender:"male",region:"Netherlands"},{name:"Aart",surname:"Smit",gender:"male",region:"Netherlands"},{name:"Paulien",surname:"Hendriks",gender:"female",region:"Netherlands"},{name:"Bas van der",surname:"Laan",gender:"male",region:"Netherlands"},{name:"Niek",surname:"Bosman",gender:"male",region:"Netherlands"},{name:"Christien de",surname:"Boer",gender:"female",region:"Netherlands"},{name:"Lotte",surname:"Groen",gender:"female",region:"Netherlands"},{name:"Niek",surname:"Koning",gender:"male",region:"Netherlands"},{name:"Lieke",surname:"Hermans",gender:"female",region:"Netherlands"},{name:"Eefke",surname:"Vermeulen",gender:"female",region:"Netherlands"},{name:"Emma",surname:"Gerritsen",gender:"female",region:"Netherlands"},{name:"Thomas",surname:"Vermeulen",gender:"male",region:"Netherlands"},{name:"Laurens van der",surname:"Wal",gender:"male",region:"Netherlands"},{name:"Lieke",surname:"Kramer",gender:"female",region:"Netherlands"},{name:"Tom de",surname:"Vries",gender:"male",region:"Netherlands"},{name:"Victor",surname:"Smeets",gender:"male",region:"Netherlands"},{name:"Thijs van de",surname:"Velde",gender:"male",region:"Netherlands"},{name:"Yasmijn van",surname:"Vliet",gender:"female",region:"Netherlands"},{name:"Victor van",surname:"Loon",gender:"male",region:"Netherlands"},{name:"Paul",surname:"Hendriks",gender:"male",region:"Netherlands"},{name:"Jan",surname:"Kuiper",gender:"male",region:"Netherlands"},{name:"Camiel",surname:"Brouwer",gender:"male",region:"Netherlands"},{name:"Olaf",surname:"Kuijpers",gender:"male",region:"Netherlands"},{name:"Ido van den",surname:"Heuvel",gender:"male",region:"Netherlands"},{name:"Nelleke",surname:"Vos",gender:"female",region:"Netherlands"},{name:"Rob van den",surname:"Brink",gender:"male",region:"Netherlands"},{name:"Thijs van",surname:"Vliet",gender:"male",region:"Netherlands"},{name:"Ido",surname:"Mulder",gender:"male",region:"Netherlands"},{name:"Teun",surname:"Bakker",gender:"male",region:"Netherlands"},{name:"Kees",surname:"Smit",gender:"male",region:"Netherlands"},{name:"Christien",surname:"Schouten",gender:"female",region:"Netherlands"},{name:"Bart van der",surname:"Meer",gender:"male",region:"Netherlands"},{name:"Lotte van den",surname:"Brink",gender:"female",region:"Netherlands"},{name:"Suzanne",surname:"Bakker",gender:"female",region:"Netherlands"},{name:"Doortje van den",surname:"Brink",gender:"female",region:"Netherlands"},{name:"Tineke de",surname:"Ruiter",gender:"female",region:"Netherlands"},{name:"Hanneke",surname:"Wolters",gender:"female",region:"Netherlands"},{name:"Kees",surname:"Sanders",gender:"male",region:"Netherlands"},{name:"Geert de",surname:"Ruiter",gender:"male",region:"Netherlands"},{name:"Gerard van den",surname:"Berg",gender:"male",region:"Netherlands"},{name:"Christien",surname:"Mulder",gender:"female",region:"Netherlands"},{name:"Thomas van",surname:"Dijk",gender:"male",region:"Netherlands"},{name:"Kees van der",surname:"Horst",gender:"male",region:"Netherlands"},{name:"Laura",surname:"Mulder",gender:"female",region:"Netherlands"},{name:"Wouter de",surname:"Ruiter",gender:"male",region:"Netherlands"},{name:"Suzanne van den",surname:"Heuvel",gender:"female",region:"Netherlands"},{name:"Mirthe",surname:"Kuiper",gender:"female",region:"Netherlands"},{name:"Jacolien van",surname:"Wijk",gender:"female",region:"Netherlands"},{name:"Laurens",surname:"Bakker",gender:"male",region:"Netherlands"},{name:"Dirk",surname:"Bos",gender:"male",region:"Netherlands"},{name:"Hendrika de",surname:"Ruiter",gender:"female",region:"Netherlands"},{name:"Peter de",surname:"Leeuw",gender:"male",region:"Netherlands"},{name:"Chris",surname:"Kramer",gender:"male",region:"Netherlands"},{name:"Thijs de",surname:"Wit",gender:"male",region:"Netherlands"},{name:"Maartje van",surname:"Loon",gender:"female",region:"Netherlands"},{name:"Sander de",surname:"Ruiter",gender:"male",region:"Netherlands"},{name:"Evert",surname:"Dekker",gender:"male",region:"Netherlands"},{name:"Hendrika",surname:"Willems",gender:"female",region:"Netherlands"},{name:"Lieke van",surname:"Vliet",gender:"female",region:"Netherlands"},{name:"Luuk de",surname:"Wit",gender:"male",region:"Netherlands"},{name:"Heleen de",surname:"Haan",gender:"female",region:"Netherlands"},{name:"Neeltje",surname:"Schouten",gender:"female",region:"Netherlands"},{name:"Niek de",surname:"Groot",gender:"male",region:"Netherlands"},{name:"Tineke",surname:"Kuijpers",gender:"female",region:"Netherlands"},{name:"Eelco",surname:"Prins",gender:"male",region:"Netherlands"},{name:"Thea",surname:"Hoekstra",gender:"female",region:"Netherlands"},{name:"Arjan van",surname:"Beek",gender:"male",region:"Netherlands"},{name:"Reinout",surname:"Prins",gender:"male",region:"Netherlands"},{name:"Nelleke",surname:"Molenaar",gender:"female",region:"Netherlands"},{name:"Niek de",surname:"Graaf",gender:"male",region:"Netherlands"},{name:"Carlijn van der",surname:"Horst",gender:"female",region:"Netherlands"},{name:"Eva",surname:"Scholten",gender:"female",region:"Netherlands"},{name:"Pieter",surname:"Jonker",gender:"male",region:"Netherlands"},{name:"Twan",surname:"Vink",gender:"male",region:"Netherlands"},{name:"Femke",surname:"Brouwer",gender:"female",region:"Netherlands"},{name:"Twan de",surname:"Vos",gender:"male",region:"Netherlands"},{name:"Rob",surname:"Vos",gender:"male",region:"Netherlands"},{name:"Michiel de",surname:"Vos",gender:"male",region:"Netherlands"},{name:"Wies van der",surname:"Horst",gender:"female",region:"Netherlands"},{name:"Jaap van de",surname:"Velde",gender:"male",region:"Netherlands"},{name:"Johanneke van",surname:"Loon",gender:"female",region:"Netherlands"},{name:"Mirthe van",surname:"Veen",gender:"female",region:"Netherlands"},{name:"Leentje",surname:"Wolters",gender:"female",region:"Netherlands"}],c=function(){var e=f[Math.floor(250*Math.random())];return"".concat(e.name," ").concat(e.surname)},v=function(){for(var e;;)if((e=Math.floor(24*Math.random()))>7&&e<19)return e},k=function(e){return Array(e).fill(0).map((function(e){return{day:Math.floor(28*Math.random())+1,time:v(),patient:c(),dentist:c(),assistant:c()}}))}(70),E=function(){return m.a.createElement(d.a,null,m.a.createElement("div",null,m.a.createElement("nav",null,m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement(d.b,{to:"/"},"CHECK")),m.a.createElement("li",null,m.a.createElement(d.b,{to:"/calendar"},"Calendar view")),m.a.createElement("li",null,m.a.createElement(d.b,{to:"/day"},"Day view")))),m.a.createElement("main",null,m.a.createElement(t.c,null,m.a.createElement(t.a,{path:"/calendar"},m.a.createElement(u,{appointments:k})),m.a.createElement(t.a,{path:"/day"},m.a.createElement(N,{appointments:k.filter((function(e){return 1===e.day}))})),m.a.createElement(t.a,{path:"/"},m.a.createElement(i,null))))))};s.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(E,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.58609381.chunk.js.map