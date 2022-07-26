import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Sejarah from './src/pages/sejarah';
import HTML from './src/pages/HTML/Html';
import CSS from './src/pages/CSS/Css';
import JavaScript from './src/pages/Javascript/Javascript';
import PengertianHTML from './src/pages/HTML/SummaryHtml';
import BasicHTML from './src/pages/HTML/BasicHtml';
import ElementsHTML from './src/pages/HTML/ElementsHTML';
import TagsHTML from './src/pages/HTML/TagsHTML';
import ImageHTML from './src/pages/HTML/ImageHTML';
import LinkHTML from './src/pages/HTML/LinkHtml';
import ListHTML from './src/pages/HTML/listHtml';
import FormHTML from './src/pages/HTML/formHtml';
import SemanticHTML from './src/pages/HTML/SemanticHTML';
import PengertianCSS from './src/pages/CSS/PengertianCss';
import CaraMenulisCSs from './src/pages/CSS/CaraMenulisCSs';
import SyntaxCSS from './src/pages/CSS/SyntaxCss';
import SelectorCSS from './src/pages/CSS/selectorCSS';
import ColorCSS from './src/pages/CSS/colorCSS';
import AlignCSS from './src/pages/CSS/AlignCSS';

const App = () => {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}
        options={{
          headerShown:false,
          animation:"none"
        }}
        />
        <Stack.Screen name='About' component={About}
        options={{
          headerShown:false,
          animation:"none"
        }}
        />
        {/* Page HTML */}
        <Stack.Screen name='Sejarah' component={Sejarah}
        options={{
          headerShown:false,
          animation:"none"
        }}
        />
        <Stack.Screen name='HTML' component={HTML}
        options={{
          headerShown:false,
          animation:"none"
        }}
        />
        <Stack.Screen name='PengertianHTML' component={PengertianHTML}
        options={{
          headerShown:false,
          animation:"none"
        }}
        />
        <Stack.Screen name='CSS' component={CSS}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='JavaScript' component={JavaScript}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='BasicHTML' component={BasicHTML}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='Elements' component={ElementsHTML}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='TagsHtml' component={TagsHTML}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='ImageHtml' component={ImageHTML}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='LinkHtml' component={LinkHTML}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='ListHtml' component={ListHTML}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='FormHTML' component={FormHTML}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='SemanticHTML' component={SemanticHTML}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        {/* End Page HTML */}
        {/* Page CSS */}
        <Stack.Screen name='PengertianCSS' component={PengertianCSS}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='CaraMenulisCss' component={CaraMenulisCSs}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='SyntaxCss' component={SyntaxCSS}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='SelectorCss' component={SelectorCSS}
         options={{
          headerShown:false,
          animation:"none"
          }}
        /> 
        <Stack.Screen name='ColorCss' component={ColorCSS}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
        <Stack.Screen name='AlignCSS' component={AlignCSS}
         options={{
          headerShown:false,
          animation:"none"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  
  )
}

export default App;