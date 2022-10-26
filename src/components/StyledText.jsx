import React from 'react'
import {Text, StyleSheet} from 'react-native'
function StyledText({bold, primary, secondary, align, size, otherStyles, children}) {
  const TextStyles = [
    bold && styles.bold,
    primary && styles.primary,
    secondary && styles.secondary,
    size === 'lg' && styles.fontLg,
    size === 'md' && styles.fontMd,
    align === 'center' && styles.alignCenter,
    otherStyles
  ]
  return (
    <Text style={TextStyles}>
      {children}
    </Text>
  )
}
const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  primary: {
    color: '#C7F2A4'
  },
  secondary: {
    padding: 20,
    color: '#ccc'
  },
  fontLg: {
    fontSize: 50,
  },
  fontMd: {
    fontSize: 18,
  },
  alignCenter: {
    textAlign: 'center'
  }
})
export default StyledText