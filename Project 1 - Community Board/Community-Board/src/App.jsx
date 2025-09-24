import './App.css';
import Card from './components/card';

const App = () => {

  return (
    <div className="App">
      <h1>Fast Food Favorites</h1>
      <h2>Welcome to the Community Board to discover fast food places near you!</h2>
      
      <div className="card-container">
        <Card 
          name="Arby's - “We Have the Meats” "
          logo="/src/assets/arbys-logo.png"
          altText="Arby's Logo"
        />
        <Card 
          name="Burger King - “You Rule” "
          logo="/src/assets/burgerking.jpg"
          altText="Burger King Logo"
        />
        <Card 
          name="Chick-fil-A - “Eat Mor Chikin”"
          logo="/src/assets/chickfila-logo.png"
          altText="Chick-fil-A Logo"
        />
        <Card 
          name="Chipotle - “Food with Integrity”"
          logo="/src/assets/Chipotle-logo.png"
          altText="Chipotle Logo"
        />
        <Card 
          name="Cook Out - “Always Fresh, Never Frozen”"
          logo="/src/assets/cookout-logo.jpg"
          altText="Cook Out Logo"
        />
        <Card 
          name="Dunkin' - “America Runs on Dunkin'” "
          logo="/src/assets/Dunkin-logo.png"
          altText="Dunkin' Logo"
        />
        <Card 
          name="McDonald's - “I'm Lovin' It”"
          logo="/src/assets/McDonalds-logo.png"
          altText="McDonald's Logo"
        />
        <Card 
          name="Starbucks - “To Inspire and Nurture the Human Spirit”"
          logo="/src/assets/starbucks-logo.png"
          altText="Starbucks Logo"
        />
        <Card 
          name="Taco Bell - “Live Más”"
          logo="/src/assets/taco-bell-logo.png"
          altText="Taco Bell Logo"
        />
        <Card 
          name="Wendy's - “Where's the Beef?”"
          logo="/src/assets/Wendy's-logo.png"
          altText="Wendy's Logo"
        />
        
      </div>

    </div>
  )
}

export default App
