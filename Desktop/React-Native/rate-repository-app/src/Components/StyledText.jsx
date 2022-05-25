import {Text, StyleSheet} from 'react-native'
import theme from '../Theme'
const styles = StyleSheet.create({
    text:{
        fontWeight:theme.fontWeights.normal,
        fontFamily: theme.fonts.main,
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary
    },
    colorPrimary:{
        color: theme.colors.primary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    bold:{
        fontWeight: theme.fontWeights.bold,
    },
    
    subheading:{
        fontSize: theme.fontSizes.subheading,
    },
    textAlignCenter:{
        textAlign :'center'
    }
   
})
export default function StyledText({align, children, color, fontSize, fontWeight, style, ...restOfProps}){
    const textStyles =[
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style
    ]
    return(
        <Text style={textStyles}{...restOfProps}>
            {children}
        </Text>
    )
}