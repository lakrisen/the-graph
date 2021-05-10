//test code for getting basic information from aave through The Graph
const axios = require('axios'); //use axios to handle http functions

const main = async () =>  { //run asychronous
    try { 

        const result = await axios.post(
            'https://api.thegraph.com/subgraphs/name/aave/protocol', //address of api
            {   //query liqudation call 
                query: `        
                {
                    liquidationCalls (first: 10,    
                        orderBy: timestamp) {
                          id
                          collateralAmount
                          timestamp
                      
                    }

                }
                `
            }
        
        );
        console.log(result.data.data.liquidationCalls);
    } catch(error) {
        console.error(error);
    }
}

main();