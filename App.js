import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BookTransactionScreen from './screens/BookTransactionSCreen';
import SearchScreen from './screens/SearchSCreen';
  
export default class App extends React.Component {  
  render(){  
    return (  
        
        <AppContainer />  
        
    );  
  }  
}  
  
const TabNavigator = createBottomTabNavigator({  
  Transaction: {screen: BookTransactionScreen},  
  Search: {screen: SearchScreen},  
},  
{  
  defaultNavigationOptions: ({navigation})=>({  
    tabBarIcon: ()=>{  
      const routeName = navigation.state.routeName;  
      console.log(routeName)  
      if(routeName === "Transaction"){  
        return(  
          <Image  
          source={require('./assets/book.png')}  
          style={{width:30, height:30}}  
        />  
        )  
          
      }  
      else if(routeName === "Search"){  
        return(  
          <Image  
          source={require('./assets/searchingbook.png')}  
          style={{width:30, height:30}}  
        />)  
          
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);
