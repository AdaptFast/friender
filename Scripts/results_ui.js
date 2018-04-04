var inputVector = [];
var userList = [];
var userSimilarities = []
var topUsersPerCluster = {0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[],12:[],13:[],14:[],15:[],16:[],17:[],18:[],19:[],20:[],21:[],22:[],23:[],24:[]};
var clusterCentroids = [];

d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-ClusterCentroids.csv", function(error, data) {
    data.forEach(function(d) {
        clusterCentroids.push(d);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster0.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[0].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster1.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[1].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster2.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[2].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster3.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[3].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster4.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[4].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster5.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[5].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster6.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[6].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster7.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[7].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster8.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[8].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster9.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[9].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster10.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[10].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster11.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[11].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster12.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[12].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster13.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[13].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster14.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[14].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster15.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[15].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster16.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[16].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster17.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[17].push(d.User);
    })
});1
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster18.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[18].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster19.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[19].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster20.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[20].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster21.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[21].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster22.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[22].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster23.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[23].push(d.User);
    })
});
d3.csv("https://raw.githubusercontent.com/AdaptFast/friender/master/Data/TopUsers-Cluster24.csv", function(error, data) {
    data.forEach(function(d) {
        topUsersPerCluster[24].push(d.User);
    })
});

// Save User selections as they occur
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

// Function to generate all computations on click of submit button
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
    belongingCluster = GetUserSimilarityCluster();
    GenerateRecommendations(topUsersPerCluster[belongingCluster]);
}

// Normalizing Input Vector
function VectorNormalization(min, max, vector)
{
    for (var i = 0; i < vector.length; i++)
    {
        vector[i] = (vector[i] - min)/(max - min);
    }
    return vector;
}

// Function to retrieve the cluster that the new user belongs to based on centroid cosine similarity
function GetUserSimilarityCluster() {
    userSimilarities = [];
    for(i = 0; i < clusterCentroids.length; i++)
    {
        userVector = [clusterCentroids[i].Careers_and_Jobs, clusterCentroids[i].Tweets_About_Love, clusterCentroids[i].Tweets_About_Life_Events, clusterCentroids[i].Clubing_and_Dancing, clusterCentroids[i].Entertainment_and_Photography, clusterCentroids[i].Birthdays_and_Anniversaries, clusterCentroids[i].Travelling_around_Singapore, clusterCentroids[i].Everyday_Greetings];
        var score = ComputeCosineSimilarity(inputVector, userVector);
        userSimilarities.push(score);
    }
    selectedIndex = 0;
    for (i = 0; i < userSimilarities.length; i++)
    {
        if(userSimilarities[selectedIndex] < userSimilarities[i])
            selectedIndex = i;
    }
    return selectedIndex;
}

// Display Output Recommendations
function GenerateRecommendations(userList) {    
    document.getElementById("lstUsers").innerHTML = "";
    for (var i = 0; i < userList.length; i++) {
        document.getElementById("lstUsers").innerHTML += "<li style='width:50%;margin-left:5%;'>"+ userList[i] +"</li>";
    }
    document.getElementById("outputResult").style.display = "block";
}

// Cosine Similarity Calculation functions
function ComputeCosineSimilarity(vecA, vecB) {
	return VectorDotProduct(vecA, vecB) / (VectorMagnitude(vecA) * VectorMagnitude(vecB));
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