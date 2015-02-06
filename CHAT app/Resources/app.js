


// This is the main page of the application. Users can make a selection to go to other windows or pages from here

var tabGroup = Ti.UI.createTabGroup();

var win1 = Ti.UI.createWindow
({
	backgroundColor: 'white'
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

//puts up the big header on the front page of the application
var label5 = Titanium.UI.createLabel({
	color:'blue',
	text:'CHAT',
	font:{fontSize:55,fontFamily:'Helvetica Neue'},
	top: '2%',
	left: '35%'
	
});


// creates an array consisting of three main users: students, parent and volunteer
var data = [
{title:'Student',hasChild:true,dest:'student.js', left:'7%', color:'black',font:{fontSize:'default',fontFamily:'Helvetica Neue'}},
{title:'Parent',hasChild:true,dest:'parent.js', left:'7%', color:'black',font:{fontSize:'default',fontFamily:'Helvetica Neue'}},
{title:'Volunteer',hasChild:true,dest:'volunteer.js',left:'7%', color:'black',font:{fontSize:'default',fontFamily:'Helvetica Neue'}}

];
var table = Ti.UI.createTableView({
	
	data:data,
	top: '57%'
});


// redirected users to respective pages
// If they select student, it will send them to the student page and so on for parents and volunteers
table.addEventListener('click',function(e){
	
	if(e.rowData.hasChild)
	{
		var newWin = Ti.UI.createWindow({
			url: e.rowData.dest,
			title: e.rowData.title,
			backgroundColor: 'white'
		});
		
		tab1.open(newWin);
	}
	
	
});

// Announcement title for the main page
var label_title = Titanium.UI.createLabel({
	color:'black',
	text:'Announcements',
	font:{fontSize:'default',fontWeight:'bold'},
	top: '20%',
	left:'30%'
	
});

// reads the main announcements from the text file and puts it in to an array
var announcements = [];
var readFile = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "main.txt");  

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

// displays the announcements on the main page
var label_announcements = Titanium.UI.createLabel({
	color:'black',
	text:announcements[0] + '\n' + announcements[1] + '\n' + announcements[2] + '\n' + announcements[3],
	font:{fontSize:'default'},
	top: '26%',
	left: '3%'
	
});

// announcement title for CHA
var label_announcement1 = Ti.UI.createLabel({
	text: 'Announcements',
	color: 'black',
	 font:{
                fontWeight:'bold',
                fontSize:19
            },
	top: '20%',
	left:'26%'
	
	
});

// Announcement title for Tiny Tykes
var label_announcement2 = Ti.UI.createLabel({
	text: 'Announcements',
	color: 'black',
	 font:{
                fontWeight:'bold',
                fontSize:19
            },
	top: '20%',
	left: '26%'
	
	
});

// Announcement title for after school
var label_announcement3 = Ti.UI.createLabel({
	text: 'Announcements',
	color: 'black',
	 font:{
                fontWeight:'bold',
                fontSize:19
            },
	top: '20%',
	left: '26%'
	
	
});


// creates a main tab
var tab1 = Ti.UI.createTab({
	title: 'Main',
	backgroundColor: '#fff',
	window: win1
});

//imports a image logo from the designated folder
var image3 = Ti.UI.createImageView(
	{
		image: 'afterSchool.JPG',
		width: 350,
		height: 70,
		top: 0,
		left: 15
		
	}
);

// pulls up the afterschool announcements from the textFile and stores it in to an array
var announcements_afterSchool = [];
var readFile3 = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "afterSchool.txt");  

if (readFile3.exists()){  
	
	var text = readFile3.read().text.split('\n');

	for(var i=0;i<text.length;i++)
	{
		announcements_afterSchool[i] = text[i];
	}
}
else
{
	Ti.API.info("no file found");
}

// displays the after school announcements on its window
var label_afterSchool = Ti.UI.createLabel({
	color: 'black',
	text: announcements_afterSchool[0] + '\n\n' + announcements_afterSchool[1] + '\n\n' + announcements_afterSchool[2] + '\n\n' + announcements_afterSchool[3] + '\n\n' + announcements_afterSchool[4] + '\n\n' + announcements_afterSchool[5],
	top: '26%',
	left:'3%',
	font:{fontSize:17}
	
	
});
//afterSchool window
var win10 = Ti.UI.createWindow({
	
	backgroundColor: 'white'
	
});

