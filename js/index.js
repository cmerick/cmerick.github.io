let number = 1;


window.onload = async function () {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    console.log('Mobile');
    document.getElementById("arrows").style.display='none';
  }
  else{

  }
}


const next = () => {
  switch(number){
    case 1:
    document.getElementById('two').scrollIntoView({behavior: 'smooth'});
    number = 2;
    break;
    case 2:
    document.getElementById('three').scrollIntoView({behavior: 'smooth'});
    number = 3;
    break;
    case 3:
    document.getElementById('four').scrollIntoView({behavior: 'smooth'});
    number = 4;
    break;
    default:
    break;
  }
}

const prev = () => {
  switch(number){
    case 2:
    document.getElementById('one').scrollIntoView({behavior: 'smooth'});
    number = 1;
    break;
    case 3:
    document.getElementById('two').scrollIntoView({behavior: 'smooth'});
    number = 2;
    break;
    case 4:
    document.getElementById('three').scrollIntoView({behavior: 'smooth'});
    number = 3;
    break;
    default:
    break;
  }
}