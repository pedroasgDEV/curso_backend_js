function Chain() {
    //Atributes 
    this.next = null; //Next cel of the chain
    this.length = 0; //Length of the chain
    
    //Methods
    //Very if the chain is empty
    this.isEmpty = () => this.tamanho === 0;
    
    //Add a cell in the end of the chain
    this.push = value => {
        //Verify if is in the end
        //If not at the end of the chain, go to the next cell
        if (this.next != null) this.next.push(value); 
        //if in the end of the chain, add new obj references to the next atribute
        else this.next = {value: value, ...(new Chain())};
       
        //Increase the chain length
        this.length++; 
    };
    
    //Remove a cell in the end of the chain and return it
    this.pop = () => {
        //Verify if the chain is empty
        //Throw a erro if is empty
        if(this.isEmpty()) throw new Error("The chain is empty");
        
        //The obj that will be returned
        let backObj;
        
        //Verify if is in before the end
        //if is not before the end go to the next
        if (this.next.next != null) backObj = this.next.push(valor); 
        //if is before the end remove the last cell
        else {backObj = {...this.next}; this.next = null;}
        
        //Decrease the chain length
        this.length--;
        
        //Return a copy  of the obj
        return backObj;
    };
    
    //Add a cell in the begin of the chain
    this.unshift = value => {
        //Create a new cell
        const tempObs = {value: value, ...(new Chain())};
        
        //Link the old first cell to new cell
        tempObs.next = this.next;
            
        //Add a copy of the new cell in the begin thisof the chain
        this.next = {...tempObs};
        
        //Remove the cell
        tempObs = null;
        
        //Increase the chain length
        this.length++; 
    };
    
    //Remove a cell in the begin of the chain and return it
    this.shift = () => {
        //Verify if the chain is empty
        //Throw a erro if is empty
        if(this.isEmpty()) throw new Error("The chain is empty");
        
        //The obj that will be returned
        let backObj = {...this.next};
        
        //Modify the references in the head of the chain
        this.next = backObj.next;
        
        //Decrease the chain length
        this.length--;
        
        //Return a copy  of the obj
        return backObj;
    };


    //? Add forEach
    //? Add maps
    //? Add reduce
    //? Add filter
    //? Add toArray
    //? add toChain
    //? Add constructor
    //? Add isChain()
    //? sobrecareegar metodo de output
    //? Add .at(index)

    
    
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
//https://dev.to/trinitypath/estruturas-de-dados-em-javascript-com-exemplos-de-codigo-4an0