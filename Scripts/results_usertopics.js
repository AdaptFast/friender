function SwitchBipartite(val) {
    if(val == 1) {
        document.getElementById("frameBipartite1").style.display = "block";
        document.getElementById("frameBipartite2").style.display = "none";
        document.getElementById("frameBipartite3").style.display = "none";
    }
    if(val == 2) {
        document.getElementById("frameBipartite1").style.display = "none";
        document.getElementById("frameBipartite2").style.display = "block";
        document.getElementById("frameBipartite3").style.display = "none";
    }
    if(val == 3) {
        document.getElementById("frameBipartite1").style.display = "none";
        document.getElementById("frameBipartite2").style.display = "none";
        document.getElementById("frameBipartite3").style.display = "block";
    }
}