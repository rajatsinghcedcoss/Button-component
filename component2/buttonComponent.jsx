import { useState } from "react";


function Button2({children,Color,type,style,labelColor,disabled}){
  
    const commonStyles = {
        backgroundColor: Color,
        color: labelColor || "white"
      };
      const outlineStyles = {
        border: `1px solid ${Color}`,
        color: Color,
        backgroundColor: "white"
      };
      const dangerStyles = {
        border: `2px solid ${Color}`,
        color: Color,
        backgroundColor: "red"
      };
      const fullwidthStyles = {
        width:"100%",
        color: Color,
        backgroundColor:Color
      };
      const roundedStyle = {
        backgroundColor: Color,
        color: labelColor || "white",
        borderRadius: "25px"
      };
      const disableStyle={
        backgroundColor:Color,
        color: labelColor || "white",
        opacity: "0.5"
      }
      let btnStyle;
      switch (type) {
        case "rounded":
          btnStyle = roundedStyle;
          break;
        case "outline":
          btnStyle = outlineStyles;
          break;
          case "destructive":
          btnStyle = dangerStyles;
          break;
          case "full":
          btnStyle = fullwidthStyles;
          break;
        default:
          btnStyle = {
            backgroundColor:"teal",
            color: labelColor || "white"
          };
          break;
      }
return(
    <button
    style={disabled?{ ...commonStyles, ...btnStyle,...style,...disableStyle}:{ ...commonStyles, ...btnStyle,...style,}}
    type="button"
  >
    {children||"Button"}
  </button>
)
}export default Button2;