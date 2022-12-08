import bg1 from './images/assets/asset5.jpeg'
import bg2 from './images/assets/asset2.png'

import Navbar from "./components/navbar/navbar"

function App() {
  return (
    <div className="App">
      <Navbar />      
      <div>
        <div className="h-[100vh] bg-[image:url('../src/images/assets/asset5.jpeg')] bg-contain bg-no-repeat " >
          <h1>Engage Your audiences With digital outdoor advertising where they are most relaxed</h1>
          <h1>We are the Leading digital out-of-home advertising company in Nigeria </h1>
          <h1>Be where your customers are</h1>
          <h1>Reach over 1.5 million people across all platforms monthly </h1>
          
          <p>With our outstanding digital out-of-home advertising opportunities, you are directly in the face of your target audience.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
