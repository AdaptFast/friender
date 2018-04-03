var inputVector = [];
var userList = [];
var userSimilarities = [];


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
    inputVector = [];
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
        inputVector.push(score);           
    }
    inputVector = VectorNormalization(Math.min(...inputVector), Math.max(...inputVector), inputVector)
    CalculateUserSimilarity();
}

function VectorNormalization(min, max, vector)
{
    for (var i = 0; i < vector.length; i++)
    {
        vector[i] = (vector[i] - min)/(max - min);
    }
    return vector;
}

d3.csv("https://raw.githubusercontent.com/angad-sr/Dummy/master/User Table.csv", function(error, data) {
      data.forEach(function(d) {
        userList.push(d);
      });
});


function CalculateUserSimilarity() {
    userSimilarities = [];
    for(i = 0; i < userList.length; i++)
    {
        userVector = [userList[i].International_Trends, userList[i].Marina_Bay, userList[i].Job_Postings, userList[i].Celebratory_Events, 
        userList[i].K_pop, userList[i].Daily_Life_Schedule, userList[i].New_Year_Happenings, userList[i].Job_Hunting];
        var score = ComputeCosineSimilarity(inputVector, userVector);
        userSimilarities.push({'User':userList[i].user-screen-name, 'Similarity':score});
    }
    console.log(userSimilarities);
}

function VectorDotProduct(vecA, vecB) {
	var product = 0;
	for (var i = 0; i < vecA.length; i++) {
		product += vecA[i] * vecB[i];
	}
	return product;
}

function VectorMagnitude(vec) {
	var sum = 0;
	for (var i = 0; i < vec.length; i++) {
		sum += vec[i] * vec[i];
	}
	return Math.sqrt(sum);
}

function ComputeCosineSimilarity(vecA, vecB) {
	return VectorDotProduct(vecA, vecB) / (VectorMagnitude(vecA) * VectorMagnitude(vecB));
}