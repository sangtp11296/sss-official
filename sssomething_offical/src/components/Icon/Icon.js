import React from "react";
<<<<<<< HEAD
import * as FilledIcons from "../../images/icons/filled";
import * as OutlineIcons from "../../images/icons/outline";
=======
import * as FilledIcons from "../../icons/filled";
import * as OutlineIcons from "../../icons/outline";
>>>>>>> ac7a8f231ca90b55efeb5e76d082816a3b2c61e1

// export type IconName = keyof typeof FilledIcons | keyof typeof OutlineIcons;

// export interface IconProps {
//   name: IconName;
//   size?: number;
//   type?: "outline" | "filled";
//   style?: any;
//   color?: string;
//   onClick?: () => any;
//   onMouseEnter?: () => any;
//   onMouseLeave?: () => any;
// }



function Icon  ({

  name,
  size = 24,
  type = "filled",
  style = {},
  color = "black",
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) {


  const IconComponent =
    type === "filled" ? FilledIcons[name] : OutlineIcons[name];
  return (
    <IconComponent
      size={size}
      color={color}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};


export default Icon
