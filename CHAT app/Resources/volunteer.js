

var view_volunteer = Ti.UI.createView();

var label_volunteer = Ti.UI.createLabel({
	text: 'Volunteer Announcements',
	color:'black',
	 font:{
                fontWeight:'bold',
                fontSize:18
            },
	top: '20%',
	left:'30%'
});


var announcements = [];
var readFile = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "volunteers.txt");  

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


var label1 = Titanium.UI.createLabel({
	color:'blue',
	text:'CHAT',
	font:{fontSize:55,fontFamily:'Helvetica Neue'},
	top: '2%',
	left: '35%'
	
});




var view_volunteerContact = Ti.UI.createView();


var win1 = Ti.UI.createWindow({
	
	title: 'Volunteers contact info',
	backgroundColor: 'white'
	
});

var view_volunteerFeedback = Ti.UI.createView();

var view_volunteerLogin = Ti.UI.createView();

var win2 = Ti.UI.createWindow({
	
	title: 'Volunteers feedback',
	backgroundColor: 'white'
	
});

var win3 = Ti.UI.createWindow({
	
	title: 'Volunteers login',
	backgroundColor: 'white'
	
});


var button1 = Ti.UI.createButton({
	title: 'Report phone number or address change',
	top: '75%',
	
});


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



var button2 = Ti.UI.createButton({
	title: 'Submit',
	
	top: 500,
	width: 150,
	height: 35
});


button2.addEventListener('click',function(e)
{
	alert('Contact Information updated successfully!');
	
	win1.close();
});


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




view_volunteer.add(label_volunteer);
view_volunteer.add(label_annoucements);
view_volunteer.add(label1);
view_volunteer.add(image);
view_volunteer.add(button1);
view_volunteer.add(button3);



view_volunteerLogin.add(textFieldUsername);

view_volunteerLogin.add(button5);
view_volunteerLogin.add(button6);


view_volunteerContact.add(textFieldFirstName);
view_volunteerContact.add(textFieldLastName);
view_volunteerContact.add(textFieldAddress);
view_volunteerContact.add(textFieldCity);
view_volunteerContact.add(textFieldState);
view_volunteerContact.add(textFieldZipCode);
view_volunteerContact.add(textFieldPhoneNumber);
view_volunteerContact.add(textFieldEmail);

view_volunteerContact.add(button2);

view_volunteerFeedback.add(textField2);
view_volunteerFeedback.add(button4);

win1.add(view_volunteerContact);

win2.add(view_volunteerFeedback);

win3.add(view_volunteerLogin);


Ti.UI.currentWindow.add(view_volunteer);
