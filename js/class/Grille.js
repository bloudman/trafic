var grille = function(dim, size, density){
    this.dim = dim;
    this.size = size;
    this.density = density;
    this.tab = [];
    this.Create();
}

grille.prototype.constructor = grille;

grille.prototype.Create = function(){
    var i = 1;
    var tabTemp1 = [];
    while(i < this.dim){
        var tabTemp2 = [];
        if(i == 1){
            for(var j = 0; j < this.size; j++){
                tabTemp1.push(new objet(0));
            }
        }else{
            for(var j = 0; j < this.size; j++){
                tabTemp2.push(tabTemp1);
            }
            tabTemp1 = tabTemp2;
        }
        i++;
    }
    for(var j = 0; j < this.size; j++){
        this.tab.push(tabTemp1);
    }
}

grille.prototype.setval = function(data){
    console.log(data);
    var val = data[data.length -1];
    data.pop();
    console.log(data);
    var temp = this.ReturnObj(data);
    temp.val = val;
}

grille.prototype.getNeighbourhood = function(data){
    var TempTab = []    ;
    if(data[0] - 1 >= 0){
        TempTab.push(this.tab[data[0]-1]);
    }
    TempTab.push(this.tab[data[0]]);
    if(data[0] + 1 < this.size){
        TempTab.push(this.tab[data[0]+1]);
    }
    //k = dimension
    for(var compteur=1; compteur < data.length; compteur++ ){
        var TempTab2 = [];
        for(var j = 0; j < TempTab.length; j++){
            if(data[compteur] - 1 >= 0){
                TempTab2.push(TempTab[j][data[compteur]-1]);
            }

            TempTab2.push(TempTab[j][data[compteur]]);
            if(data[compteur] + 1 < this.size){
                TempTab2.push(TempTab[j][data[compteur]+1]);
            }
        }
        TempTab = TempTab2;
        //console.log(TempTab);
    }
    return TempTab;
}


grille.prototype.ReturnObj = function(data){
    var temp1 = this.tab;
    var temp2 = [];
    for(var i = 0; i < data.length; i++){
        var temp2 = [];
        temp2 = temp1[data[i]];
        temp1 = temp2;
    }
    return temp1;
}

var objet = function(val){
    this.val = val;
}

objet.prototype.constructor = objet;

objet.prototype.setval = function(val){
    this.val = val;
}
