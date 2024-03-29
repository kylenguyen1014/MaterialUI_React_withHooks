import chroma from 'chroma-js';

export default function spreadColors(palette) {
    const levels = [ 100, 200, 300 ,400 ,500, 600, 700, 800, 900 ];
    const newPalette = {...palette, colors : {}};

    for (let level of levels){
        newPalette.colors[level] = [];
    }
    for (let color of palette.colors){
        let result = generateColors(color.color, 10);
        for (let i = 0; i < levels.length; i++){
            let newShade = {
                name : `${color.name} ${levels[i]}`,
                id : color.name.toLowerCase().replace(/ /g, "-"),
                hex : chroma(result[i]).hex(),
                rgb : chroma(result[i]).css(),
                rgba : chroma(result[i]).css('rgba'),
            };
            newPalette.colors[levels[i]].push(newShade);
        }
    }


    return newPalette;
}

function getColorRange(hexNumber){
    return [ 
            '#fff',
             hexNumber, 
             chroma(hexNumber).darken(1.5).hex() 
            ];
}
function generateColors(hexNumber, numOfShades){
    return chroma.scale(getColorRange(hexNumber)).colors(numOfShades).slice(1);
}


// {
//     paletteName: "Material UI Colors",
//     id: "material-ui-colors",
//     emoji: "🎨",
//     colors: [
//       { name: "red", color: "#F44336" },
//       { name: "pink", color: "#E91E63" },
//       { name: "purple", color: "#9C27B0" },
//       { name: "deeppurple", color: "#673AB7" },
//       { name: "indigo", color: "#3F51B5" },
//       { name: "blue", color: "#2196F3" },
//       { name: "lightblue", color: "#03A9F4" },
//       { name: "cyan", color: "#00BCD4" },
//       { name: "teal", color: "#009688" },
//       { name: "green", color: "#4CAF50" },
//       { name: "lightgreen", color: "#8BC34A" },
//       { name: "lime", color: "#CDDC39" },
//       { name: "yellow", color: "#FFEB3B" },
//       { name: "amber", color: "#FFC107" },
//       { name: "orange", color: "#FF9800" },
//       { name: "deeporange", color: "#FF5722" },
//       { name: "brown", color: "#795548" },
//       { name: "grey", color: "#9E9E9E" },
//       { name: "bluegrey", color: "#607D8B" }
//     ]
//   },