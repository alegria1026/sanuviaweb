import * as Phaser from 'phaser'

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene')
    this.plantStage = 0
    this.waterLevel = 0
    this.needsWater = false
    this.plantGrown = false
    this.inventory = {
      seeds: 3,
      fruits: 0
    }
  }

  preload() {
    this.load.image('background', '/bg.png')
    this.load.spritesheet('soil', '/soil-states.png', { frameWidth: 467, frameHeight: 181 })
    this.load.image('wateringcan', '/wateringcan.png')
    this.load.image('seed', '/seed.png')
    this.load.image('basket', '/basket.png')
    this.load.image('seedling', '/seedling.png')
    this.load.image('sprout', '/sprout.png')
    this.load.image('plant', '/plant.png')
    this.load.image('plant-fruit', '/plant-fruit.png')
    this.load.image('droplet', '/water-drop.png')
  }

  create() {
    this.createBackground()
    this.createSoil()
    this.createTools()
    this.createUI()
    this.showTutorial()
    this.setupDayNightCycle()
  }

  createBackground() {
    this.add.image(400, 300, 'background').setScale(1.2)
  }

  createSoil() {
    this.soil = this.add.image(400, 530, 'soil', 0)
      .setInteractive()
      .setScale(0.35)
      .on('pointerover', () => {
        if (this.plantStage === 0 || this.plantStage === 4) {
          this.soil.setTint(0xdddddd)
        }
      })
      .on('pointerout', () => {
        this.soil.clearTint()
      })
    

    
    this.plantContainer = this.add.container(400, 480)
    this.waterIndicator = this.add.graphics()
    this.updateWaterIndicator()
    this.soil.on('pointerdown', () => {
      if (this.selectedTool === 'seed' && this.inventory.seeds > 0 && this.plantStage === 0) {
        this.plantSeed()
      } else if (this.plantStage === 4) {
        this.harvestPlant()
      }
    })
  }

  createTools() {
    const toolsStartX = 680;
    const toolsStartY = 230; // Aumentamos la posición inicial Y (era 120)
    const toolSpacingY = 110; // Aumentamos el espaciado vertical entre herramientas (era 90)
    const toolScale = 0.12; // Reducimos un poco más la escala (era 0.12)

    this.seedTool = this.add.image(toolsStartX, toolsStartY, 'seed')
      .setInteractive()
      .setScale(toolScale)
      .setOrigin(0.5)
      .on('pointerdown', () => this.selectTool('seed'))
      .on('pointerover', () => this.seedTool.setAlpha(0.8))
      .on('pointerout', () => this.seedTool.setAlpha(1));

    this.wateringCan = this.add.image(toolsStartX, toolsStartY + toolSpacingY, 'wateringcan')
      .setInteractive()
      .setScale(toolScale * 1.3) // Mantiene el ajuste proporcional para la regadera
      .setOrigin(0.5)
      .on('pointerdown', () => this.selectTool('water'))
      .on('pointerover', () => this.wateringCan.setAlpha(0.8))
      .on('pointerout', () => this.wateringCan.setAlpha(1));

    this.basket = this.add.image(toolsStartX, toolsStartY + 2 * toolSpacingY, 'basket')
      .setInteractive()
      .setScale(toolScale)
      .setOrigin(0.5)
      .on('pointerdown', () => this.selectTool('harvest'))
      .on('pointerover', () => this.basket.setAlpha(0.8))
      .on('pointerout', () => this.basket.setAlpha(1));

    this.droplet = this.add.image(400, 410, 'droplet').setVisible(false).setScale(0.1);
  }

  createUI() {
    const panelX = 650;
    const panelY = 100;
    const panelWidth = 250;
    const panelHeight = 150;
    const shadowOffset = 5;
    const shadowColor = 0x000000;
    const shadowAlpha = 0.2;

    // Crear la sombra (un rectángulo detrás del panel principal)
    this.panelShadow = this.add.rectangle(
      panelX + shadowOffset,
      panelY + shadowOffset,
      panelWidth,
      panelHeight,
      shadowColor,
      shadowAlpha
    )
    .setOrigin(0.5)
    .setDepth(-1); // Aseguramos que la sombra esté detrás del panel

    // Rediseñamos el panel de información para que se vea más bonito
    this.panel = this.add.rectangle(panelX, panelY, panelWidth, panelHeight, 0xf9f9f9, 0.85)
      .setStrokeStyle(2, 0x388e3c, 0.7)
      .setOrigin(0.5);

    const headerBg = this.add.rectangle(panelX, panelY - panelHeight / 2 + 20, panelWidth, 40, 0x388e3c, 0.8)
      .setOrigin(0.5);

    this.add.text(panelX, panelY - panelHeight / 2 + 20, 'INVENTARIO',
      { fontSize: '18px', fill: '#FFFFFF', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' })
      .setOrigin(0.5);

    this.seedText = this.add.text(panelX - panelWidth / 2 + 25, panelY - 20, `Semillas: ${this.inventory.seeds}`,
      { fontSize: '18px', fill: '#333', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' });

    this.fruitText = this.add.text(panelX - panelWidth / 2 + 25, panelY + 10, `Frutas: ${this.inventory.fruits}`,
      { fontSize: '18px', fill: '#333', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' });

    this.statusText = this.add.text(panelX - panelWidth / 2 + 25, panelY + 40, 'Estado: Listo para plantar',
      { fontSize: '16px', fill: '#333', fontFamily: 'Arial, sans-serif', fontStyle: 'italic' });

    // Botón de ayuda más bonito con efecto hover
    this.helpButtonCircle = this.add.circle(panelX + panelWidth / 2 - 20, panelY - panelHeight / 2 + 20, 18, 0x388e3c)
      .setInteractive()
      .on('pointerover', () => this.helpButtonCircle.setFillStyle(0x2e7d32))
      .on('pointerout', () => this.helpButtonCircle.setFillStyle(0x388e3c));

    const helpText = this.add.text(panelX + panelWidth / 2 - 20, panelY - panelHeight / 2 + 20, '?',
      { fontSize: '24px', fill: '#fff', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' })
      .setOrigin(0.5);

    this.helpButtonCircle.on('pointerdown', () => this.showTutorial());
  }

  selectTool(tool) {
    this.seedTool.setTint(0xffffff)
    this.wateringCan.setTint(0xffffff)
    this.basket.setTint(0xffffff)
    this.selectedTool = tool
    switch (tool) {
      case 'seed':
        this.seedTool.setTint(0x00ff00)
        break
      case 'water':
        this.wateringCan.setTint(0x00ff00)
        break
      case 'harvest':
        this.basket.setTint(0x00ff00)
        break
    }
  }

  plantSeed() {
    if (this.inventory.seeds <= 0) return
    this.inventory.seeds--
    this.updateInventoryText()
    const seed = this.add.image(0, 0, 'seedling').setScale(0.2)
    this.plantContainer.add(seed)
    this.plantStage = 1
    this.needsWater = true
    this.soil.setFrame(1)
    this.statusText.setText('Estado: Necesita agua')
    this.waterLevel = 0
    this.updateWaterIndicator()
  }

  waterPlant() {
    if (this.plantStage === 0 || this.plantStage === 4) return
    this.droplet.setVisible(true)
    this.tweens.add({
      targets: this.droplet,
      y: '+= 30',
      alpha: 0,
      duration: 800,
      onComplete: () => {
        this.droplet.setVisible(false)
        this.droplet.setAlpha(1)
        this.droplet.y -= 30
      }
    })
    
    // Efecto visual al regar
    const splashParticles = this.add.particles(this.droplet.x, this.droplet.y + 30, 'droplet', {
      scale: { start: 0.05, end: 0.01 },
      speed: { min: 20, max: 50 },
      angle: { min: 0, max: 360 },
      lifespan: 600,
      gravityY: 100,
      quantity: 5,
      alpha: { start: 0.8, end: 0 }
    });
    
    this.waterLevel = Math.min(this.waterLevel + 33, 100)
    this.updateWaterIndicator()
    if (this.waterLevel >= 100 && this.needsWater) {
      this.growPlant()
    }
  }

  growPlant() {
    this.plantContainer.removeAll()
    this.plantStage++
    this.needsWater = true
    this.waterLevel = 0
    this.updateWaterIndicator()
    let plantImage
    switch (this.plantStage) {
      case 2:
        plantImage = this.add.image(0, -10, 'sprout').setScale(0.25)
        this.statusText.setText('Estado: Creciendo')
        break
      case 3:
        plantImage = this.add.image(0, -30, 'plant').setScale(0.3)
        this.statusText.setText('Estado: Casi listo')
        break
      case 4:
        plantImage = this.add.image(0, -40, 'plant-fruit').setScale(0.35)
        this.statusText.setText('Estado: ¡Listo para cosechar!')
        this.needsWater = false
        break
    }
    this.plantContainer.add(plantImage)
    
    // Animación más vistosa para el crecimiento
    this.tweens.add({
      targets: this.plantContainer,
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 300,
      yoyo: true,
      ease: 'Sine.easeInOut',
      onComplete: () => {
        // Destellos alrededor de la planta al terminar de crecer
        if (this.plantStage === 4) {
          const particles = this.add.particles(400, 410, 'droplet', {
            scale: { start: 0.1, end: 0.01 },
            speed: 80,
            angle: { min: 0, max: 360 },
            lifespan: 1000,
            blendMode: 'ADD',
            tint: 0xffff00,
            quantity: 1,
            frequency: 100,
            maxParticles: 10
          });
          
          this.time.delayedCall(1000, () => {
            particles.destroy();
          });
        }
      }
    });
  }

  harvestPlant() {
    if (this.plantStage !== 4) return
    
    // Animación de cosecha
    this.tweens.add({
      targets: this.plantContainer,
      alpha: 0,
      y: "-=30",
      duration: 500,
      onComplete: () => {
        this.inventory.fruits += 2
        this.updateInventoryText()
        this.plantContainer.removeAll()
        this.plantContainer.y += 30
        this.plantContainer.alpha = 1
        this.plantStage = 0
        this.soil.setFrame(0)
        this.waterLevel = 0
        this.updateWaterIndicator()
        this.statusText.setText('Estado: Listo para plantar')
        
        // Efecto de fruta obtenida
        const fruitText = this.add.text(400, 370, '+2 Frutas', { 
          fontSize: '24px', 
          fill: '#388e3c', 
          fontWeight: 'bold',
          stroke: '#fff',
          strokeThickness: 4,
          fontFamily: 'Arial, sans-serif' 
        }).setOrigin(0.5);
        
        this.tweens.add({
          targets: fruitText,
          y: "-=50",
          alpha: 0,
          duration: 1500,
          onComplete: () => fruitText.destroy()
        });
      }
    });
    
    // Animación de canasta
    this.tweens.add({
      targets: this.basket,
      scaleX: 0.25,
      scaleY: 0.25,
      duration: 300,
      yoyo: true,
      ease: 'Bounce.easeOut'
    })
  }

  updateWaterIndicator() {
    this.waterIndicator.clear()
    if (this.plantStage > 0 && this.plantStage < 4) {
      if (this.waterText) {
        this.waterText.destroy()
      }
      this.waterText = this.add.text(350, 565, 'Agua:', {
        fontSize: '12px',
        fill: '#333',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold'
      })

      // Hacemos un fondo para la barra de agua
      this.waterIndicator.fillStyle(0xDDDDDD, 0.7)
      this.waterIndicator.fillRect(385, 565, 80, 12)

      // Barra de agua con gradiente de colores
      let color = 0x3498db;
      if (this.waterLevel < 30) color = 0xe74c3c;
      else if (this.waterLevel < 60) color = 0xf39c12;

      this.waterIndicator.fillStyle(color, 0.8)
      this.waterIndicator.fillRect(385, 565, 80 * (this.waterLevel / 100), 12)

      // Borde más fino y redondeado
      this.waterIndicator.lineStyle(1, 0x0066cc, 1)
      this.waterIndicator.strokeRect(385, 565, 80, 12)
    } else if (this.waterText) {
      this.waterText.destroy()
    }
  }

  updateInventoryText() {
    this.seedText.setText(`Semillas: ${this.inventory.seeds}`)
    this.fruitText.setText(`Frutas: ${this.inventory.fruits}`)
    
    // Efecto de actualización
    const itemToAnimate = this.inventory.seeds > 0 ? this.seedText : this.fruitText;
    this.tweens.add({
      targets: itemToAnimate,
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 200,
      yoyo: true
    });
  }

  showTutorial() {
  // Fondo oscurecido con efecto de transición
    const overlay = this.add.rectangle(400, 300, 800, 600, 0x000000, 0)
    this.tweens.add({
      targets: overlay,
      alpha: 0.8,
      duration: 300
    });

    const popupWidth = 500;
    const popupHeight = 400;
    const shadowOffset = 6;
    const shadowColor = 0x000000;
    const shadowAlpha = 0.3;

    // Crear la sombra del popup
    const popupShadow = this.add.rectangle(
      400 + shadowOffset,
      300 + shadowOffset,
      popupWidth,
      popupHeight,
      shadowColor,
      shadowAlpha
    )
    .setOrigin(0.5)
    .setDepth(-1); // Aseguramos que la sombra esté detrás del popup

    // Panel más elegante para el tutorial
    const popup = this.add.rectangle(400, 300, popupWidth, popupHeight, 0xffffff)
      .setStrokeStyle(3, 0x388e3c)
      .setOrigin(0.5); // Asegúrate de que el origen esté centrado

    // Título más bonito
    const titleBg = this.add.rectangle(400, 150, popupWidth, 50, 0x388e3c)
      .setOrigin(0.5);

    const title = this.add.text(400, 150, 'Cómo Cultivar Plantas', {
      fontSize: '22px',
      fill: '#FFFFFF',
      fontStyle: 'bold',
      fontFamily: 'Arial, sans-serif'
    }).setOrigin(0.5);

    // Instrucciones con iconos
    const instructions = this.add.text(240, 220,
      '1. Selecciona el paquete de semillas y haz clic en la tierra para plantar\n\n' +
      '2. Selecciona la regadera y haz clic para regar\n\n' +
      '3. Riega regularmente hasta que la planta dé frutos\n\n' +
      '4. Cosecha cuando esté lista usando la canasta\n\n' +
      '¡Intenta cultivar tantas plantas como sea posible!',
      {
        fontSize: '16px',
        fill: '#333',
        align: 'left',
        fontFamily: 'Arial, sans-serif',
        lineSpacing: 8
      }
    );

    // Ajusta la posición de las instrucciones si es necesario
    instructions.setPosition(400 - popupWidth / 2 + 20, 220);

    // Decoración en lugar de línea verde
    const divider = this.add.rectangle(400, 430, 450, 1, 0x388e3c, 0.5)
      .setOrigin(0.5);

    // Botón más elegante con efectos
    const closeButtonBg = this.add.rectangle(400, 460, 250, 50, 0x388e3c)
      .setInteractive()
      .setOrigin(0.5);

    const closeButton = this.add.text(400, 460, '¡Empezar a Cultivar!', {
      fontSize: '20px',
      fill: '#fff',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold'
    }).setOrigin(0.5);

    closeButtonBg
      .on('pointerover', () => closeButtonBg.setFillStyle(0x2e7d32))
      .on('pointerout', () => closeButtonBg.setFillStyle(0x388e3c))
      .on('pointerdown', () => {
        this.tweens.add({
          targets: [overlay, popupShadow, popup, titleBg, title, instructions, closeButtonBg, closeButton, divider],
          alpha: 0,
          duration: 300,
          onComplete: () => {
            overlay.destroy()
            popupShadow.destroy()
            popup.destroy()
            titleBg.destroy()
            title.destroy()
            instructions.destroy()
            closeButtonBg.destroy()
            closeButton.destroy()
            divider.destroy()
          }
        })
      });
  }

  setupDayNightCycle() {
    this.time.addEvent({
      delay: 60000,
      callback: this.advanceDay,
      callbackScope: this,
      loop: true
    })
    this.time.addEvent({
      delay: 15000,
      callback: this.checkWaterNeeds,
      callbackScope: this,
      loop: true
    })
  }

  advanceDay() {
    if (this.needsWater && this.waterLevel < 50 && this.plantStage > 0 && this.plantStage < 4) {
      this.statusText.setText('Estado: ¡La planta se ha marchitado por sed!')
      this.plantContainer.list[0].setTint(0xbbbbbb)
      this.time.delayedCall(3000, () => {
        this.plantContainer.removeAll()
        this.plantStage = 0
        this.soil.setFrame(0)
        this.statusText.setText('Estado: Listo para plantar')
      })
    }
    if (this.inventory.seeds < 10) {
      this.inventory.seeds++
      this.updateInventoryText()
    }
  }

  checkWaterNeeds() {
    if (this.plantStage > 0 && this.plantStage < 4) {
      this.waterLevel = Math.max(0, this.waterLevel - 10)
      this.updateWaterIndicator()
      if (this.waterLevel < 30 && this.needsWater) {
        this.statusText.setText('Estado: ¡Necesitará agua pronto!')
        // Indicador visual
        this.plantContainer.list[0].setTint(0xffd700)
        this.time.delayedCall(1000, () => {
          if (this.plantContainer.list && this.plantContainer.list[0]) {
            this.plantContainer.list[0].clearTint()
          }
        })
      }
    }
  }

  update() {
    if (this.selectedTool === 'water' && this.input.activePointer.isDown) {
      const pointer = this.input.activePointer
      if (Phaser.Geom.Rectangle.Contains(
        new Phaser.Geom.Rectangle(350, 350, 100, 100),
        pointer.x, pointer.y
      )) {
        if (!this.lastWaterTime || this.time.now - this.lastWaterTime > 500) {
          this.waterPlant()
          this.lastWaterTime = this.time.now
        }
      }
    }
  }
}