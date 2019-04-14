const config = {
    type: Phaser.HEADLESS,
    parent: 'Multiplayer-game',
    width: 800,
    height: 600,
    autoFocus: false,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
   
  function preload() {}
   
  function create() {}
   
  function update() {}
   
  const game = new Phaser.Game(config);

  //we called window.gameLoaded() which we defined in the callback function in index.js
  window.gameLoaded();