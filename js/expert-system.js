QUESTIONS = [
    { // 1. jaut.
        question: "Cik cietam materiālam jābūt?",
        type: "single",
        answers: {
			a: 'Jābūt elastīgam ',
			b: 'Jābūt cietam',
			c: 'Jābūt ļoti cietam'
		},
    },
    { // 2. jaut
        question: "Cik stiprām materiālam jābūt?",
        type: "single",
        answers: {
			a: 'Var būt nestiprs ',
			b: 'Pietiekami stiprām lai izturēt noslodzēs',
			c: 'Ļoti stipram'
		},
    },
    { // 3. jaut
        question: "Cik izturīgam materiālam jābūt?",
        type: "single",
        answers: {
			a: 'Var būt neizturīgs',
			b: 'Pietiekami izturīgām lai izturēt ilgstošas noslodzēs',
            c: 'Ļoti izturīgam',
		},
    },
    { // 4. jaut
        question: "Kādos temperatūras apstākļos būs izmantots galējais produkts?",
        type: "single",
        answers: {
			a: 'Mazāk par 40 °C',
			b: 'Mazāk par 90 °C  ',
            c: 'Mazāk par 120 °C',
		},
    },
    { // 5. jaut
        question: "Kur būs izmantots galējais produkts?",
        type: "single",
        answers: {
			a: 'Ārā',
			b: 'Istabā',
		},
    },
    { // 6. jaut
        question: "Papildu īpašības, kas vēlams būtu materiālam (var izvelēties vairākas).",
        type: "multiple",
        answers: {
			a: 'Ūdensizturīgs ',
			b: 'Lēts',
            c: 'Viegli printējams',
            d: 'Izturīgs pret ultravioletu gaismu (piem. no saulēs)',
            e: 'Dabai draudzīgs'
		},
    }
]

function processAnswers(answers){
    let filamentScores = {
        ABS: 0,
        Flexible: 0,
        PLA: 0,
        PETG: 0,
        Nylon: 0,
        CarbonFiberFilled: 0,
        ASA: 0,
        Polycarbonate: 0,
        Polypropylene: 0,
        MetalFilled: 0,
        WoodFilled: 0
    };

    let goodChoise = 5;
    let excelentChoise = 10;
    let poorChoise = -5;

    if(answers[1]['a']){
        filamentScores.Flexible += excelentChoise;
    };
    if(answers[1]['b']){
        filamentScores.ABS += goodChoise;
        filamentScores.PLA += goodChoise;
        filamentScores.PETG += goodChoise;
        filamentScores.ASA += goodChoise;
        filamentScores.Polycarbonate += goodChoise;
        filamentScores.Polypropylene += goodChoise;
    };
    if(answers[1]['c']){
        filamentScores.CarbonFiberFilled += goodChoise;
        filamentScores.MetalFilled += goodChoise;
        filamentScores.WoodFilled += goodChoise;
    };

    if(answers[2]['a']){
        filamentScores.Flexible += goodChoise;
        filamentScores.Polypropylene += goodChoise;
        filamentScores.MetalFilled += goodChoise;
    };
    if(answers[2]['b']){
        filamentScores.ABS += goodChoise;
        filamentScores.PLA += goodChoise;
        filamentScores.PETG += goodChoise;
        filamentScores.ASA += goodChoise;
        filamentScores.CarbonFiberFilled += goodChoise;
        filamentScores.WoodFilled += goodChoise;
    };
    if(answers[2]['c']){
        filamentScores.Nylon += goodChoise;
        filamentScores.Polycarbonate += goodChoise;
    };  

    if(answers[3]['a']){
        filamentScores.PLA += goodChoise;
        filamentScores.CarbonFiberFilled += goodChoise;
        filamentScores.MetalFilled += goodChoise;
        filamentScores.WoodFilled += goodChoise;
    };
    if(answers[3]['b']){
        filamentScores.ABS += goodChoise;
        filamentScores.PETG += goodChoise;
        filamentScores.Polypropylene += goodChoise;
    };
    if(answers[3]['c']){
        filamentScores.Flexible += goodChoise;
        filamentScores.Nylon += goodChoise;
        filamentScores.ASA += goodChoise;
        filamentScores.Polycarbonate += goodChoise;
    };

    if(answers[4]['a']){
        filamentScores.PLA += goodChoise;
        filamentScores.CarbonFiberFilled += goodChoise;
        filamentScores.MetalFilled += goodChoise;
        filamentScores.WoodFilled += goodChoise;
    };
    if(answers[4]['b']){
        filamentScores.ABS += goodChoise;
        filamentScores.Flexible += goodChoise;
        filamentScores.PETG += goodChoise;
        filamentScores.Nylon += goodChoise;
        filamentScores.ASA += goodChoise;
    };
    if(answers[4]['c']){
        filamentScores.Polycarbonate += goodChoise;
        filamentScores.Polypropylene += goodChoise;
    };

    if(answers[5]['a']){
        filamentScores.PLA += poorChoise;
        filamentScores.Nylon += poorChoise;
        filamentScores.PETG += goodChoise;
        filamentScores.ASA += goodChoise;
    };
    if(answers[5]['b']){

    };

    if(answers[6]['a']){
        filamentScores.PETG += goodChoise;
        filamentScores.Polypropylene += goodChoise;
    };
    if(answers[6]['b']){
        filamentScores.ABS += goodChoise;
        filamentScores.PLA += goodChoise;
        filamentScores.PETG += goodChoise;
    };
    if(answers[6]['c']){
        filamentScores.ABS += goodChoise;
        filamentScores.PLA += goodChoise;
        filamentScores.PETG += goodChoise;
    };
    if(answers[6]['d']){
        filamentScores.ASA += excelentChoise;
    };
    if(answers[6]['e']){
        filamentScores.PLA += goodChoise;
        filamentScores.WoodFilled += goodChoise;
    };

    return filamentScores;
}