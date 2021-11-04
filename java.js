var y1 = 0, y2 = 0, y3 = 0, y4 = 0, y5 = 0, y6 = 0, vinto = 0;
function myfunction1(x) {
    document.getElementsByClassName('img1')[x].style.display = "block";

    if (document.getElementsByClassName('img1')[0].style.display === "block" && document.getElementsByClassName('img1')[1].style.display === "block") {
        document.getElementsByClassName('carta1')[0].style.transform = "none";
        document.getElementsByClassName('carta1')[1].style.transform = "none";
        y1 = 1;
        if ((y1 + y2 + y3 + y4 + y5 + y6) === 6 && vinto === 0) {
            alert('HAI VINTO!!!!');
            vinto = 1;
        }
    }
    else {

        controlla1(x);
    }
}
function myfunction2(x) {
    document.getElementsByClassName('img2')[x].style.display = "block";

    if (document.getElementsByClassName('img2')[0].style.display === "block" && document.getElementsByClassName('img2')[1].style.display === "block") {
        document.getElementsByClassName('carta2')[0].style.transform = "none";
        document.getElementsByClassName('carta2')[1].style.transform = "none";
        y2 = 1;
        if ((y1 + y2 + y3 + y4 + y5 + y6) === 6 && vinto === 0) {
            alert('HAI VINTO!!!!');
            vinto = 1;
        }
    }
    else {

        controlla2(x);
    }
}
function myfunction3(x) {
    document.getElementsByClassName('img3')[x].style.display = "block";

    if (document.getElementsByClassName('img3')[0].style.display === "block" && document.getElementsByClassName('img3')[1].style.display === "block") {
        document.getElementsByClassName('carta3')[0].style.transform = "none";
        document.getElementsByClassName('carta3')[1].style.transform = "none";
        y3 = 1;
        if ((y1 + y2 + y3 + y4 + y5 + y6) === 6 && vinto === 0) {
            alert('HAI VINTO!!!!');
            vinto = 1;
        }
    }
    else {

        controlla3(x);
    }
}
function myfunction4(x) {
    document.getElementsByClassName('img4')[x].style.display = "block";
    if (document.getElementsByClassName('img4')[0].style.display === "block" && document.getElementsByClassName('img4')[1].style.display === "block") {
        document.getElementsByClassName('carta4')[0].style.transform = "none";
        document.getElementsByClassName('carta4')[1].style.transform = "none";
        y4 = 1;
        if ((y1 + y2 + y3 + y4 + y5 + y6) === 6 && vinto === 0) {
            alert('HAI VINTO!!!!');
            vinto = 1;
        }
    }
    else {

        controlla4(x);
    }
}
function myfunction5(x) {
    document.getElementsByClassName('img5')[x].style.display = "block";
    if (document.getElementsByClassName('img5')[0].style.display === "block" && document.getElementsByClassName('img5')[1].style.display === "block") {
        document.getElementsByClassName('carta5')[0].style.transform = "none";
        document.getElementsByClassName('carta5')[1].style.transform = "none";
        y5 = 1;
        if ((y1 + y2 + y3 + y4 + y5 + y6) === 6 && vinto === 0) {
            alert('HAI VINTO!!!!');
            vinto = 1;
        }
    }
    else {

        controlla5(x);
    }
}
function myfunction6(x) {
    document.getElementsByClassName('img6')[x].style.display = "block";
    if (document.getElementsByClassName('img6')[0].style.display === "block" && document.getElementsByClassName('img6')[1].style.display === "block") {
        document.getElementsByClassName('carta6')[0].style.transform = "none";
        document.getElementsByClassName('carta6')[1].style.transform = "none";
        y6 = 1;
        if ((y1 + y2 + y3 + y4 + y5 + y6) === 6 && vinto === 0) {
            alert('HAI VINTO!!!!');
            vinto = 1;
        }
    }
    else {

        controlla6(x);
    }
}


