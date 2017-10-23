var serial; // variable to hold an instance of the serialport library
var fromSerial = 0; //variable to hold the data
var myRec = new p5.SpeechRec();

function triggerSpeechRec() {
  setInterval(initiateSpeechRec, 2000);
}

function initiateSpeechRec() {
  try {
    myRec.start(); // start engine
  } catch (err) {
    // do nothing.
  }
   // recognition callback
  // console.log("start!!!!!!");
}


function setup() {
  createCanvas(320, 240);
  serial = new p5.SerialPort(); // make a new instance of  serialport librar
  serial.on('list', printList); // callback function for serialport list event
  serial.on('data', serialEvent); // callback for new data coming in
  serial.list(); // list the serial ports
  serial.open("/dev/cu.usbmodem1431"); // open a port


  createCanvas(800, 400);
		background(255, 255, 255);
		fill(0, 0, 0, 255);
		// instructions:
		textSize(32);
		textAlign(CENTER);
		text("say something", width/2, height/2);
		myRec.onResult = showResult;
		myRec.start();
  	triggerSpeechRec();
}

function showResult()
	{
		if( myRec.resultValue==true && (myRec.resultString=="no" || myRec.resultString=="please")) {
			background(192, 255, 192);
			text(myRec.resultString, width/2, height/2);
      serial.write(1);
      console.log("worked");
      // myRec.continuous;
		} else if ( myRec.resultValue==true && (myRec.resultString=="yes" || myRec.resultString=="okay")) {
			background(192, 255, 192);
			text(myRec.resultString, width/2, height/2);
      serial.write(0);
      console.log("worked again");
      // myRec.continuous;
	}
  }


function onStart() {
  function triggerSpeechRec() {
  //setInterval(initiateSpeechRec, 2000);
}

function initiateSpeechRec() {
  try {
    myRec.start(); // start engine
  } catch (err) {
    // do nothing.
  }
  myRec.onResult = recordAndRespond; // recognition callback
  // console.log("start!!!!!!");
}
}

function draw() {
// myRec = new p5.SpeechRec(); // create new speech object
//     myRec.start(); // start recording
//     myRec.onResult = showResult; // call showResult
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
