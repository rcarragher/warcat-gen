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
const colors=["Yellow", "Russet", "Red", "Orange", "Brown", "Black", "Gray", "Blue", "White"];
const colorAdjectives = ["Pale", "Dark", "Dull ", "Bright", null];
const patterns = [null, "Classic Tabby", "Mackerel Tabby", "Spotted Tabby", "Marbled Tabby", "Yellow Patches", "Russet Patches", 
                 "Red Patches", "Orange Patches", "Brown Patches", "Black Patches", "Gray Patches", "Blue Patches", "Yellow Tabby Patches",
                 "Russet Tabby Patches", "Red Tabby Patches", "Orange Tabby Patches", "Brown Tabby Patches", "Gray Tabby Patches", 
                 "Blue Tabby Patches", "Yellow speckles", "Russet speckles", "Red speckles", "Orange speckles", "Brown speckles", 
                 "Black speckles", "Gray speckles", "Blue speckles", "Large Yellow speckles", "Large Russet speckles", "Large Red speckles", 
                 "Large Orange speckles", "Large Brown speckles", "Large Black speckles", "Large Gray speckles", "Large Blue speckles", 
                 "Small Yellow speckles", "Small Russet speckles", "Small Red speckles", "Small Orange speckles", "Small Brown speckles", 
                 "Small Black speckles", "Small Gray speckles", "Small Blue speckles"];

const underbellies = [null, "Paler", "White"];

const eyeColors = ["Green", "Hazel", "Gold", "Yellow", "Amber", "Brown", "Blue", "Blue-green"];
const eyeSizes = ["Small", "Large", null];
const eyeColorAdjectives = ["Sharp", "Dark", "Intelligent", "Bright", "Gentle", "Soft", "Cold"];

const noseSizes = ["Large", "Small", null];
const noseColors = ["Pink", "Bright Pink", "Brown", "Gray", "Charcoal", "Black"];

const tailSizes = ["Long", "Short", "Bobbed", null];
const tailTextures =  ["Plumy", "Fluffy", "Sleek", "Bushy", "Soft"];

const peltLengths = ["Long", "Short"];
const peltTextures = ["Fluffy", "Thick", "Sleek", "Bushy", "Soft"];

const tfuRanks = ["Leader", "Deputy", "Heir", "Medic", "Settler", "Marauder", "Chaser", "Keeper", "Queen", "Rook", "Kit"];
const canonRanks = ["Leader", "Deputy", "Medicine Cat", "Elder", "Warrior", "Queen", "Apprentice", "Kit"];

const tfuClans = ["LeafClan", "CloudClan", "ShellClan", "LilyClan"];
const canonClans = ["ThunderClan", "WindClan", "RiverClan", "ShadowClan"];

const skills = ["Peacekeeping", "Social Skills", "Hunting", "Fighting", "Building", "Organizing", "Patrolling", "Climbing", "Running", "Fishing"];


function randomFromList(list){
	return list[Math.floor(Math.random()*list.length)];
}

function rankClanChooser(isTFU, isMale) {
	const ranks = isTFU ? tfuRanks : canonRanks;
	const clans = isTFU ? tfuClans : canonClans;

	const clan = randomFromList(clans);
	const rank = randomFromList(ranks);

	if (isMale && rank == "Queen"){
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

	return ({
		name: {
			prefix: randomFromList(prefixes),
			suffix: randomFromList(suffixes),
		},
		isMale: isMale,
		build: randomFromList(builds),
		rank: rankGender.rank,
		clan: rankGender.clan,
		prey: Math.random() > 0.5 ? "Yo Momma" : "Yo Poppa",
		skills: [randomFromList(skills), randomFromList(skills)],
		body: {
			color: randomFromList(colors),
			adjective: randomFromList(colorAdjectives),
			pattern: randomFromList(patterns),
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
    		    <p>NAME:{cat.name.prefix}{cat.name.suffix} </p>
    		    <p>Appearance: {cat.pelt.length}, {cat.pelt.texture}, {cat.body.adjective} {cat.body.color} fur with {cat.body.pattern}. </p>
    		    <p>Gender: { cat.isMale ? "Male" : "Female"} </p>
    		    <p>Favorite Prey: { cat.prey } </p>
    		    <p>Rank: {cat.rank}</p>
    		    <p>Build: {cat.build}</p>
    		    <p>Eyes: {cat.eyes.size} {cat.eyes.adjective} {cat.eyes.color}</p>
    		    <p>Pelt: {cat.pelt.texture} {cat.pelt.length}</p>
    		    <p>Color: {cat.body.adjective} {cat.body.color} </p>
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
