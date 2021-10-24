export default function magic() {
    var arGame = document.getElementsByClassName('tr_h');
    var scGame = arGame[0].childNodes[1].firstChild.innerHTML;
    if (scGame.length === 17) {
        scGame = scGame.replace('-', '-1');
    } else if (scGame.length === 16) {
        scGame = scGame.replace('-', '-10');
    }
    arGame[0].childNodes[1].firstChild.innerHTML = scGame;
    for (let n = 0; n < arGame.length; n++) {
        let fourth = arGame[n].childNodes[4].innerHTML;
        if (fourth.length === 6) {
            arGame[n].childNodes[4].innerHTML = '1' + fourth;
            } else if (fourth.length === 5) {
                    arGame[n].childNodes[4].innerHTML = '10' + fourth
            } else if (fourth.length === 4) {
                    arGame[n].childNodes[4].innerHTML = '100' + fourth
            }
    };
    for (let n = 1; n < arGame.length; n++) {
        let fifth = arGame[n].childNodes[5].innerHTML;
        if (fifth.length === 6) {
            arGame[n].childNodes[5].innerHTML = '1' + fifth;
        } else if (fifth.length === 5) {
            arGame[n].childNodes[5].innerHTML = '10' + fifth;
        } else if (fifth.length === 4) {
            arGame[n].childNodes[5].innerHTML = '100' + fifth;
        }
    };var arGame = document.getElementsByClassName('tr_h');
    var scGame = arGame[0].childNodes[1].firstChild.innerHTML;
    if (scGame.length === 17) {
        scGame = scGame.replace('-', '-1');
    } else if (scGame.length === 16) {
        scGame = scGame.replace('-', '-10');
    }
    arGame[0].childNodes[1].firstChild.innerHTML = scGame;
    for (let n = 0; n < arGame.length; n++) {
        let fourth = arGame[n].childNodes[4].innerHTML;
        if (fourth.length === 6) {
            arGame[n].childNodes[4].innerHTML = '1' + fourth;
            } else if (fourth.length === 5) {
                    arGame[n].childNodes[4].innerHTML = '10' + fourth
            } else if (fourth.length === 4) {
                    arGame[n].childNodes[4].innerHTML = '100' + fourth
            }
    };
    for (let n = 1; n < arGame.length; n++) {
        let fifth = arGame[n].childNodes[5].innerHTML;
        if (fifth.length === 6) {
            arGame[n].childNodes[5].innerHTML = '1' + fifth;
        } else if (fifth.length === 5) {
            arGame[n].childNodes[5].innerHTML = '10' + fifth;
        } else if (fifth.length === 4) {
            arGame[n].childNodes[5].innerHTML = '100' + fifth;
        }
    };
}
