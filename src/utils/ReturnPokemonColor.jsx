export const getColors = (type) => {
    switch (type) {
      case "bug":
        return "#76A866";
      case "dark":
        return "#808096";
      case "dragon":
        return "#004170";
      case "electric":
        return "#d3b648";
      case "fairy":
        return "#EDAC98";
      case "fighting":
        return "#E18FE6";
      case "fire":
        return "#EAAB7D";
      case "flying":
        return "#9298B2";
      case "ghost":
        return "#99B5C2";
      case "grass":
        return "#729F92";
      case "ground":
        return "#D99C4C";
      case "ice":
        return "#7AB6CF";
      case "normal":
        return "#BF9762";
      case "poison":
        return "#A98BB0";
      case "psychic":
        return "#F59478";
      case "rock":
        return "#C4D48A";
      case "steel":
        return "#EBE7C5";
      case "water":
        return "#71C3FF";
      default:
        return "#8A8A8A";
    }
  };