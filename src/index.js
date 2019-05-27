import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const prefixes = ["Acorn","Adder","Amber","Apple","Ash","Aspen","Bark","Beech","Beetle","Berry","Birch","Bird","Blossom","Boulder",
    "Bounce","Bracken","Branch","Bramble","Brave","Breeze","Briar","Bright","Brindle","Brush","Bumble","Cedar","Cherry","Cinder","Cloud",
    "Clover","Coal","Creek","Cricket","Crow","Daisy","Dapple","Dark","Dawn","Deer","Dew","Dove","Duck","Dusk","Dust","Eagle","Echo",
    "Falcon","Fallow","Fawn","Feather","Fennel","Fern","Ferret","Finch","Fire","Fish","Flame","Flint","Flower","Fox","Frog","Goose",
    "Gorse","Hail","Hare","Hawk","Hazel","Heather","Heron","Holly","Honey","Ice","Ivy","Jay","Jump","Juniper","Kestrel","Larch","Lark",
    "Leaf","Leopard","Lichen","Light","Lily","Lion","Little","Lizard","Lynx","Mallow","Marsh","Maple","Meadow","Minnow","Mint","Mink",
    "Mist","Moon","Morning","Moss","Moth","Mouse","Mud","Nettle","Night","Nut","Oak","Olive","Otter","Owl","Pale","Perch","Petal",
    "Pigeon","Pike","Pine","Poppy","Pounce","Puddle","Quail","Quick","Quiet","Rabbit","Rain","Rapid","Raven","Red","Reed","Ripple",
    "River","Robin","Rock","Rose","Rowan","Rush","Russet","Rust","Sage","Scorch","Sedge","Seed","Shade","Shadow","Shell","Short",
    "Silver","Sky","Slate","Small","Smoke","Snow","Soft","Soot","Sorrel","Sparrow","Spider","Spruce","Squirrel","Stone","Storm",
    "Sun","Swift","Talon","Tansy","Tawny","Thistle","Thorn","Thrush","Thunder","Tiger","Timber","Toad","Trout","Twig","Twilight",
    "Vine","Vole","Wasp","Weasel","Web","Weed","Wet","Whisker","White","Wild","Willow","Wind","Wolf"];

const suffixes = ["berry","bird","blaze","branch","breeze","briar","bright","brook","call","claw","cloud","creek","dapple","dawn",
    "face","fall","fang","feather","fern","fire","flame","flight","flower","foot","frost","fur","gaze","hawk","heart","ice","jaw",
    "leaf","leap","leg","light","mask","mist","moon","nettle","nose","nut","pad","pelt","petal","pool","shade","shine","sky","song",
    "speck","splash","spots","spring","step","storm","streak","stream","strike","stripe","sun","tail","talon","thorn","throat",
    "tuft","watcher","whisker","willow","wind","wing"];

const builds = ["Sturdy","Petite", "Delicate","Heavy","Muscular","Tall","Narrow"];
const colors=["yellow", "russet", "red", "orange", "brown", "black", "gray", "blue", "white"];
const colorAdjectives = ["pale", "dark", "dull ", "bright", null];
const patterns = ["no pattern", "yellow patches",
   "russet patches", "red patches", "orange patches", "brown patches", "black patches", "gray patches", "blue patches",
   "yellow tabby patches", "russet tabby patches", "red tabby patches", "orange tabby patches", "brown tabby patches",
   "gray tabby patches", "blue tabby patches", "yellow speckles", "russet speckles", "red speckles", "orange speckles",
   "brown speckles", "black speckles", "gray speckles", "blue speckles", "large yellow speckles", "large russet speckles",
   "large red speckles", "large orange speckles", "large brown speckles", "large black speckles", "large gray speckles",
   "large blue speckles", "small yellow speckles", "small russet speckles", "small red speckles", "small orange speckles",
   "small brown speckles", "small black speckles", "small gray speckles", "small blue speckles"];
const tabbies = ["classic tabby stripes", "mackerel tabby stripes", "spotted tabby stripes", "marbled tabby stripes"];



const underbellies = [null, "and a paler underbelly.", "and a white underbelly."];

const eyeColors = ["green", "hazel", "gold", "yellow", "amber", "brown", "blue", "blue-green"];
const eyeSizes = ["small", "large"];
const eyeColorAdjectives = ["sharp", "dark", "intelligent", "bright", "gentle", "soft", "cold"];

const noseSizes = ["large", "small", null];
const noseColors = ["pink", "bright pink", "brown", "gray", "charcoal", "black"];

const tailSizes = ["long", "short", "bobbed", "average-sized"];
const tailTextures =  ["plumy", "fluffy", "sleek", "bushy", "soft"];

const peltLengths = ["Long", "Short"];
const peltTextures = ["fluffy", "thick", "sleek", "bushy", "soft"];

const tfuRanks = ["Leader", "Deputy", "Heir", "Medic", "Settler", "Marauder", "Chaser", "Keeper", "Queen", "Rook", "Kit"];
const canonRanks = ["Leader", "Deputy", "Medicine Cat", "Elder", "Warrior", "Queen", "Apprentice", "Kit"];

