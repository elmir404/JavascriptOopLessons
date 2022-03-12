function Question(text, choices, answer) {
    this.text = TextEvent;
    this.choices = choices;
    this.answer = answer;
}
//Question prototype
Question.prototype.CheckAnswer = function (answer) {
    return this.answer === answer;
}
//quiz constructor
function Quiz(Questions) {
    this.Questions = Questions;
    this.score = 0;
    this.questionIndex = 0;
}
//quiz prototype
Quiz.prototype.GetQuestin = function () {
    return this.Questions[this.questionIndex];
}
//quiz isfinis
Quiz.prototype.iSfinish = function () {
    return this.Questions.length === this.questionIndex;
}
//quiz guess
Quiz.prototype.Guess = function (answer) {
    var question = this.GetQuestin();
    if (question.CheckAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

var q1 = new Question("what's the best programming", ["c#", "javascript", "python", "asp.net"], "javascript");
var q2 = new Question("what's the most popular programing language?", ["python", "javascript", "html"], "javascript");
var q3 = new Question("what's the best modern programing language?", ["python", "javascript", "html"], "javascript");
var Questions = [q1, q2, q3];
var quiz = new Quiz(Questions);
loadQuestion();
function loadQuestion() {
    if (quiz.iSfinish()) {
        showScore();
    } else {
        var question = quiz.GetQuestin();
        var choices = question.choices;
        console.log(choices);
        document.querySelector('#question').textContent = question.text;
        //for (var i = 0; i < choices.length; i++) {
          //  var element = document.querySelector('#choice' + i);
          //  element.innerHTML = choices[i];
        //}
    }
}
function showScore() {

}