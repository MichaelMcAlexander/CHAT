

var view_parent = Ti.UI.createView();

var label_parent = Ti.UI.createLabel({
	text: 'Parent Announcements',
	color:'black',
	 font:{
                fontWeight:'bold',
                fontSize:18
            },
	top: '20%',
	left:'30%'
});

// imports parent announcements from a text file in to an array
var announcements = [];
var readFile = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "parents.txt");  

if (readFile.exists()){  
	
	var text = readFile.read().text.split('\n');

	for(var i=0;i<text.length;i++)
	{
		announcements[i] = text[i];
	}
}
else
{
	Ti.API.info("no file found");
}

// pulls up parent announcements from an array and displays it on the parent's window
var label_annoucements = Ti.UI.createLabel({
	color: 'black',
	text: announcements[0] + '\n\n' + announcements[1] + '\n\n' + announcements[2] + '\n\n' + announcements[3] + '\n\n' + announcements[4],
	font:{fontSize:17},
	top: '26%',
	left: '3%'
	
});

var image = Ti.UI.createImageView(
	{
		image: 'CHAT.png',
		width: 90,
		top: '2%',
		left: '5%'
		
	}
);

// puts up the header on the student page
var label1 = Titanium.UI.createLabel({
	color:'blue',
	text:'CHAT',
	font:{fontSize:55,fontFamily:'Helvetica Neue'},
	top: '2%',
	left: '35%'
	
});




var view_parentContact = Ti.UI.createView();


var win1 = Ti.UI.createWindow({
	
	title: 'Parents contact info',
	backgroundColor: 'white'
	
});

var view_parentFeedback = Ti.UI.createView();

var view_parentLogin = Ti.UI.createView();

var win2 = Ti.UI.createWindow({
	
	title: 'Parents feedback',
	backgroundColor: 'white'
	
});

var win3 = Ti.UI.createWindow({
	
	title: 'Parents login',
	backgroundColor: 'white'
	
});

// gives an option for parents to update their contact info
var button1 = Ti.UI.createButton({
	title: 'Report phone number or address change',
	top: '75%',
	
});

// creates a login page for parents to login so they can view/change their information
var textFieldUsername = Ti.UI.createTextField({
	color:'#333333',
	hintText: 'Login name',
	height: 50,
	top: '15%',
	left: '30%',
	width:150,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});


// if the user clicks on "report address change button", a login page will appear
button1.addEventListener('click',function(e)
{
	win3.open();
});

//submit for login
var button5 = Ti.UI.createButton({
	title: 'Submit',
	
	top: '40%',
	left:'10%',
	width: 100,
	height: 50
});

// close the login page
var button6 = Ti.UI.createButton({
	title: 'Close',
	
	top: '40%',
	left:'60%',
	width: 100,
	
	height: 50
});


// imports a list of login usernames from a text file and stores it in to an array
var usernames = [];
var readFile = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "login.txt");  

if (readFile.exists()){  
	
	
	var text = [];
    text = readFile.read().text.split('\n');

	for(var i=0;i<text.length;i++)
	{
		usernames[i] = text[i];
	}
}
else
{
	Ti.API.info("no file found");
}

// if the parent inputs the wrong credentials for the login, its gonna throw a "wrong login info alert"
// if they input a correct login information, a new window will open up
button5.addEventListener('click',function(e)
{
	if(usernames.indexOf(textFieldUsername.value)==-1)
	{
		alert("Wrong Login Info");
	}
	else
	{
		win1.open();
	}
	   
});

// closes the login page if the user click on "close"
button6.addEventListener('click',function(e)
{
	  win3.close();
	
});

// gives an option for users to leave a feedback or question
var button3 = Ti.UI.createButton({
	title: 'Ask a question or leave a comment.',
	top: '85%',
	
});

// opens up a new window if they click on the "ask a question" button
button3.addEventListener('click',function(e)
{
	win2.open();
});

// creates a textField where users can view or change their current information
// below are the firstname, lastname, address, phone number and email textfield we created
var textFieldFirstName = Ti.UI.createTextField({
	color:'#333333',
	hintText: 'First Name',
	height: 35,
	top: 10,
	left: 10,
	width:100,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var textFieldLastName = Ti.UI.createTextField({
	color:'#333333',
	hintText: 'Last Name',
	height: 35,
	top: 10,
	left: 150,
	width:100,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var textFieldAddress = Ti.UI.createTextField({
	color:'#333333',
	hintText: 'Adress',
	height: 35,
	top: 70,
	left: 10,
	width:300,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var textFieldCity = Ti.UI.createTextField({
	color:'#333333',
	hintText: 'City',
	height: 35,
	top: 130,
	left: 10,
	width:100,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var textFieldState = Ti.UI.createTextField({
	color:'#333333',
	hintText: 'State',
	height: 35,
	top: 130,
	left: 150,
	width:100,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var textFieldZipCode = Ti.UI.createTextField({
	color:'#333333',
	hintText: 'Zip Code',
	height: 35,
	top: 200,
	left: 10,
	width:100,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var textFieldPhoneNumber = Ti.UI.createTextField({
	color:'#333333',
	hintText: 'Phone number',
	height: 35,
	top: 270,
	left: 10,
	width:120,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var textFieldEmail = Ti.UI.createTextField({
	color:'#333333',
	hintText: 'Email',
	height: 35,
	top: 270,
	left: 150,
	width:100,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});


// gives an option for parents to submit their contact info
var button2 = Ti.UI.createButton({
	title: 'Submit',
	
	top: 500,
	width: 150,
	height: 35
});

// once parents click on the submit button, an alert will pop up and the current window will close
button2.addEventListener('click',function(e)
{
	alert('Contact Information updated successfully!');
	
	win1.close();
});

// textField for parents to leave a comment/question to CHAT
var textField2 = Ti.UI.createTextField({
	color:'#333333',
	hintText: 'Ask a question or leave a feedback',
	height: 350,
	top: '10%',
	left: '3%',
	width:320,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// textfield submit button
var button4 = Ti.UI.createButton({
	title: 'Submit',
	
	top: '80%',
	width: 100,
	height: 50
});

button4.addEventListener('click',function(e)
{
	win2.close();
});




view_parent.add(label_parent);
view_parent.add(label_annoucements);
view_parent.add(label1);
view_parent.add(image);
view_parent.add(button1);
view_parent.add(button3);



view_parentLogin.add(textFieldUsername);

view_parentLogin.add(button5);
view_parentLogin.add(button6);


view_parentContact.add(textFieldFirstName);
view_parentContact.add(textFieldLastName);
view_parentContact.add(textFieldAddress);
view_parentContact.add(textFieldCity);
view_parentContact.add(textFieldState);
view_parentContact.add(textFieldZipCode);
view_parentContact.add(textFieldPhoneNumber);
view_parentContact.add(textFieldEmail);

view_parentContact.add(button2);

view_parentFeedback.add(textField2);
view_parentFeedback.add(button4);

win1.add(view_parentContact);

win2.add(view_parentFeedback);

win3.add(view_parentLogin);


Ti.UI.currentWindow.add(view_parent);
