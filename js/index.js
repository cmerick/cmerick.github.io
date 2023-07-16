let number = 1;
let isListOpen = false;
const scrolling = document.querySelector(".container");

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    console.log("Mobile");
    document.getElementById("arrows").style.display = "none";
  }

const next = () => {
  switch (number) {
    case 1:
      document.getElementById("two").scrollIntoView({ behavior: "smooth" });
      number = 2;
      break;
    case 2:
      document.getElementById("three").scrollIntoView({ behavior: "smooth" });
      number = 3;
      break;
    case 3:
      document.getElementById("four").scrollIntoView({ behavior: "smooth" });
      number = 4;
      break;
      case 4:
      document.getElementById("five").scrollIntoView({ behavior: "smooth" });
      number = 5;
      break;
    default:
      break;
  }
};

const prev = () => {
  switch (number) {
    case 2:
      document.getElementById("one").scrollIntoView({ behavior: "smooth" });
      number = 1;
      break;
    case 3:
      document.getElementById("two").scrollIntoView({ behavior: "smooth" });
      number = 2;
      break;
    case 4:
      document.getElementById("three").scrollIntoView({ behavior: "smooth" });
      number = 3;
      break;
      case 5:
      document.getElementById("four").scrollIntoView({ behavior: "smooth" });
      number = 4;
      break;
    default:
      break;
  }

  
};

const openAndCloseList = () => {
  if(isListOpen) {
    isListOpen = false;
    document.querySelector(".one-button-down").style.display = "block";
    document.querySelector(".one-button-up").style.display = "none";
    document.querySelector(".tec-list").style.display = "none";
  } else {
    isListOpen = true;
    document.querySelector(".one-button-down").style.display = "none";
    document.querySelector(".one-button-up").style.display = "block";
    document.querySelector(".tec-list").style.display = "flex";
    
  }
  console.log(isListOpen);
}