const tfuClans = ["LeafClan", "CloudClan", "ShellClan", "LilyClan"];
const canonClans = ["ThunderClan", "WindClan", "RiverClan", "ShadowClan"];

const skills = ["Peacekeeping", "Social Skills", "Hunting", "Fighting", "Building", "Organizing", "Patrolling", "Climbing", "Running", "Fishing"];

const preys = ["Hawk", "Finch", "Thrush", "Crow", "Falcon", "Sparrow", "Pigeon", "Starling", "Magpie", "Pheasant", "Wren",
 "Moorhen", "Blackbird", "Chicken", "Robin", "Shrew", "Water Shrew", "Rabbit", "Hare", "Snake", "Lizard", "Squirrel", "Vole",
 "Mouse", "Rat", "Beetle"]


function randomFromList(list){
	return list[Math.floor(Math.random()*list.length)];
}

function rankClanChooser(isTFU, isMale) {
	const ranks = isTFU ? tfuRanks : canonRanks;
	const clans = isTFU ? tfuClans : canonClans;

	const clan = randomFromList(clans);
	const rank = randomFromList(ranks);

	if (isMale && rank === "Queen"){
		//Boys can't be queens, gotta try again
		return rankClanChooser(isTFU,isMale);
	}

	return ( {rank: rank, clan: clan});
}

function emptyCat() {
    return ({
    			name: {
    				prefix: "",
    				suffix: "",
    			},
    			isMale: true,
				build: "",
				rank:"",
				clan: "",
				prey: "",
				skills: [],
				body: {
					color: "",
					adjective: "",
					pattern: "",
					underbelly: "",
				},
				eyes: {
					color: "",
					size: "",
					adjective: "",
				},
				nose: {
					size: "",
					color: "",
				},
				tail: {
					size: "",
					texture: "",
				},
				pelt: {
					length: "",
					texture: "",
				},
			});
}

function generateNewCat(isTfu){
	//pick rank and clan
	const isMale = Math.random() > 0.5;

	const rankGender = rankClanChooser(isTfu,isMale);
	const bodyColor = randomFromList(colors);

	return ({
		name: {
			prefix: randomFromList(prefixes),
			suffix: randomFromList(suffixes),
		},
		isMale: isMale,
		build: randomFromList(builds),
		rank: rankGender.rank,
		clan: rankGender.clan,
		prey: randomFromList(preys),
		skills: [randomFromList(skills), randomFromList(skills)],
		body: {
			color: bodyColor,
			adjective: (bodyColor === "white") ? "" : randomFromList(colorAdjectives),
			pattern: (bodyColor === "white") ? randomFromList(patterns) : randomFromList(tabbies),
			underbelly: randomFromList(underbellies),
		},
		eyes: {
			color: randomFromList(eyeColors),
			size: randomFromList(eyeSizes),
			adjective: randomFromList(eyeColorAdjectives),
		},
		nose: {
			size: randomFromList(noseSizes),
			color: randomFromList(noseColors),
		},
		tail: {
			size: randomFromList(tailSizes),
			texture: randomFromList(tailTextures)
		},
		pelt: {
			length: randomFromList(peltLengths),
			texture: randomFromList(peltTextures),
		},
	});
}

class WarriorCat extends React.Component {
    render(){
    	const cat = this.props.cat;

    	return(
    		<div className="cat">
    		    <p>Name: {cat.name.prefix}{cat.name.suffix} </p>
    		    <p>Appearance: {cat.pelt.length}, {cat.pelt.texture}, {cat.body.adjective} {cat.body.color} fur with {cat.body.pattern} {cat.body.underbelly}.
             They have {cat.eyes.size}, {cat.eyes.adjective} {cat.eyes.color} eyes. They have a {cat.tail.size} {cat.tail.texture} tail. They have
              a {cat.nose.size} {cat.nose.color} nose. </p>
    		    <p>Gender: { cat.isMale ? "Male" : "Female"} </p>
            <p>Build: {cat.build}</p>
            <p>Rank: {cat.rank}</p>
            <p>Clan: {cat.clan}</p>
    		    <p>Favorite Prey: {cat.prey} </p>
            <p>Skills: {cat.skills}</p>
    		 </div>
    	);
    }
}

class Generator extends React.Component {


	constructor(props){
		super(props);
		this.state = {
			cat: emptyCat()
		}
	}


	handleCatClick(isTfu){
		//const build = builds[Math.floor(Math.random()*builds.length)];
		this.setState({
			cat: generateNewCat(isTfu)
		});
	}
	render() {
		return (
			<div className="generator">
				<p>Warrior Generator</p>
				<WarriorCat cat={this.state.cat} />
				<button className="generate-button" onClick={ () => this.handleCatClick(true)}>Generate TFU</button>
				<button className="generate-button" onClick={ () => this.handleCatClick(false)}>Generate Canon</button>
			</div>
		);
	}
}

ReactDOM.render(
	<Generator />,
 	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
