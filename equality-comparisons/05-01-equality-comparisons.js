// equalityComparisons.js

// Function 1
function looseEqualityComparison(a, b) {
  return a == b;
}

// Function 2
function strictEqualityComparison(a, b) {
  return a === b;
}

// Function 3
function notEqualComparison(a, b) {
  return a != b;
}

// Function 4
function strictNotEqualComparison(a, b) {
  return a !== b;
}

// Function ()
function deepEqualityComparison(a, b) {
  if (a === b) return true;

    // Vérifier si l'un des deux n'est pas un objet ou est null
    if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
        return false;
    }

    // Obtenir les clés des deux objets
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    // Vérifier si le nombre de clés est différent
    if (keysA.length !== keysB.length) return false;

    // Vérifier récursivement chaque clé et chaque valeur
    for (let key of keysA) {
        // Vérifier si la clé existe dans l'autre objet
        if (!keysB.includes(key)) return false;

        // Vérifier récursivement la valeur associée à cette clé
        if (!deepEqualityComparison(a[key], b[key])) return false;
    }

    return true; // Tous les tests ont réussi
}

// Function 6
function objectReferenceComparison(a, b) {
  return a === b;
  
}


module.exports = {
  looseEqualityComparison,
  strictEqualityComparison,
  notEqualComparison,
  strictNotEqualComparison,
  deepEqualityComparison,
  objectReferenceComparison
};