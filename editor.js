import React,{useState,Component} from 'react'
import { View, Text,Button,StyleSheet,TextInput  } from 'react-native'

//componenet name always starts with Capital letter
// you can't change a font-size of a button


 const Editor = () =>{

  
    const [text, setText] = useState("Enter the text here!");
    const [isbold, setIsBold] = useState(false);
    const [isitalic, setIsItalic] = useState(false);
    const [isunderline, setIsUnderline] = useState(false);
    const [issmall, setIsSmall] = useState(false);
 
    const handleBold = ()=>{
        setIsBold(isbold=>!isbold);
    };
  const handleItalic = ()=>{
      setIsItalic(isitalic=>!isitalic);
  };
  const handleUnderline = () =>{
      setIsUnderline(isunderline=>!isunderline);
  };
  const handleFontSize = () =>{
    setIsSmall(issmall=>!issmall);
};
//main function that is handling all the calls
    const handleCall = (props)=>{
      if(props.name == 'Bold'){
        handleBold();
      }
      else if(props.name == 'Italic'){
        handleItalic();
      }
      else if(props.name == 'Underline'){
        handleUnderline();
      }
      else if(props.name == 'Font Size'){
        handleFontSize();
      }
    };
    
    const AddBtn = (props) =>{
        return (
            <View 
            style={{
            margin:3,
            marginTop:50,
            width:95,
            height:40,
            
        }}>

            <Button
              title={props.name} color='#841584'
               onPress= {()=>{handleCall(props)}}
              
            />
            </View>
        );
    
    };
    
   
  return (
      <View>
      <View style = {{flexDirection:'row'}}>
      <AddBtn name="Bold"/>
      <AddBtn name="Italic"/>
      <AddBtn name="Underline"/>
      <AddBtn name="Font Size"/>
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop:120,
          margin:5,
          fontWeight:isbold?'bold':'normal',
          fontSize:issmall?20:10,
          textDecorationLine:isunderline?'underline':'none',
          fontStyle:isitalic?'italic':'normal',
          
        }}
        
        onChangeText={text=>setText(text)}
        value={text}
        />
      
      </View>
    
    
  )
};
export default Editor;