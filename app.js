"use strict";
let originalStory = `Once upon a time, in a land far away, there lived a nameless monster. The monster was dying to have a name. So he decided to set out on a journey to find his name.
But the world was a large place, so the monster split into two on his journey. One monster went to the East. And the other went to the West. The monster who went East came to a village. "Mr. Blacksmith, please give me your name."
"You can't give someone a name."
"If you give me your name, I'll jump into your stomach and make you strong in return."
"Really? You'll make me stronger? Okay, you can have my name."
And the monster went inside the blacksmith's stomach.
The monster became Otto the blacksmith. Otto was the strongest man in town. But one day, "Look at me, look at me. The monster inside me has grown this large."
Munch-munch, chomp-chomp, gobble-gobble, gulp. The hungry monster ate Otto from the inside. He went back to being a monster without a name.`;

let userInputs =[];
let numberOfQuestion = 18;
let questionCounter = 0;
let questionArray = [
    `Please Enter a  noun/verb`,
    `Please Enter a  object/anything`,
    `Please Enter a  object/anything`,
    `Please Enter a noun/verb`,
    `Please Enter a place/noun`,
    `Please Enter a place/noun`,
    `Please Enter a synonym of "mad"`,
    `Please Enter the identity of a human being)`,
    `Please Enter  most imporant thing to a human being`,
    `Please Enter most imporant thing to a human being`,
    `Please Enter  an adjective`,
    `Please Enter an adjective`,
    `Please Enter four letter word`,
    `Please Enter place/body part`,
    `Please Enter a noun`,
    `Please Enter scary being`,
    `Please Enter a body part`,
    `Please Enter the first thing your parent gave to you`
  ];


for(let i = numberOfQuestion; i>0; i--){
console.log(questionArray[questionCounter] + `; (${i} questions left)`);    
userInputs.push(prompt(` You still have to replace : ${i} words \n ${questionArray[questionCounter]}`));
questionCounter++;
}
let modifiedStory = `<h2 id="SprintProject"><mark>Once upon a time, in a land far away, there lived a nameless ${userInputs[0]}. The monster was dying to have a ${userInputs[1]}. So he decided to set out on a journey to find his ${userInputs[2]}.</h2>
<h2><mark>But the world was a large ${userInputs[3]}, so the monster split into two on his journey. One monster went to the ${userInputs[4]}. And the other went to the ${userInputs[5]}. The monster who went ${userInputs[6]} came to a village. "Mr. Blacksmith, please give me your ${userInputs[7]}."</h2>
<h2><mark>"You can't give someone a ${userInputs[8]}."
"If you give me your ${userInputs[9]}, I'll jump into your stomach and make you ${userInputs[10]} in return."</h2>
<h2><mark>"Really? You'll make me ${userInputs[11]}? Okay, you can have my ${userInputs[12]}."
And the monster went inside the blacksmith's ${userInputs[13]}.</h2>
<h2><mark>The monster became Otto the blacksmith. Otto was the ${userInputs[14]} man in town. But one day, "Look at me, look at me. The ${userInputs[15]} inside me has grown this large."</h2>
<h2><mark>Munch-munch, chomp-chomp, gobble-gobble, gulp. The hungry monster ate Otto from the ${userInputs[16]}. He went back to being a monster without a ${userInputs[17]}.</h2>`;

alert("Your Awesome and Crazy Story is now ready ! I hope you are too 😂");




console.log(modifiedStory);
document.write(modifiedStory);

//console.log(originalStory);