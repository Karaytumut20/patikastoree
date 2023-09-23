import { StyleSheet,Dimensions } from "react-native";
export default StyleSheet.create({
    container:{
    
        backgroundColor: "#f5f5f5",
        margin: 7,
        borderRadius: 10,
        marginLeft: 0,
        width:180,        
    },

    image: {
        borderRadius: 10,
        width: 160,
        height: 180
        },
    
    title: {fontWeight: 'bold',
    width: 120,  
    },

    price:{
        color: '#808080',
        fontWeight: 'bold'
    },

    inStock:
    {
    color:"red",
    fontWeight: 'bold',
    fontSize: 12,
    },
   
    body:{
        marginTop: 10,
        marginBottom: 5,
        alignItems: "center",
    },
    top:{
        
    }
});     