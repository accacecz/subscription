
var params = {};
location.search.slice(1).split("&").forEach(function(pair) {
   pair = pair.split("=");
   params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
});

let id = params.id
let response = params.response

setTimeout("window.close()",3000)

fetch(`https://prod-110.westeurope.logic.azure.com/workflows/e1566d2a1e144885a906ceece6889baa/triggers/manual/paths/invoke/ID/${id}/approval/${response}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lEWJl3LhpWYhLnQHNebtS_5m6MIFzr-VD43CU9QFSVk`)
