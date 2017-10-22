var serial; // variable to hold an instance of the serialport library
var fromSerial = 0; //variable to hold the data
var myRec = new p5.SpeechRec();

function setup() {
  createCanvas(320, 240);
  serial = new p5.SerialPort(); // make a new instance of  serialport librar
  serial.on('list', printList); // callback function for serialport list event
  serial.on('data', serialEvent); // callback for new data coming in
  serial.list(); // list the serial ports
  serial.open("/dev/cu.usbmodem1451"); // open a port

  createCanvas(800, 400);
		background(255, 255, 255);
		fill(0, 0, 0, 255);
		// instructions:
		textSize(32);
		textAlign(CENTER);
		text("say something", width/2, height/2);
		myRec.onResult = showResult;
		myRec.start();

}

function showResult()
	{
		if(myRec.resultValue==true) {
			background(192, 255, 192);
			text(myRec.resultString, width/2, height/2);
      myRec.resultValue = "H";
      var valueToSend = myRec.resultValue;
      // serial.write();
			// console.log(myRec.resultString);
        // var valueToSend = myRec.resultValue;
        // serial.write(valueToSend + ",");
      // var b = int(  brightness(myRec)   );
      serial.write(valueToSend);
		}
	}


function onStart() {
}

function draw() {
var valueToSend = myRec.resultValue;
  serial.write(valueToSend + ",");
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    println(i + " " + portList[i]);
  }
}

function serialEvent() {
  // this is called when data is recieved
}
