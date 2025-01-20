

// Function 1
function localScopeExample() {
  const localVar = "local";
  console.log(localVar);
}

// Function 2
const globalVar = "global"
function globalScopeExample() {
  console.log(globalVar);
}

// Function 3
function blockScopeExample() {
  if (true) {
    const blockVar = 20;
    return blockVar;
  }
  
}


module.exports = {
  localScopeExample,
  globalScopeExample,
  blockScopeExample
};
