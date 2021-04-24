import './App.css';
import Botones from './components/Botones';
import Footer from './components/Footer';
import Header from './components/Header';

const info = [
    {
      title: "Today's workout plan",
      text: "We're gonna do 3 fundamental exercises.",
    },
    {
      title: "First, 10 push-ups",
      text: "Do 10 reps. Remember about full range of motion. Don't rush.",
    },
    {
      title: "Next, 20 squats",
      text: "Squats are important. Remember to keep your back straight.",
    },
    {
      title: "Finally, 15 sit-ups",
      text: "Slightly bend your knees. Remember about full range of motion.",
    },
    {
      title: "Great job!",
      text: "You made it, have a nice day and see you next time!",
    }, 
    {
      title: "Parcial Full Stack II",
      text: "Jesus Hernandez",
    }
];


function App() {
  return (
    <div className="App">
        <Header />
        <Botones 
          info = {info}
        />
        <Footer />
    </div>
  );
}

export default App;
