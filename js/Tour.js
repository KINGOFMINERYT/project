AFRAME.registerComponent("tour", {
  init: function () {
    console.log("inside")
    this.placesContainer = this.el;
    this.createCards()
  },

  


  createCards: function () {
    console.log("inside2")
    const thumbNailsRef = [
      {
        id: "spiderman",
        title: "spiderman",
        url: "./assets/thumbnails/spiderman.jpeg",
      },
      {
        id: "superman",
        title: "superman",
        url: "./assets/thumbnails/superman.jpeg",
      },

      {
        id: "blackpanther",
        title: "Black Panther",
        url: "./assets/thumbnails/black_panther_cover.webp",
      },
      {
        id: "wolverine",
        title: "Wolverine",
        url: "./assets/thumbnails/wolverine.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX
      
      const thumbnail = this.createThumbnail(item)
      const borderEl = this.createBorder(position,item.id)
      borderEl.appendChild(thumbnail)
      const titleEl = this.createTitle(position,item)
      borderEl.appendChild(titleEl)
      this.placesContainer.appendChild(borderEl)
    }
  },
  
  // Border Element
  createBorder:function(position,id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{primitive:"plane",height:28,width:20})
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("material",{color:"white"})
    entityEl.setAttribute("cursor-listener", {});
    return entityEl
  },
  
  
  // Title Text Element
  createTitle:function(position,item){
    console.log("title")
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("text",{font:"exo2bold",align:"center",width:60,color:"black",value:item.title})
    console.log("title2")
    entityEl.setAttribute("visible",true)
    const p = position
    p.y = -20
    entityEl.setAttribute("position",p)
    return entityEl
    

  },
  // Thumbnail Element
  createThumbnail:function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{primitive:"plane",height:26,width:18})
    entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });
    entityEl.setAttribute("material",{src:item.url})
    return entityEl
  },

  
});