function controlla1(x) {
    setTimeout(function () {
        if (document.getElementsByClassName('img1')[x].style.display === "block"
            && (document.getElementsByClassName('img2')[0].style.display === "block") && y2 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img1')[x].style.display = "none";
            document.getElementsByClassName('img2')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img1')[x].style.display === "block"
                && (document.getElementsByClassName('img2')[1].style.display === "block") && y2 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img1')[x].style.display = "none";
                document.getElementsByClassName('img2')[1].style.display = "none";
                return;
            }


        if (document.getElementsByClassName('img1')[x].style.display === "block"
            && (document.getElementsByClassName('img3')[0].style.display === "block") && y3 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img1')[x].style.display = "none";
            document.getElementsByClassName('img3')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img1')[x].style.display === "block"
                && (document.getElementsByClassName('img3')[1].style.display === "block") && y3 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img1')[x].style.display = "none";
                document.getElementsByClassName('img3')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img1')[x].style.display === "block"
            && (document.getElementsByClassName('img4')[0].style.display === "block") && y4 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img1')[x].style.display = "none";
            document.getElementsByClassName('img4')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img1')[x].style.display === "block"
                && (document.getElementsByClassName('img4')[1].style.display === "block") && y4 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img1')[x].style.display = "none";
                document.getElementsByClassName('img4')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img1')[x].style.display === "block"
            && (document.getElementsByClassName('img5')[0].style.display === "block") && y5 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img1')[x].style.display = "none";
            document.getElementsByClassName('img5')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img1')[x].style.display === "block"
                && (document.getElementsByClassName('img5')[1].style.display === "block") && y5 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img1')[x].style.display = "none";
                document.getElementsByClassName('img5')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img1')[x].style.display === "block"
            && (document.getElementsByClassName('img6')[0].style.display === "block") && y6 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img1')[x].style.display = "none";
            document.getElementsByClassName('img6')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img1')[x].style.display === "block"
                && (document.getElementsByClassName('img6')[1].style.display === "block") && y6 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img1')[x].style.display = "none";
                document.getElementsByClassName('img6')[1].style.display = "none";
                return;
            }
    }, 90);
}

function controlla2(x) {
    setTimeout(function () {
        if (document.getElementsByClassName('img2')[x].style.display === "block"
            && (document.getElementsByClassName('img1')[0].style.display === "block") && y1 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img2')[x].style.display = "none";
            document.getElementsByClassName('img1')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img2')[x].style.display === "block"
                && (document.getElementsByClassName('img1')[1].style.display === "block") && y1 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img2')[x].style.display = "none";
                document.getElementsByClassName('img1')[1].style.display = "none";
                return;
            }


        if (document.getElementsByClassName('img2')[x].style.display === "block"
            && (document.getElementsByClassName('img3')[0].style.display === "block") && y3 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img2')[x].style.display = "none";
            document.getElementsByClassName('img3')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img2')[x].style.display === "block"
                && (document.getElementsByClassName('img3')[1].style.display === "block") && y3 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img2')[x].style.display = "none";
                document.getElementsByClassName('img3')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img2')[x].style.display === "block"
            && (document.getElementsByClassName('img4')[0].style.display === "block") && y4 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img2')[x].style.display = "none";
            document.getElementsByClassName('img4')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img2')[x].style.display === "block"
                && (document.getElementsByClassName('img4')[1].style.display === "block") && y4 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img2')[x].style.display = "none";
                document.getElementsByClassName('img4')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img2')[x].style.display === "block"
            && (document.getElementsByClassName('img5')[0].style.display === "block") && y5 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img2')[x].style.display = "none";
            document.getElementsByClassName('img5')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img2')[x].style.display === "block"
                && (document.getElementsByClassName('img5')[1].style.display === "block") && y5 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img2')[x].style.display = "none";
                document.getElementsByClassName('img5')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img2')[x].style.display === "block"
            && (document.getElementsByClassName('img6')[0].style.display === "block") && y6 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img2')[x].style.display = "none";
            document.getElementsByClassName('img6')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img2')[x].style.display === "block"
                && (document.getElementsByClassName('img6')[1].style.display === "block") && y6 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img2')[x].style.display = "none";
                document.getElementsByClassName('img6')[1].style.display = "none";
                return;
            }
    }, 90);
}

