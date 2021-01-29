const solve = (strArg) => {
    strArg = strArg.split("")
    return strArg.filter((str)=>{
      return str !== ')' && str !== '('
    }).join("");
  };
  