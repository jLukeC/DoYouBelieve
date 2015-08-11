// prepopulate with data
var starters = [
    {
        text: '"The Fourth Amendment was what we fought the Revolution over. John Adams said it was the spark that led to our war for independence."',
        speaker: 'Rand Paul',
        answer: true
    },
    {
        text: '"In FY 2014 Planned Parenthood performed 327,653 abortions while receiving $528 million from taxpayers, in violation" of "the Hyde amendment."',
        speaker: 'John Cornyn',
        answer: false
    },
    {
        text: '"Wisconsin’s "rainy day fund" is "165 times bigger than when we first took office."',
        speaker: 'Scott Walker',
        answer: true
    }
];

if (Statements.find().count() === 0) {
    starters.forEach(function(s) {
        Statements.insert(s);
    });
}