function controlla3(x) {
    setTimeout(function () {
        if (document.getElementsByClassName('img3')[x].style.display === "block"
            && (document.getElementsByClassName('img2')[0].style.display === "block") && y2 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img3')[x].style.display = "none";
            document.getElementsByClassName('img2')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img3')[x].style.display === "block"
                && (document.getElementsByClassName('img2')[1].style.display === "block") && y2 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img3')[x].style.display = "none";
                document.getElementsByClassName('img2')[1].style.display = "none";
                return;
            }


        if (document.getElementsByClassName('img3')[x].style.display === "block"
            && (document.getElementsByClassName('img1')[0].style.display === "block") && y1 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img3')[x].style.display = "none";
            document.getElementsByClassName('img1')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img3')[x].style.display === "block"
                && (document.getElementsByClassName('img1')[1].style.display === "block") && y1 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img3')[x].style.display = "none";
                document.getElementsByClassName('img1')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img3')[x].style.display === "block"
            && (document.getElementsByClassName('img4')[0].style.display === "block") && y4 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img3')[x].style.display = "none";
            document.getElementsByClassName('img4')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img3')[x].style.display === "block"
                && (document.getElementsByClassName('img4')[1].style.display === "block") && y4 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img3')[x].style.display = "none";
                document.getElementsByClassName('img4')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img3')[x].style.display === "block"
            && (document.getElementsByClassName('img5')[0].style.display === "block") && y5 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img3')[x].style.display = "none";
            document.getElementsByClassName('img5')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img3')[x].style.display === "block"
                && (document.getElementsByClassName('img5')[1].style.display === "block") && y5 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img3')[x].style.display = "none";
                document.getElementsByClassName('img5')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img3')[x].style.display === "block"
            && (document.getElementsByClassName('img6')[0].style.display === "block") && y6 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img3')[x].style.display = "none";
            document.getElementsByClassName('img6')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img3')[x].style.display === "block"
                && (document.getElementsByClassName('img6')[1].style.display === "block") && y6 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img3')[x].style.display = "none";
                document.getElementsByClassName('img6')[1].style.display = "none";
                return;
            }
    }, 90);
}


function controlla4(x) {
    setTimeout(function () {
        if (document.getElementsByClassName('img4')[x].style.display === "block"
            && (document.getElementsByClassName('img2')[0].style.display === "block") && y2 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img4')[x].style.display = "none";
            document.getElementsByClassName('img2')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img4')[x].style.display === "block"
                && (document.getElementsByClassName('img2')[1].style.display === "block") && y2 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img4')[x].style.display = "none";
                document.getElementsByClassName('img2')[1].style.display = "none";
                return;
            }


        if (document.getElementsByClassName('img4')[x].style.display === "block"
            && (document.getElementsByClassName('img3')[0].style.display === "block") && y3 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img4')[x].style.display = "none";
            document.getElementsByClassName('img3')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img4')[x].style.display === "block"
                && (document.getElementsByClassName('img3')[1].style.display === "block") && y3 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img4')[x].style.display = "none";
                document.getElementsByClassName('img3')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img4')[x].style.display === "block"
            && (document.getElementsByClassName('img1')[0].style.display === "block") && y1 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img4')[x].style.display = "none";
            document.getElementsByClassName('img1')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img4')[x].style.display === "block"
                && (document.getElementsByClassName('img1')[1].style.display === "block") && y1 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img4')[x].style.display = "none";
                document.getElementsByClassName('img1')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img4')[x].style.display === "block"
            && (document.getElementsByClassName('img5')[0].style.display === "block") && y5 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img4')[x].style.display = "none";
            document.getElementsByClassName('img5')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img4')[x].style.display === "block"
                && (document.getElementsByClassName('img5')[1].style.display === "block") && y5 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img4')[x].style.display = "none";
                document.getElementsByClassName('img5')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img4')[x].style.display === "block"
            && (document.getElementsByClassName('img6')[0].style.display === "block") && y6 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img4')[x].style.display = "none";
            document.getElementsByClassName('img6')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img4')[x].style.display === "block"
                && (document.getElementsByClassName('img6')[1].style.display === "block") && y6 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img4')[x].style.display = "none";
                document.getElementsByClassName('img6')[1].style.display = "none";
                return;
            }
    }, 90);
}


