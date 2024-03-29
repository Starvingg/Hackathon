
const clientCache = new cacheAPI();

const form = document.querySelector('.formSubmission');
const sentenceInput = document.getElementById('fname');
const playerFormID = document.getElementById('playerFormID');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const sentence = sentenceInput.value;
    const playerID = playerFormID.value;

    console.log('Sentence:', sentence);
    console.log('Player ID:', playerID);

    clientCache.pushData(playerID, sentence)

    form.reset();
    clientCache.fetchCache()
});


// function updateResults ()  {
//     const displayResults = document.querySelector('.results-displayResults');
//     displayResults.innerHTML = '';

//     for(let i=0; i< 4; i++){
//         const pTag = document.createElement('p');
//         console.log(infoArr);
//         // pTag.textContent = infoArr[i].sentence;
//         displayResults.appendChild(pTag);

//     }

// }

const updateResults = async () => {
    try {
        let infoArr = await clientCache.fetchCache();
        const displayResults = document.querySelector('.results-displayResults');
        displayResults.innerHTML = '';

        let Log0 = infoArr[0].sentence;
        let Log1 = infoArr[1].sentence;
        let Log2 = infoArr[2].sentence;
        let Log3 = infoArr[3].sentence;

        const pTag0 = document.createElement('p');
        pTag0.textContent = Log0;
        displayResults.appendChild(pTag0);

        const pTag1 = document.createElement('p');
        pTag1.textContent = Log1;
        displayResults.appendChild(pTag1);

        const pTag2 = document.createElement('p');
        pTag2.textContent = Log2;
        displayResults.appendChild(pTag2);

        const pTag3 = document.createElement('p');
        pTag3.textContent = Log3;
        displayResults.appendChild(pTag3);

        console.log("Test:, ", clientCache.fetchCache());
    } catch (error) {
        console.log(error);
    }
}

const refreshButton = document.querySelector('.refreshPage');

refreshButton.addEventListener('click', () => {
    updateResults();
});

