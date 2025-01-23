// test.js

const { 
    calculerSomme, 
    calculerDivision, 
    calculerModulo, 
    concatenerPhrases, 
    calculerPrixAvecTVA, 
    calculerSurfaceCercle, 
    secondesDepuisMinuit 
  } = require('./recap');  // Remplacez par le nom du fichier où se trouve votre code
  
  // Simuler prompt() avec jest.spyOn
  beforeEach(() => {
    global.prompt = jest.fn();  // On "espionne" la fonction prompt
  });
  
  test('Test de la fonction calculerSomme', () => {
    prompt.mockReturnValueOnce('5').mockReturnValueOnce('10');  // Simuler les entrées de l'utilisateur
    console.log = jest.fn();  // Espionner la fonction console.log pour vérifier la sortie
  
    calculerSomme();
  
    expect(console.log).toHaveBeenCalledWith('La somme de', 5, 'et', 10, 'est :', 15);
  });
  
  test('Test de la fonction calculerDivision', () => {
    prompt.mockReturnValueOnce('20').mockReturnValueOnce('4');
    console.log = jest.fn();
  
    calculerDivision();
  
    expect(console.log).toHaveBeenCalledWith('Le résultat de', 20, 'divisé par', 4, 'est :', 5);
  });
  
  test('Test de la fonction calculerModulo', () => {
    prompt.mockReturnValueOnce('20').mockReturnValueOnce('6');
    console.log = jest.fn();
  
    calculerModulo();
  
    expect(console.log).toHaveBeenCalledWith('Le reste de la division de', 20, 'par', 6, 'est :', 2);
  });
  
  test('Test de la fonction concatenerPhrases', () => {
    prompt.mockReturnValueOnce('Bonjour').mockReturnValueOnce('tout le monde');
    console.log = jest.fn();
  
    concatenerPhrases();
  
    expect(console.log).toHaveBeenCalledWith('La phrase concaténée est :', 'Bonjour tout le monde');
  });
  
  test('Test de la fonction calculerPrixAvecTVA', () => {
    prompt.mockReturnValueOnce('100');  // Prix HT
    console.log = jest.fn();
  
    calculerPrixAvecTVA();
  
    expect(console.log).toHaveBeenCalledWith('Le prix avec une TVA de 21% est :', '121.00');
  });
  
  test('Test de la fonction calculerSurfaceCercle', () => {
    prompt.mockReturnValueOnce('5');  // Rayon
    console.log = jest.fn();
  
    calculerSurfaceCercle();
  
    expect(console.log).toHaveBeenCalledWith('La surface du cercle avec un rayon de', 5, 'est :', '78.54');
  });
  
  test('Test de la fonction secondesDepuisMinuit', () => {
    prompt.mockReturnValueOnce('1').mockReturnValueOnce('30').mockReturnValueOnce('0');  // Heure, minute, seconde
    console.log = jest.fn();
  
    secondesDepuisMinuit();
  
    expect(console.log).toHaveBeenCalledWith('Le nombre de secondes depuis minuit est :', 5400);
  });
  