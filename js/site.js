
showQuestions();
function showQuestions(){
    let questionContainer = document.getElementById("question-container");
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<QUESTIONS.length; i++){
		
		// first reset the list of answers
        answers = [];
        let type;
        if (QUESTIONS[i].type == "multiple"){
            type = "checkbox"
        } else {
            type = "radio"
        }
		// for each available answer to this question...
		for(letter in QUESTIONS[i].answers){

			// ...add an html radio button
			answers.push(
				`<div>
					 <input class="form-check-input" type="${type}" name="question${i}" id="question${i}-aswer${letter}" value="${letter}">
                     <label class="form-check-label" for="question${i}-aswer${letter}">
                     ${letter} : ${QUESTIONS[i].answers[letter]}
                     </label>
				</div>`
			);
		}

		// add this question and its answers to the output
		output.push(
            
            `<div class="question-box">
             <div class="question">${QUESTIONS[i].question}</div>
             <div class="answers">${answers.join('')}</div>
             </div>`
		);
	}

	// finally combine our output list into one string of html and put it on the page
	questionContainer.innerHTML = output.join('');
}


function gatherAnswers(){
    let answers = {};
    for(var q = 0; q < QUESTIONS.length; q++)
    {
        answers[q+1] = {};
        for(var a of Object.keys(QUESTIONS[q].answers)){
            if (document.getElementById(`question${q}-aswer${a}`).checked){
                answers[q+1][a] =  true;
            } else {
                answers[q+1][a] = false;
            }
              
        }
    }
    return answers;
}

RESULT_INFO = {
    ABS: {
        link: 'https://www.simplify3d.com/support/materials-guide/abs/'
    },
    Flexible: {
        link: 'https://www.simplify3d.com/support/materials-guide/flexible/'
    },
    PLA: {
        link: 'https://www.simplify3d.com/support/materials-guide/pla/'
    },
    PETG: {
        link: 'https://www.simplify3d.com/support/materials-guide/petg/'
    },
    Nylon: {
        link: 'https://www.simplify3d.com/support/materials-guide/nylon/'
    },
    CarbonFiberFilled: {
        link: 'https://www.simplify3d.com/support/materials-guide/carbon-fiber-filled/'
    },
    ASA: {
        link: 'https://www.simplify3d.com/support/materials-guide/asa/'
    },
    Polycarbonate: {
        link: 'https://www.simplify3d.com/support/materials-guide/polycarbonate/'
    },
    Polypropylene: {
        link: 'https://www.simplify3d.com/support/materials-guide/polypropylene/'
    },
    MetalFilled: {
        link: 'https://www.simplify3d.com/support/materials-guide/metal-filled/'
    },
    WoodFilled: {
        link: 'https://www.simplify3d.com/support/materials-guide/wood-filled/'
    },
}
function showResult(){
    let answers = gatherAnswers();
    let scores = processAnswers(answers);
    //console.log(JSON.stringify(scores));
    let scoreArray = Object.entries(scores);
    scoreArray.sort(function(a,b) { return b[1]-a[1]});
    //console.log("Heigest:");
    console.log(JSON.stringify(scoreArray));
    let filCodeName = scoreArray[0][0]
    document.getElementById("question-container").classList.add("d-none");
    document.getElementById("show-result-btn").classList.add("d-none");
    document.getElementById("result-text").innerHTML = 
    `<p>Ieteicam Jums izvelēties ${filCodeName} filamentu</p>
        <p> Vairāk informācijas: </p>
        <p> [Avots: <a href="${RESULT_INFO[filCodeName].link}">${RESULT_INFO[filCodeName].link}</a>]
    `
    document.getElementById("result-iframe").src = RESULT_INFO[filCodeName].link;
    document.getElementById("result-container").classList.remove("d-none");
}

