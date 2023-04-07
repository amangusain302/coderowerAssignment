const Countries = ['India', 'Germany', "Nepal", "Finland"]

exports.getCountriesTags = async(req, res) => {
    try {
        let countryMatrix = []; //store 3x3 2d array of countries tags
        let rank = {}; // store rank of different countries
        for (let row = 0; row < 3; row++) {
            let lastCountry;
            let rowArray = []; // store rows of matrix 
            for (let col = 0; col < 3; col++) {
                const index = Math.floor(Math.random() * 4)
                rowArray.push(Countries[index]);
                if (lastCountry === Countries[index]) { // check occurrence of consecutive contries
                    if (rank[Countries[index]]) //country already present in rank array
                        rank[Countries[index]]++;
                    else
                        rank[Countries[index]] = 2;
                }
                lastCountry = Countries[index];
            }
            countryMatrix.push(rowArray); //here we push row array in countryMatrix
        }
        res.status(200).json({
            success: true,
            outcome: countryMatrix,
            rank: rank
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}