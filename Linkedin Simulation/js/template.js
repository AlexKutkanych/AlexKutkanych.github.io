// // see:
// // http://ejohn.org/blog/javascript-micro-templating/
//
// // Simple JavaScript Templating
// // John Resig - http://ejohn.org/ - MIT Licensed
// (function(){
//     var cache = {};
//
//     this.tmpl = function tmpl(str, data){
//         // Figure out if we're getting a template, or if we need to
//         // load the template - and be sure to cache the result.
//         var fn = !/\W/.test(str) ?
//             cache[str] = cache[str] ||
//                 tmpl(document.getElementById(str).innerHTML) :
//
//             // Generate a reusable function that will serve as a template
//             // generator (and which will be cached).
//             new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" + "with(obj){p.push('"+ str.replace(/[\r\t\n]/g, " ")
//                     .split("<%").join("\t")
//                     .replace(/((^|%>)[^\t]*)'/g, "$1\r")
//                     .replace(/\t=(.*?)%>/g, "',$1,'")
//                     .split("\t").join("');")
//                     .split("%>").join("p.push('")
//                     .split("\r").join("\\'") + "');}return p.join('');");
//
//         // Provide some basic currying to the user
//         return data ? fn( data ) : fn;
//     };
// })();

// var usersInfo = {
//     "users": [
//         {
//             "id": 100,
//             "name": "Dwyane Wade",
//             "position": "coder",
//             "education": [
//                 {"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
//                 {"year": 2004, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
//                 {"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
//             ],
//             "experience": [
//                 {"company": "Google", "period": "2010-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
//                 {"company": "Yahoo", "period": "2012-2016", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
//                 {"company": "Yandex", "period": "2016-present", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
//             ]
//         },
//         {
//             "id": 101,
//             "name": "Lebron James",
//             "position": "coder",
//             "education": [
//                 {"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
//                 {"year": 2005, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
//                 {"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
//             ],
//             "experience": [
//                 {"company": "Google", "period": "2010-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
//                 {"company": "Yahoo", "period": "2012-2014", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
//                 {"company": "Yandex", "period": "2015-2017", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
//             ]
//         }
//     ]
// };

//
//
var educationTemplating = document.getElementById("education-temp-block");
// educationTemplating.innerHTML = tmpl("mypage_education", {data: usersInfo});

// var experienceTemplating = document.getElementById("experience-temp-block");
// experienceTemplating.innerHTML = tmpl("mypage_experience", {data: usersInfo});