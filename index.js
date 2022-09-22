//ACTIVITY 16-A
//3. Create a trainer object using object literals. 
/* 4. Initialize/add the following trainer object properties: 
- Name (String) 
 - Age (Number) 
 - Pokemon (Array) 
 - Friends (Object with Array values for properties) 
 */
let pokemonTrainer = {
    name: 'Ash Ketchum',
    age: 10,
    pokemon: ['Pikachu', 'Charizard', 'Squirtle', 'Bulbasaur'],
    friends:{
        hoenn:['May', 'Max'],
        kanto: ['Brock', 'Misty']

    },
////5. Initialize/add the trainer object method named talk that prints out the message Pikachu! I choose you! 
    talk:function(){
        console.log("Pikachu! I choose you!");
    }

}
//6. Access the trainer object properties using dot and square bracket notation. 
console.log(pokemonTrainer);
//dot notation
console.log("Result of dot notation: ");
console.log(pokemonTrainer.name);
//square bracket notation
console.log("Result of square bracket notation:");
console.log(pokemonTrainer['pokemon']);
// 7. Invoke/call the trainer talk object method.
console.log("Result of talk method");
pokemonTrainer.talk();


/*
 
 8. Create a constructor for creating a pokemon with the following properties: 
 - Name (Provided as an argument to the contructor) 
 - Level (Provided as an argument to the contructor) 
 

*/
let targetHealth;
function Pokemon(name, level){
    this.name = name;
    this.level= level;
    this.health = level*2;// - Health (Create an equation that uses the level property)
    this.attack = level;// - Attack (Create an equation that uses the level property) 

    //////methods 
//10. Create a tackle method that will subtract the health property of the target pokemon object with the attack property of the object that used the tackle method. 
    this.tackle = function(target){
        targetHealth = target.health - this.attack;
        console.log(this.name + ' tackled ' + target.name)
        console.log(target.name+"'s health is now reduced to " + targetHealth)

//12. Create a condition in the tackle method that if the health property of the target pokemon object is less than or equal to 0 will invoke the faint method. 
        if(targetHealth <=0){
            target.faint();
        }
    };  

//11. Create a faint method that will print out a message of targetPokemon has fainted.   
    this.faint = function(){
        console.log(this.name + ' fainted')
    }


}

//9. Create/instantiate several pokemon object from the constructor with varying name and level properties. 
let pikachu = new Pokemon("Pikachu", 12);
let geodude = new Pokemon("Geodude", 8);
let mewtwo = new Pokemon ("Mewtwo", 100);

console.log(pikachu);
console.log(geodude);
console.log(mewtwo);

geodude.tackle(pikachu);
pikachu.health = targetHealth;
console.log(pikachu);

mewtwo.tackle(geodude);
geodude.health = targetHealth;
console.log(geodude);
/*


 
 
 

 

 13. Invoke the tackle method of one pokemon object to see if it works as intended. 


*/