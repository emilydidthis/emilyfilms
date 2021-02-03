
var type1 = new TypeIt('#para1',{
    speed: 45,
    lifeLike: false,
    autoStart:false
});

type1.type("We don't have much time,").pause(150).type(" so I'll keep this introduction short.");

var type2 = new TypeIt('#link1',{
    speed: 45,
    lifeLike: false,
    autoStart:false
});

type2.pause(4000).type("My name is <a href='projects/#fuck'>Emily Zhao</a>.");


function skipString() {
	typeContainer = null;
	$("#text").html("We don't have much time, so I'll keep this introduction short.<br><br>My name is <a href='#'>Emily Zhao</a>. I’m a filmmaker and designer based in New York City, and I’m trying my best to combine both mediums. If I had it my way, I’d be the love-child of Hayao Miyazaki and Saul Bass. Or the devil-spawn of Paula Scher and <a href='projects/#fuck'>Quentin Tarantino</a>.<br><br>Sorry... I'm a bit distracted. I've been waiting all day to receive a very important <a href='projects/#text'>text message</a>. Unfortunately, that wasn't it.<br><br>Actually, it's time for me to go now. I have a meeting with <a href='projects/#women'>Marie Curie</a> about implementing some additional features to our latest <a href='projects/#gogo'>teleportation device</a>.<br><br>Check in often to see what I'm up to. Until next time!");
  document.getElementById("button").style.display = "none";
}
