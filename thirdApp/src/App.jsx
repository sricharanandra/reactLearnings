import UserGreeting from "./components/userGreeting.jsx";
import List from "./components/List.jsx";
function App(){

    const fruits = [{id: 1, name: "apple", calories: 100}, 
                    {id: 2, name:"banana",calories: 145}, 
                    {id: 3, name:"pineapple",calories: 40}, 
                    {id: 4, name:"kiwi",calories: 20}, 
                    {id: 5, name:"mango",calories: 110}];
    
    const vegetables = [{id: 6, name: "potatoes", calories: 100}, 
                    {id: 7, name:"okra",calories: 145}, 
                    {id: 8, name:"Beans",calories: 40}, 
                    {id: 9, name:"tomatoes",calories: 20}, 
                    {id: 10, name:"carrots",calories: 110}];
    return(
        <>  
            <UserGreeting isLoggedIn={true} username="Sreus"/>
            <List items={fruits} category = "Fruits"/>
            <List items={vegetables} category="Vegetables"/>
        </>
    );
}

export default App;  