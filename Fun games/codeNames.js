var nouns = ["baseball", "lunch", "fork", "development", "punishment", "parcel", "house", "addition", "drop", "clover", "middle", "thrill", "turkey", "plants", "edge", "frog", "love", "carpenter", "man", "join", "visitor", "fang", "jelly", "spot", "person", "vacation", "coal", "regret", "trick", "mitten", "connection", "vegetable", "gun", "structure", "underwear", "sidewalk", "dock", "canvas", "stocking", "arithmetic", "scissors", "drink", "station", "plastic", "throne", "spoon", "health", "cable", "walk", "jellyfish", "whistle", "snake", "home", "rake", "doll", "apparatus", "mailbox", "dad", "division", "orange", "committee", "yarn", "creator", "hose", "ball", "value", "coat", "moon", "attraction", "shirt", "country", "part", "spade", "tent", "wilderness", "protest", "notebook", "basket", "jewel", "line", "corn", "swim", "science", "loaf", "donkey", "stream", "front", "steam", "recess", "twist", "action", "roll", "zephyr", "record", "ducks", "plant", "angle", "birds", "boat", "stem", "fuel", "voice", "land", "humor", "sleet", "smell", "feeling", "blood", "sister", "berry", "substance", "grip", "history", "guitar", "transport", "sort", "apparel", "toy", "rabbit", "hammer", "oatmeal", "club", "fog", "mark", "authority", "education", "chess", "river", "volleyball", "knee", "girls", "behavior", "cough", "end", "activity", "thought", "trousers", "pet", "cup", "pin", "pollution", "adjustment", "collar", "engine", "mass", "door", "spring", "crook", "gold", "representative", "self", "plate", "snow", "pail", "flavor", "twig", "floor", "top", "attack", "group", "limit", "waste", "afternoon", "channel", "sleep", "drawer", "thunder", "government", "uncle", "servant", "degree", "reading", "fish", "planes", "expert", "minister", "jar", "touch", "book", "team", "sponge", "bottle", "act", "insect", "bite", "burst", "scale", "business", "brother", "start", "talk", "calendar", "wire", "comparison", "friend", "grain", "horn", "silver", "battle", "sun", "secretary", "side", "war", "spark", "amusement", "cracker", "treatment", "credit", "sign", "shoe", "magic", "dime", "grass", "pest", "birth", "condition", "boy", "force", "increase", "yard", "earthquake", "fire", "birthday", "impulse", "star", "salt", "way"];

function getRandomArbitrary(min, max) {
    var num = Math.random() * (max - min) + min;
    num = parseInt(num);
    return num;
  }

for (var i=0; i<25; i++){
  var num = getRandomArbitrary(0, 399);
    console.log(num);
  }