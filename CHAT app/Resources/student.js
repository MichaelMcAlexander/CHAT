

// this is the student's page

var view_student = Ti.UI.createView();

var label_student = Ti.UI.createLabel
({
	text: 'Student Announcements',
	color: 'black',
	 font:{
                fontWeight:'bold',
                fontSize:19
            },
	top: '20%',
	left:'25%'	
});

// imports student announcements from a text file in to an array
var announcements = [];
var readFile = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "students.txt");  

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

//displays student announcements on the student page
var label_annoucements = Ti.UI.createLabel({
	color: 'black',
	text: announcements[0] + '\n\n' + announcements[1] + '\n\n' + announcements[2] + '\n\n' + announcements[3] + '\n\n' + announcements[4] + '\n\n' + announcements[5],
	font:{fontSize:18},
	top: '26%',
	left: '3%'
	
	
});

// pulls up the CHAT logo image from the designated folder
var image = Ti.UI.createImageView(
	{
		image: 'CHAT.png',
		width: 90,
		top: '2%',
		left: '5%'
		
	}
);

// puts up the header on the student page
var label_title = Titanium.UI.createLabel({
	color:'blue',
	text:'CHAT',
	font:{fontSize:55,fontFamily:'Helvetica Neue'},
	top: '2%',
	left: '35%'
	
});

view_student.add(label_student);
view_student.add(label_annoucements);
view_student.add(label_title);
view_student.add(image);

Ti.UI.currentWindow.add(view_student);
