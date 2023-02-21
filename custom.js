
var params = {};
location.search.slice(1).split("&").forEach(function(pair) {
   pair = pair.split("=");
   params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
});

let id = params.id
let response = params.response

fetch(`https://prod-110.westeurope.logic.azure.com/workflows/e1566d2a1e144885a906ceece6889baa/triggers/manual/paths/invoke/ID/${id}/approval/${response}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lEWJl3LhpWYhLnQHNebtS_5m6MIFzr-VD43CU9QFSVk`)

var countdownFrom = 5;  // number of seconds
var countdownwin;

var stp;
function CountDownStart() {
   stp = setInterval("CountDownTimer('CountDownTime')",1000)
}

function CountDownTimer(id)
{
    if (countdownFrom==0) {clearInterval(stp); window.close(); var cntText = "Pokud je toto okno stále otevřené, můžete ho zavřít."; x = document.getElementById(id); x.innerHTML = cntText;}
    else     {
                var x

                if (countdownFrom==5) {
                    var cntText = "Toto okno se automaticky zavře za "+countdownFrom+" sekund.";
                  } else if (countdownFrom==1) {
                    var cntText = "Toto okno se automaticky zavře za "+countdownFrom+" sekundu.";
                  } else {
                    var cntText = "Toto okno se automaticky zavře za "+countdownFrom+" sekundy.";
                  }

            if (document.getElementById)
        {
            x = document.getElementById(id);
            x.innerHTML = cntText;        }
        else if (document.all)
        {
            x = document.all[id];
            x.innerHTML = cntText;        }
        }
countdownFrom--
}