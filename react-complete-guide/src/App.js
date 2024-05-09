import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {id:'e1',
      title:"Toilet Paper",
      amount:94.12,
      date:new Date(2024,7,14)
    },
    {id:'e2',
      title:"New TV",
      amount:799.49,
      date:new Date(2024,2,12)
    },
    {id:'e3',
      title:"Car Insutance",
      amount:294.67,
      date:new Date(2024,2,28)
    }
  ]


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>    
    </div>
  );
}

export default App;