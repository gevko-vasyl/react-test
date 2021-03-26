import MyFirstComponent from './components/MyFirstComponent'
// import MySecondComponent from './components/MySecondComponent'
import MyThirdComponent from './components/MyThirdComponent'

function App() {

  const user = {
    name:'vasa'
  }
  return (
    <div className="App">
      <h1>Hello from React</h1>
      
      <MyFirstComponent asdas={user}/>
      {/* <MySecondComponent user={user}/> */}
      <MyThirdComponent>
        <p>loremipsum dolor sit amet, consectet</p>
        <button>push me</button>
      </MyThirdComponent>
    </div>
  );
}

export default App;
