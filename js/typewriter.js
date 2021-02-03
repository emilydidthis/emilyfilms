
var typeContainer = new TypeIt('#text',{
    speed: 45,
    lifeLike: false,
    autoStart:false
});

typeContainer.type("We don't have much time,").pause(150).type(" so I'll keep this introduction short.");

typeContainer.pause(500).break().pause(500).break().pause(1000);

typeContainer.type("My name is <a href='projects/#fuck'>Emily Zhao</a>.");

typeContainer.pause(350).type(" I’m a filmmaker and designer based in New York City,").pause(150).type(" and I’m trying my best to combine both mediums.").pause(500).type(" If I had it my way,").pause(150).type(" I’d be the love-child of Hayao Miyazaki and Saul Bass.").pause(500).type(" Or the devil-spawn");

typeContainer.options({speed: 100}).type(" of Paula Scher").options({speed: 300}).type(" and").pause(3000).options({speed: 50}).type(" <a href='projects/#fuck'>Quentin Tarantino</a>.");

typeContainer.options({speed:45}).break().break().pause(350);

typeContainer.type(" Sorry...").pause(500).type(" I'm a bit distracted.").pause(350).type(" I've been waiting all day to receive a very important <a href='projects/#text'>text message</a>.");

typeContainer.pause(500).type(" Unfortunately,").pause(150).type(" that wasn't it.");

typeContainer.pause(500).break().pause(500).break().pause(1000);

typeContainer.type( "Actually,").pause(150).type(" it's time for me to go now.").pause(350).type(" I have a meeting with <a href='projects/#women'>Marie Curie</a>");

typeContainer.type(" about implementing some additional features to our latest <a href='projects/#gogo'>teleportation device</a>.");

typeContainer.pause(500).break().pause(500).break().pause(1000).type("Check in often to see what I'm up to.").pause(350).type(" Until next time!");

function skipString() {
	typeContainer = null;
	$("#text").html("We don't have much time, so I'll keep this introduction short.<br><br>My name is <a href='#'>Emily Zhao</a>. I’m a filmmaker and designer based in New York City, and I’m trying my best to combine both mediums. If I had it my way, I’d be the love-child of Hayao Miyazaki and Saul Bass. Or the devil-spawn of Paula Scher and <a href='projects/#fuck'>Quentin Tarantino</a>.<br><br>Sorry... I'm a bit distracted. I've been waiting all day to receive a very important <a href='projects/#text'>text message</a>. Unfortunately, that wasn't it.<br><br>Actually, it's time for me to go now. I have a meeting with <a href='projects/#women'>Marie Curie</a> about implementing some additional features to our latest <a href='projects/#gogo'>teleportation device</a>.<br><br>Check in often to see what I'm up to. Until next time!");
  document.getElementById("button").style.display = "none";
}
