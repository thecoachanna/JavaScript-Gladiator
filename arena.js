class Arena {
    constructor(name) {
       this.name = name[0].toUpperCase() + name.slice(1);
       this.gladiators = []
    }

    addGladiator(gladiator){
        if (this.gladiators.length < 2){
            this.gladiators.push(gladiator)
        } else { console.log("You can only have 2 Gladiators in the arena!")}
    }
    fight(){
        console.log("fight", this.gladiators)
        if (this.gladiators[0].weapon == "Trident") {
           if (this.gladiators[1].weapon == "Spear") {
               this.gladiators.pop() 
               return       
            } 
            if (this.gladiators[1].weapon == "Club") {
                this.gladiators.shift()
                return         
             } 
             if (this.gladiators[1].weapon == "Trident") {
                 this.gladiators = []
             }
        }

        if (this.gladiators[0].weapon == "Spear") {
            if (this.gladiators[1].weapon == "Club") {
                this.gladiators.pop() 
                return       
             } 
             if (this.gladiators[1].weapon == "Trident") {
                 this.gladiators.shift() 
                 return        
              } 
              if (this.gladiators[1].weapon == "Spear") {
                this.gladiators = []
            }
        }

        if (this.gladiators[0].weapon == "Club") {
            if (this.gladiators[1].weapon == "Trident") {
                this.gladiators.pop()  
                return      
                 } 

            if (this.gladiators[1].weapon == "Spear") {
                this.gladiators.shift() 
                return        
            }
            if (this.gladiators[1].weapon == "Club") {
                this.gladiators = []
            }   
    }
}
    }



// const megalopolis = new Arena("megalopolis");
// console.log(megalopolis.name);

const colosseum = new Arena("Colosseum");
colosseum.addGladiator(herc)
// console.log(colosseum.gladiators);

colosseum.addGladiator(max)
// console.log(colosseum.gladiators);

colosseum.addGladiator(spar)
// console.log(colosseum.gladiators);

colosseum.fight() 