import React, { Component } from 'react'
import './App.css';
import Teams from '../components/Teams/Teams';
import { render } from 'react-dom';
import Typed from 'react-typed';

export default class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    teams: [
      {
        name: 'Littleton Lilywhites',
        ranking: 1,
        description: 'Ah... Spencer Wilson - the prototypical, asymptomatic carrier of COVID19. A white, male news man with "nothing to hide". WRONG. Spencer and his virus have been long foreshadowed by books, movies, you name it - but nobody really believed we would end up here. 200,000 Americans dead, the brink of political collapse, and almost an entire year of wrecked social calendars. All it took was for Spencer to take one measly trip to Wuhan and feast on the coronabat. At least, for now, we have fantasy fooball. I never thought someone could one-up the serial pooper of Colorado Springs, but boy was I wrong. This is horrible! Like each strain of covid19, each player (outside of maybe his TE, but that is all) on this team is coming to fuck you (or more likely your grandpa) up. Mahomes? Kamara? Mostert? the list goes on, and I see not one player here with an ACL tear. When are we getting the Spencer vaccine?',
        id: 'fds'
      },
      {
        name: 'Josh Jacobs Jin gleHeimerSchmit',
        ranking: 2,
        description: 'AIDSSSS!!! Nobody wants it, errbody has it, and now we know who to thank. Garrett Lee, everyone! Am I not the only one who figured out that the "Cali Bros" thing is a huge fucking clue about this guys love of the anal sex? AIDS doesnt slap quite like the COVID, cause you have to do dirty boy deeds to contract it, but it still kills. Death Toll? 36 MILLION. Look out, because Josh A has it, Josh J has it, Aarons got it, and dont even get me started on whats going on inside the Bucs locker room. Bucs D/ST stands for Bucs Dick Smashin Tooties',
        id: 'fkdjso'
      },
      {
        name: 'B.B.s Bebes!',
        ranking: 3,
        description: 'Oh jeez, awesome, another "Cali Bro". But when you reach up Brandons tootie, it isnt AIDS you find, its THE BLACK DEATH. Brandon contracted the Black Death while working on the set of "Bill and Ted Face the Music". In what started as a quick side job to make some extra cash during pandemic times, Brandon ended up time traveling deep into the past in search of a medival rockstar to join the Wyld Stallions. Instead, he found himself toungin down a young jester who had contracted the disease from a flea, and soon enough he was full of the Death. B.B. passed the Death along to his Bebes who are now casually passing it to the rest of us. Brandons death warriors are almost all averaging double digit spread rates thus far, and Scam Newton has Broncos fans wondering "why the fuck didnt we...?"',
        id: '47328fd'
      },
      {
        name: 'No! This is Patrick!',
        ranking: 4,
        description: 'This team, distastefully named after its former player, is the proud owner of The Spanish Flu. On my trip to Mexico, with which you are all familiar enough, I was lucky enough to contract many diseases in my sexual escapades. One which I was not expecting to contract was the Spanish Flu. What started as explosive diarreah, vomiting, and near death has evolved into an excellend WMD for my fantasy team. Just as the Spanish Flu became my unexpected asset, so did the early pickup of the season, James Robinson. With Deshaun Watson looking to step his game up, Ekeler producing, and Michael Thomas coming back from injury, things are looking more promising here.',
        id: 'gh56'
      },
      {
        name: 'Cast Away',
        ranking: 5,
        description: 'Mark, having also recently stumbled far back in time while riding a VR rollercoaster called "The Time Masheen" at his local Costco (see Idiocracy), has recently contracted the Plague of Justinian, also known as the Plague of Justin Tucker. This is a plague that killed nearly 40% of Constantinoples population during the Byzantine Empire. Look out, we may soon see a similar number of NFL players infected with this monster of an illness. Unless Russell Wilson can keep up his current pace of 34ppg, I envision Mark sliding back in future weeks rankings.',
        id: 'lkkj4'
      },
      {
        name: 'PteroDaktyl Hunters',
        ranking: 6,
        description: 'Looking at Matts face, you could always tell something was off. Now I know that it was all the pain he was feeling from Smallpox. While the WHO claims that the only remaining smallpox samples are being held in facilities in the US and Russia, they are fully unaware of the Smallpox spewing beast that is Matt Tabor. Soon the world will know the dangers of coming in contact with any of his PteroDaktyl Hunters, and we will all be leaking puss through our own skin lesions. Yum. Anyone who can inflict this kind of pain must do it with a capable team, which is why Matt employed the likes of Kareem Hunt (has smallpox), Tyreek Hill (beats children), Hopkins (has smallpox), and Donkey Kong Metcalf (has huge gorilla cock).',
        id: 'lfdw0'
      },
      {
        name: 'Krickity Krakens',
        ranking: 7,
        description: 'I hear about Cholera just about as often as I talk to Sam, which is why they are a perfect match. Cholera causes diarreah so powerful it can kill you within just hours. Apparently it is common in less developed countries, and as far as I know, Sam may be living in one. The thing about diarreah, though, is that when you have it while running, it makes you go faster. Sam has running backs who are well aware of this and are taking advantage. Between Chris Carson, Jon Taylor, and Darrell Henderson, Sam can rely on his poop powered backs along with Lamar Jackson. Unfortunately, he looks pretty thin at WR and I think it will keep him from rising above his current spot in the rankings without making some kind of trade or waiver pick up.',
        id: 'fkd23'
      },
      {
        name: 'Negative Nancys',
        ranking: 8,
        description: 'I dont know if Rory, aka Ebola Boy, is bleeding from his nose and mouth because of Ebola or because of the constant stress of running the league. Either way its super gross. Rory is at the bottom of his division but I have him sitting at 8 because thats where he is in total points-for. Cant ever count this perennial threat out, but Im not sure which of his rostered players can step up and lead him to glory this year. Anyhow, enjoy your Ebola, boy.',
        id: 'bfjd98'
      },
      {
        name: 'Independent Black Ladies',
        ranking: 9,
        description: 'Brian got into backpacking this year, and unfortunately he ran into the wrong skeeter and got some Dengue Fever. If I were Brians life coach Id tell him to get back to safer inside activities like darts and drinking with the roomies. Just because you see people hiking on Instagram, it doesnt mean you have to do it, too. It seems Dengue has been more of a drag on Brians team so far. Nothing screams "play harder" like severe abdominal pain and breathing troubles. At least Brian is sitting on a winning record, but until CMC comes back, this team may be too banged up to keep raking in wins.',
        id: 'kldsaw34'
      },
      {
        name: 'Hursty Hursday',
        ranking: 10,
        description: 'Cry me a river, Woody has The Flu. Youve had it, your moms had it, your sista, brotha, even Michael Jordan had it and still balled out. If anything, the flu is just something we all made up to get out of work from time to time. And heres Woody, using it to get out of all the social activities we used to enjoy doing together. The flu is lame, and so is this teams record... however this team is fairly well staffed. It could be stronger at the RB position, but overall I see a pretty good balance of scoring across the board. Not sure what to expect from Hursty Hursday going forward.',
        id: '7893ddf'
      },
      {
        name: '3 Vom Tom',
        ranking: 11,
        description: 'Coming off a recent bout of Montezumas Revenge myself, I can really sympathize with Deric and his pal 3 Vom Tom. Its aggressive, its explosive, it kills the energy and its not conducive to playing good football. Its not even contageous, so you cant use it against your enemies. Montezumas is just plain useless, and its being proven right now by this abysmal squad.',
        id: 'fhjb8ew'
      },
      {
        name: 'JuliHoes in This House',
        ranking: 12,
        description: 'Will sits in dead last, but I think his team still has some legs to climb the board as the season goes on. Guys like Julio Jones and TY Hilton figure to improve. Unfortunately, we may be looking for someone to take over for Will, because he figures to die of a popular American disease, obesity, sometime really soon.',
        id: 'bvc746bf'
      },
    ],
    otherState: 'some other value',
    date: new Date().toLocaleString()
  };

  render() {

    return (
      <div className="App">
        <div className="Heading">
          <h1>HHS Fantasy: Week 3 Power Rankings</h1>
          <h2> 
            <Typed
              strings={['Infectious Disease Edition']}
              startDelay={1000}
              typeSpeed={40}
              backDelay={4000}
              backSpeed={20}
              loop
              showCursor={true}
            />
          </h2>
        </div>
       <ul>
       <Teams teams={this.state.teams}/>
       </ul>
      </div>
    )
  }
}

