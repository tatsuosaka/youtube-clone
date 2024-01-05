"use client"
export default function Video(props:{thumbnail:string , profile:string}){
    function randomVideoName(){
            const videoNames = [
            "Epic Adventure Time",
            "Mystery Unboxing Extravaganza",
            "Ultimate DIY Hacks",
            "Mind-Blowing Science Experiments",
            "Hilarious Pet Antics",
            "Tech Gurus Unleashed",
            "Cooking with Chaos",
            "Behind the Scenes Madness",
            "Virtual Reality Odyssey",
            "Cosmic Conspiracy Theories",
            "Surreal Art Showcase",
            "Funky Dance Moves Tutorial",
            "Incredible Nature Timelapse",
            "Gaming Marathon Madness",
            "Historical Mysteries Unveiled",
            "Space Travel Vlog",
            "Retro Gaming Nostalgia",
            "Crazy Roller Coaster Reactions",
            "Fantasy Football Showdown",
            "Haunted Places Exploration",
            "Extreme Sports Fails Compilation",
            "Hidden Gem Book Reviews",
            "Futuristic Fashion Trends",
            "Anime World Unleashed",
            "Epic Movie Trailer Breakdown",
            "Wildlife Safari Adventure",
            "DIY Home Decor Magic",
            "Meme Review Extravaganza",
            "Exploring Abandoned Places",
            "Tech Gadgets of the Future",
            "Top 10 Mind-Blowing Facts",
            "Epic Drone Footage Compilation",
            "Artificial Intelligence Insights",
            "Delicious Street Food Tour",
            "Cute Baby Animals Compilation",
            "Hiking to Unknown Destinations",
            "VR Gaming in Another Dimension",
            "Traveling on a Budget Tips",
            "Photography Masterclass",
            "Unusual Ice Cream Flavors Taste Test",
            "Crazy Science Fiction Theories",
            "Motivational Speech Marathon",
            "Epic Time-Lapse Cityscape",
            "Virtual Concert Experience",
            "Famous Landmarks Challenge",
            "Gourmet Cooking on a Campfire",
            "Exploring Underwater Wonders",
            "DIY Musical Instruments Showcase",
            "Unboxing Rare Collectibles",
            "Epic Water Balloon Battle",
            "Crazy Hairstyle Transformation",
            "Legendary Card Tricks Revealed",
            "Fitness Challenge Chronicles",
            "Mindfulness Meditation Journey",
            "Epic Sandcastle Building Contest",
            "Virtual Art Gallery Tour",
            "Culinary Fusion Experiment",
            "Insane Parkour Stunts Compilation",
            "UFO Sightings Investigation",
            "Champion of Board Games Showdown",
            "Ghost Pepper Eating Challenge",
            "Epic Street Performances Compilation",
            "DIY Robot Building Tutorial",
            "Ridiculous Product Reviews",
            "Unbelievable Magic Show",
            "Epic Car Race Showdown",
            "Anime vs. Reality Comparison",
            "DIY Green Thumb Gardening",
            "Top 10 Conspiracy Theories",
            "Crazy Roller Skating Tricks",
            "Epic Yoga Poses Challenge",
            "Hilarious Comedy Skit Showcase",
            "Virtual Museum Tour",
            "Minecraft Building Extravaganza",
            "Epic Martial Arts Showdown",
            "Underground Music Scene Exploration",
            "Mind-Blowing Optical Illusions",
            "DIY Home Spa Day",
            "Haunted Forest Adventure",
            "Incredible Street Art Discovery",
            "World Record Attempt Marathon",
            "Tech Review Bonanza",
            "Epic Lip Sync Battle",
            "Gourmet Cupcake Baking Tutorial",
            "SpaceX Launch Reaction",
            "Unboxing High-Tech Gadgets",
            "Epic Waterfall Adventure",
            "Vintage Vinyl Record Collection",
            "Extreme BMX Tricks Compilation",
            "Top 10 Bizarre Foods Tasting",
            "Crazy Hair Dye Experiment",
            "Epic Robot Dance Party",
            "Behind the Scenes of a Music Video",
            "Virtual Reality Roller Coaster Ride",
            "Outdoor Survival Skills Training",
            "DIY Sustainable Living Tips",
            "Epic Street Food Cook-Off",
            "Mind-Blowing 3D Art Exhibition",
            "Surreal Gaming Experience",
            "Gardening in Outer Space",
            "Virtual Zoo Safari",
            "Unbelievable Impersonation Challenge",
            "DIY Recycled Art Project",
            "Epic Treasure Hunt Adventure",
            "Epic Book Club Meeting",
            "Daring Rock Climbing Expedition",
            "Anime Karaoke Night",
            "Virtual Reality Fitness Challenge",
            "Epic Fireworks Display",
            "Spectacular Drone Racing Showdown"
            ];
            const randomVideoName = videoNames[Math.floor(Math.random() * videoNames.length)]
            return randomVideoName;
    }

    function randomName(){
        
        const nameList = [
            'Time', 'Past', 'Future', 'Dev',
            'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
            'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
            'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
            'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
            'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
            'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
            'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
            'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
            'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
            'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
            'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
            'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
            'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
            'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
            'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
            'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
            'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
            'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
            'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
            'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
          ];
          const randomName = nameList[Math.floor(Math.random() * nameList.length)]
          return randomName;
    }

    function randomNumber(){
        const randomNumber = Math.floor(Math.random() * 999);
        return randomNumber.toString();
    }

    return(
        <div className="text-white">
            <img className="bg-zinc-600 hover:rounded-none transition-all rounded-xl w-full aspect-video object-cover cursor-pointer" src={props.thumbnail} alt="" />
            <div className="flex gap-2 align-top mt-2">
                <img src={props.profile} className=" mt-1 rounded-full object-cover transition-all bg-zinc-600 w-8 h-8" alt="" />
                <div>
                    <h4>{randomVideoName()}</h4>
                    <h5 className="cursor-pointer text-zinc-500 text-sm">{randomName()}{randomName()}</h5>
                    <h5 className="cursor-pointer text-zinc-500 text-sm">{randomNumber()} mil visualizações</h5>
                </div>
            
            </div>
        </div>
    )
}