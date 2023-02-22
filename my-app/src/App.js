
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './HomePage/HomePage';
import { Navbar } from './HomePage/Navbar';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar/>
        <HomePage/>
      </ChakraProvider>
        
      
    </div>
  );
}

export default App;
