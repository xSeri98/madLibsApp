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
let questionArray = [];
let numberOfQuestion = 18;
let questionCounter = 0;


for(let i = numberOfQuestion; i>0; i--){
questionArray.push(prompt(` You still have to replace : ${numberOfQuestion} words, Enter a verb", "Enter a noun`));
questionCounter++;
}

let modifiedStory = `Once upon a time, in a land far away, there lived a nameless ${userInputs[0]}. The monster was dying to have a ${userInputs[1]}. So he decided to set out on a journey to find his ${userInputs[2]}.
But the world was a large ${userInputs[3]}, so the monster split into two on his journey. One monster went to the ${userInputs[4]}. And the other went to the ${userInputs[5]}. The monster who went ${userInputs[6]} came to a village. "Mr. Blacksmith, please give me your ${userInputs[7]}."
"You can't give someone a ${userInputs[8]}."
"If you give me your ${userInputs[9]}, I'll jump into your stomach and make you ${userInputs[10]} in return."
"Really? You'll make me ${userInputs[11]}? Okay, you can have my ${userInputs[12]}."
And the monster went inside the blacksmith's ${userInputs[13]}.
The monster became Otto the blacksmith. Otto was the ${userInputs[14]} man in town. But one day, "Look at me, look at me. The ${userInputs[15]} inside me has grown this large."
Munch-munch, chomp-chomp, gobble-gobble, gulp. The hungry monster ate Otto from the ${userInputs[16]}. He went back to being a monster without a ${userInputs[17]}.`;





console.log(modifiedStory == originalStory);

//console.log(originalStory);