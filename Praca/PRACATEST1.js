 const aa = "test";
 const bb = "test2";
 

  
    
 var lines = [];
 var intermediateObj;
 var outputI;
 var str;

function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8      
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var csv = event.target.result;
	processDataAsObj(csv); 
	          
}

//if your csv file contains the column names as the first line
function processDataAsObj(csv){
    var allTextLines = csv.split(/\r\n|\n/);
    
	
    //first line of csv
    var keys = allTextLines.shift().split(',');
	
    while (allTextLines.length) {
        var arr = allTextLines.shift().split(',');
        var obj = {};
        for(var i = 0; i < keys.length; i++){
            obj[keys[i]] = arr[i];
	}
        lines.push(obj);
    }
        console.log(lines);
	//drawOutputAsObj(lines);
	   
		   intermediateObj = lines[0];
		  var outputI = Object.values(intermediateObj).join().split(';').slice(1,intermediateObj.length).join();
	      
		  str = aa + outputI + bb;
		 console.log(str); 
	   return str;
	}

		

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

function fileGenerator() {
	
	var textFile = null,
    
    makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    if (textFile !== null) {
         window.URL.revokeObjectURL(textFile);
    }
         textFile = window.URL.createObjectURL(data);
         return textFile;
    };

    var create = document.getElementById('create');
    

    create.addEventListener('click', function () {
    var link = document.getElementById('download_link');
    link.href = makeTextFile(processDataAsObj(csv));
    link.style.display = 'block';
    }, false);

};

fileGenerator();





    