function controlla5(x) {
    setTimeout(function () {
        if (document.getElementsByClassName('img5')[x].style.display === "block"
            && (document.getElementsByClassName('img2')[0].style.display === "block") && y2 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img5')[x].style.display = "none";
            document.getElementsByClassName('img2')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img5')[x].style.display === "block"
                && (document.getElementsByClassName('img2')[1].style.display === "block") && y2 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img5')[x].style.display = "none";
                document.getElementsByClassName('img2')[1].style.display = "none";
                return;
            }


        if (document.getElementsByClassName('img5')[x].style.display === "block"
            && (document.getElementsByClassName('img3')[0].style.display === "block") && y3 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img5')[x].style.display = "none";
            document.getElementsByClassName('img3')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img5')[x].style.display === "block"
                && (document.getElementsByClassName('img3')[1].style.display === "block") && y3 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img5')[x].style.display = "none";
                document.getElementsByClassName('img3')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img5')[x].style.display === "block"
            && (document.getElementsByClassName('img4')[0].style.display === "block") && y4 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img5')[x].style.display = "none";
            document.getElementsByClassName('img4')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img5')[x].style.display === "block"
                && (document.getElementsByClassName('img4')[1].style.display === "block") && y4 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img5')[x].style.display = "none";
                document.getElementsByClassName('img4')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img5')[x].style.display === "block"
            && (document.getElementsByClassName('img1')[0].style.display === "block") && y1 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img5')[x].style.display = "none";
            document.getElementsByClassName('img1')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img5')[x].style.display === "block"
                && (document.getElementsByClassName('img1')[1].style.display === "block") && y1 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img5')[x].style.display = "none";
                document.getElementsByClassName('img1')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img5')[x].style.display === "block"
            && (document.getElementsByClassName('img6')[0].style.display === "block") && y6 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img5')[x].style.display = "none";
            document.getElementsByClassName('img6')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img5')[x].style.display === "block"
                && (document.getElementsByClassName('img6')[1].style.display === "block") && y6 == 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img5')[x].style.display = "none";
                document.getElementsByClassName('img6')[1].style.display = "none";
                return;
            }
    }, 90);
}


function controlla6(x) {
    setTimeout(function () {
        if (document.getElementsByClassName('img6')[x].style.display === "block"
            && (document.getElementsByClassName('img1')[0].style.display === "block") && y1 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img6')[x].style.display = "none";
            document.getElementsByClassName('img1')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img6')[x].style.display === "block"
                && (document.getElementsByClassName('img1')[1].style.display === "block") && y1 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img6')[x].style.display = "none";
                document.getElementsByClassName('img1')[1].style.display = "none";
                return;
            }


        if (document.getElementsByClassName('img6')[x].style.display === "block"
            && (document.getElementsByClassName('img2')[0].style.display === "block") && y2 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img6')[x].style.display = "none";
            document.getElementsByClassName('img2')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img6')[x].style.display === "block"
                && (document.getElementsByClassName('img2')[1].style.display === "block") && y2 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img6')[x].style.display = "none";
                document.getElementsByClassName('img2')[1].style.display = "none";
                return;
            }


        if (document.getElementsByClassName('img6')[x].style.display === "block"
            && (document.getElementsByClassName('img3')[0].style.display === "block") && y3 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img6')[x].style.display = "none";
            document.getElementsByClassName('img3')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img6')[x].style.display === "block"
                && (document.getElementsByClassName('img3')[1].style.display === "block") && y3 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img6')[x].style.display = "none";
                document.getElementsByClassName('img3')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img6')[x].style.display === "block"
            && (document.getElementsByClassName('img4')[0].style.display === "block") && y4 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img6')[x].style.display = "none";
            document.getElementsByClassName('img4')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img6')[x].style.display === "block"
                && (document.getElementsByClassName('img4')[1].style.display === "block") && y4 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img6')[x].style.display = "none";
                document.getElementsByClassName('img4')[1].style.display = "none";
                return;
            }



        if (document.getElementsByClassName('img6')[x].style.display === "block"
            && (document.getElementsByClassName('img5')[0].style.display === "block") && y5 === 0) {
            alert('sbagliato!');
            document.getElementsByClassName('img6')[x].style.display = "none";
            document.getElementsByClassName('img5')[0].style.display = "none";
        }
        else
            if (document.getElementsByClassName('img6')[x].style.display === "block"
                && (document.getElementsByClassName('img5')[1].style.display === "block") && y5 === 0) {
                alert('sbagliato!');
                document.getElementsByClassName('img6')[x].style.display = "none";
                document.getElementsByClassName('img5')[1].style.display = "none";
                return;
            }
    }, 90);
}