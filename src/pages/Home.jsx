// TODO: Import necessary modules and data
import { songs } from '../data/songs.json'


const Home = () => {
  // TODO: Implement logic to display the list of songs

  
  return (
    <>
    <main>
    <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
      {/* TODO: Display the list of songs with links 
        */}
    <ul>
      {songs.map((song) => (
        <li>{song.title}</li>
      ))}  
    </ul>
    <div>{console.log(songs)}</div>
    </main>
    </>



  );
}

export default Home;
