import bug from "../assets/type/Bug.png";
import dark from "../assets/type/Dark.png";
import dragon from "../assets/type/Dragon.png";
import electric from "../assets/type/Electric.png";
import fairy from "../assets/type/Fairy.png";
import fighting from "../assets/type/Fighting.png";
import fire from "../assets/type/Fire.png";
import flying from "../assets/type/Flying.png";
import ghost from "../assets/type/Ghost.png";
import grass from "../assets/type/Grass.png";
import ground from "../assets/type/Ground.png";
import ice from "../assets/type/Ice.png";
import normal from "../assets/type/Normal.png";
import poison from "../assets/type/Poison.png";
import psychic from "../assets/type/Psychic.png";
import rock from "../assets/type/Rock.png";
import steel from "../assets/type/Steel.png";
import water from "../assets/type/Water.png";

export const getTypes = (type) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return ;
  }
};
