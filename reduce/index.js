// Reduce Helper
// October 13, 2018

/*
    Reference:
    Stephen Grider, ES6 Javascript: The Complete Developer's Guide
    Section 7, Lec. 22, 'The Reduce Helper'
*/

/*
    Trips

    Use reduce to find the sum of all the distances traveled.
    Assign the result to the variable 'totalDistance'

    tripsArray = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

    totalDistance = 47

*/

function trips(array) {
    const totalDistance = array.reduce((accum, object) => {
        return accum += object.distance;
    },0);
    return totalDistance;
}

/*
    Desks

    Use reduce to create an object that tallies the number of sitting
    and standing desks.

        const array = [
            { type: 'sitting' },
            { type: 'standing' },
            { type: 'sitting' },
            { type: 'sitting' },
            { type: 'standing' }
        ];

    => { sitting: 3, standing: 2 }

*/

function desks(array) {
    return array.reduce((accum, desk) => {
        if(desk.type === 'sitting') {
            accum.sitting += 1;
        } else accum.standing += 1;
        return accum;
    }, { sitting: 0, standing: 0 });
}

/*
    Remove Duplicates

    Use reduce to remove duplicate elements in an array.

    [1, 1, 2, 3, 4, 4] => [1, 2, 3, 4]

*/

function removeDuplicates(array) {
    return array.reduce((accum, ele) => {
        let isDupe = accum.find(accumEle => {
            return accumEle === ele;
        });
        if (isDupe) {
            return accum;
        } else {
            accum.push(ele);
            return accum;
        }     
    },[]);
}

module.exports = { trips, desks, removeDuplicates };
