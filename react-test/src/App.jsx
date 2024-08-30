import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Message from "./components/Message/message";



const App = () => {
  const isOnline = true;
  return (

      <>
      <Header />
      {isOnline && <h2>Welcome</h2>}
      <p>Super forum</p>
      <Message author = 'Andru' message = 'куплю айфон 15'/>
      <Message author = 'Anna' message = 'I love you'/>
      <Footer />
      </>
  );
};
export default App;
