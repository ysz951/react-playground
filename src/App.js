import React, { Component } from 'react';
import './App.css';
// import Messages from './Messages';
import TheDate from'./state/TheDate'
import Counter from './state/Counter'
import Tabs from './state/Tabs'
import RouletteGun from './state-drills/RouletteGun'
import Accordion from './state-drills/Accordion'
import AddItemForm from './shopping-list/AddItemForm';
import ShoppingList from './shopping-list/ShoppingList';

import DemonynApp from './demonymapp/demonymApp';

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const sectionsProp = [
  { title: 'First section',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { title: 'Second section',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
]

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };
  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }
  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  handleAddItem = (itemName) => {
    const newItems = [
      ...this.state.shoppingItems,
      { name: itemName, checked: false }
    ]
    this.setState({
      shoppingItems: newItems
    })
  }
  render() {
    return (
      <div className="App">
        <DemonynApp/>
      </div>
      // <> 
      //   <header>
      //     <h1>Shopping List</h1>
      //   </header>
      //   <main>
      //     <section>
      //       <AddItemForm 
      //         onAddItem={this.handleAddItem} 
      //       />
      //     </section>
      //     <section>
      //       <ShoppingList 
      //         items={this.state.shoppingItems}
      //         onDeleteItem={this.handleDeleteItem}
      //         onCheckItem={this.handleCheckItem} 
      //       />
      //     </section>
      //   </main>
      // </>
    )
  }
}


// class App extends Component {
//   render() {
//     return (
      
//       <div>
//         <Accordion sections = {sectionsProp}/>
//         <Tabs tabs={tabsProp} />
//         {/* <Counter step = {3}/>
//         <Tabs tabs={tabsProp}/>
//         <TheDate />
//         <RouletteGun /> */}
//       </div>
//     );
//   }
// }

export default App;