// after school tab
var tab2 = Ti.UI.createTab({
	title: 'AfterSchool',
	
	window: win10
});

//pulls up the tinyTykes logo from the folder
var image1 = Ti.UI.createImageView(
	{
		image: 'tinyTykes.JPG',
		width: 350,
		height: 70,
		top: 0,
		left: 15	
	}
);

//pulls up the church hill academy logo from the folder
var image2 = Ti.UI.createImageView(
	{
		image: 'CHA.JPG',
		width: 350,
		height: 70,
		top: 0,
		left: 15
		
	}
);

//stores tinyTykes announcements in to an array from a text file
var announcements_tinyTykes = [];
var readFile1 = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "tinyTykes.txt");  

if (readFile1.exists()){  
	
	var text = readFile1.read().text.split('\n');

	for(var i=0;i<text.length;i++)
	{
		announcements_tinyTykes[i] = text[i];
	}
}
else
{
	Ti.API.info("no file found");
}

//displays tiny tykes announcements on its window
var label_tinyTykes = Ti.UI.createLabel({
	color: 'black',
	text: announcements_tinyTykes[0] + '\n\n' + announcements_tinyTykes[1] + '\n\n' + announcements_tinyTykes[2] + '\n\n' + announcements_tinyTykes[3] + '\n\n' + announcements_tinyTykes[4] + '\n\n' + announcements_tinyTykes[5],
	top: '26%',
	left:'3%',
	font:{fontSize:17}
	
	
});

//tiny tykes window
var win11 = Ti.UI.createWindow({
	backgroundColor: 'white'
	
});

// tiny tykes tab
var tab3 = Ti.UI.createTab({
	title: 'Tiny Tykes',
	
	
	window: win11
});

// stores church hill academy announcements in to an array through a text file
var announcements_CHA = [];
var readFile2 = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "CHA.txt");  

if (readFile2.exists()){  
	
	var text = readFile2.read().text.split('\n');

	for(var i=0;i<text.length;i++)
	{
		announcements_CHA[i] = text[i];
	}
}
else
{
	Ti.API.info("no file found");
}

// displays church hill academy announcements on the application window
var label_CHA = Ti.UI.createLabel({
	color: 'black',
	text: announcements_CHA[0] + '\n\n' + announcements_CHA[1] + '\n\n' + announcements_CHA[2] + '\n\n' + announcements_CHA[3] + '\n\n' + announcements_CHA[4] + '\n\n' + announcements_CHA[5],
	top: '26%',
	left:'3%',
	font:{fontSize:17}
	
	
});

// church hill academy window
var win12 = Ti.UI.createWindow({
	
	backgroundColor: 'white'
	
});

//CHA tab
var tab4 = Ti.UI.createTab({
	title: 'CHA',
	
	window: win12
});

// creates a label containing the link to the CHAT website
var label6 = Titanium.UI.createLabel({
	color:'red',
	text:'www.chatrichmond.org',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	top: '85%'
	
});


// sends the user to the CHAT website if the user clicks on the chatrichmond.org link
label6.addEventListener('click', function(e) {
    
    Titanium.Platform.openURL('http://www.chatrichmond.org');
});

// creates a label
var label = Titanium.UI.createLabel({
	color:'black',
	text:'I am a... ',
	font:{fontSize:20,fontFamily:'Helvetica Neue',fontWeight:'bold'},
	top: '50%',
	left: '3%'
	
});



var view1 = Ti.UI.createView();
var view2 = Ti.UI.createView();
var view3 = Ti.UI.createView();
var view4 = Ti.UI.createView();

view1.add(image);
view1.add(table);
view3.add(image1);
view4.add(image2);
view2.add(image3);
win1.add(view1);
win1.add(label);
win1.add(label5);
win1.add(label6);
win1.add(label_title);
win1.add(label_announcements);
win11.add(view3);
win11.add(label_announcement1);
win11.add(label_tinyTykes);
win12.add(view4);
win12.add(label_announcement2);
win12.add(label_CHA);
win10.add(view2);
win10.add(label_announcement3);
win10.add(label_afterSchool);

tabGroup.addTab(tab1);
tabGroup.addTab(tab4);
tabGroup.addTab(tab3);
tabGroup.addTab(tab2);


tabGroup.open();


