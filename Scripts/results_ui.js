function ToggleSelection(element, indicator)
{
    if (indicator == 1)
    {
        var selectionElement = element.getElementsByTagName("img")[0].getAttribute("src");
        if (selectionElement.endsWith("thumbsup.png"))
            element.getElementsByTagName("img")[0].setAttribute("src", "../images/thumbsup_selected.png");
        if (selectionElement.endsWith("thumbsup_selected.png"))
            element.getElementsByTagName("img")[0].setAttribute("src", "../images/thumbsup.png");            
    }
    if (indicator == 0)
    {
        var selectionElement = element.getElementsByTagName("img")[0].getAttribute("src");
        if (selectionElement.endsWith("thumbsdown.png"))
            element.getElementsByTagName("img")[0].setAttribute("src", "../images/thumbsdown_selected.png");
        if (selectionElement.endsWith("thumbsdown_selected.png"))
            element.getElementsByTagName("img")[0].setAttribute("src", "../images/thumbsdown.png");  
    }
    }
    
function ClickSubmit()
{
    var selections = [];
    var score = 0;
    var topicTable = document.getElementById("tblTopics");
    for (var i = 0, row; row = topicTable.rows[i]; i++) {
       score = 0;
       for (var j = 1, col; col = row.cells[j]; j++) {
            if(col.getElementsByTagName("a")[0].getElementsByTagName("img")[0].getAttribute("src").endsWith("thumbsup_selected.png"))
                score = score + 1;
            if(col.getElementsByTagName("a")[0].getElementsByTagName("img")[0].getAttribute("src").endsWith("thumbsdown_selected.png"))
                score = score - 1;
       }
        selections.push(score);           
    }
    var outputText = "<h3>You selected:</h3><br/><br/><br/><ul>"
    for (var i = 0; i < selections.length; i++)
    {
        outputText = outputText + "<li> Topic " + String(i+1) + " -> Score " + String(selections[i]) + "</li>";
    }        
    document.getElementById("outputResult").innerHTML = outputText + "</ul>";
}