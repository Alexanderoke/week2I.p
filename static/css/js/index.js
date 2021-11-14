function akanName() {
  var Db = parseInt(document.getElementById("Db").value);
  // the arrays are odd days of the month and century also known as codes.
  var Mc = new Array("1", "4", "4", "0", "2", "5", "0", "3", "6", "1", "4", "6");
  var Cc = new Array("4", "2", "0", "6");
  var Mb = parseInt(document.getElementById("Mb").value);
  // getting the month code. odd days
  switch (Mb) {
    case 1:
      (Mb == 01)
      var Mb = parseInt(Mc[0]);
      break;
    case 2:
      (Mb == 02)
      var Mb = parseInt(Mc[1]);
      break;
    case 3:
      (Mb == 03);
      var Mb = parseInt(Mc[2]);
      break;
    case 4:
      (Mb == 04);
      var Mb = parseInt(Mc[3]);
      break;
    case 5:
      (Mb == 05);
      var Mb = parseInt(Mc[4]);
      break;
    case 6:
      (Mb == 06);
      var Mb = parseInt(Mc[5]);
      break;
    case 7:
      (Mb == 07);
      var Mb = parseInt(Mc[6]);
      break;
    case 8:
      (Mb == 08);
      var Mb = parseInt(Mc[7]);
    case 9:
      (Mb == 09);
      var Mb = parseInt(Mc[8]);
      break;
    case 10:
      (Mb == 10);
      var Mb = parseInt(Mc[9]);
      break;
    case 11:
      (Mb == 11);
      var Mb = parseInt(Mc[10]);
      break;
    case 12:
      (Mb == 12);
      var Mb = parseInt(Mc[11]);
    default:
      alert("wrong month format!");
  }
// Getting the century code.
  var Cc = parseInt(document.getElementById("yb").value)
  switch ("yb") {
    case 1:
      yb => 1700 && yb <= 1799
      var yb = parseInt(Cc[0]);
      break;
    case 2:
      yb => 1800 && yb <= 1899
      var yb = parseInt(Cc[1]);
      break;
    case 3:
      yb => 1900 && yb <= 1999;
      var yb = parseInt(Cc[2]);
      break;
    case 4:
      yb => 2000 && yb <= 2099;
      var yb = parseInt(Cc[3]);
      break;
    default:
      alert("you are that old?!")
  }
  var day = new Array("sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday");
  var akanmName = new Array("Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame");
  var akanFname = new Array("Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama");
  function Mf() {
    var Male = document.getElementById("male").checked;
    var Female = document.getElementById("female").checked;
  }
// akan function runs the calculating formula.
  function akan() {
    yb = document.getElementById("yb").value;
    var yy = parseInt(yb.substring(2, 5));
    // formula
    d = (Db + Mb + yb + yy + (yy / 4)) % 7;
    return (Math.floor(d));
  }

// getting the male akan name.
  switch (Male) {
    case 1:
      (Math.floor(d)) == 0
      alert(document.getElementById("name"), "your akan Name is" + akanmName[0]);
      break;
    case 2:
      (Math.floor(d)) == 1
      alert(document.getElementById("name"), "your akan Name is" + akanmName[1]);
      break;
    case 3:
      (Math.floor(d)) == 2
      alert(document.getElementById("name"), "your akan Name is" + akanmName[2]);
      break;
    case 4:
      (Math.floor(d)) == 3;
      alert(document.getElementById("name"), "your akan Name is" + akanmName[3]);
      break;
    case 5:
      (Math.floor(d)) == 4;
      alert(document.getElementById("name"), "your akan Name is" + akanmName[4]);
      break;
    case 6:
      (Math.floor(d)) == 5;
      alert(document.getElementById("name"), "your akan Name is" + akanmName[5]);
      break;
    case 7:
      (Math.floor(d)) == 6;
      alert(document.getElementById("name"), "your akan Name is" + akanmName[6]);
      break;
    default:
      alert("YOU NO HAVE NAME!")
  }

// getting the female akan name.
  switch (female) {
    case 1:
      (Math.floor(d)) == 0;
      alert(document.getElementById("name"), "your akan Name is" + akanFname[0]);
      break;
    case 2:
      (Math.floor(d)) == 1
      alert(document.getElementById("name"), "your akan Name is" + akanFname[1]);
      break;
    case 3:
      (Math.floor(d)) == 2;
      alert(document.getElementById("name"), "your akan Name is" + akanFname[2]);
      break;
    case 4:
      (Math.floor(d)) == 3;
      alert(document.getElementById("name"), "your akan Name is" + akanFname[3]);
      break;
    case 5:
      (Math.floor(d)) == 4;
      alert(document.getElementById("name"), "your akan Name is" + akanFname[4]);
      break;
    case 6:
      (Math.floor(d)) == 5;
      alert(document.getElementById("name"), "your akan Name is" + akanFname[5]);
      break;
    case 7:
      (Math.floor(d)) == 6
      alert(document.getElementById("name"), "your akan Name is" + akanFname[6]);
      break;
    default:
      alert("YOU NO HAVE NAME!")
  }

}
/*End
Of
Script*/



