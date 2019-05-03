import * as React from "react"
import { _KnobGradients } from "./_KnobGradients"
import { _KnobShadows } from "./_KnobShadows"
import { valueToRotation } from "../util/valueToRotation"
import { clamp } from "../util/clamp"
import { positionToRadius } from "../util/positionToRadius"

export type KnobParams = {
  value: number
  children: any
}

export const Knob: React.FC<KnobParams> = (props: KnobParams) => {
  const value = clamp(props.value)

  return (
    <svg viewBox="0 0 100 100">
      <defs>
        <_KnobGradients />
        <_KnobShadows />
      </defs>

      <g>
        {/* Label Circle */}
        <path
          d={`
            M ${positionToRadius(150, 40, 50).join(" ")}
            A 40 40 0 1 0 ${positionToRadius(210, 40, 50).join(" ")}
          `}
          fill={"none"}
          stroke={"#979797"}
          strokeWidth={"3px"}
        />
      </g>

      <g filter={"url(#knob-wide-shadow)"} width={100} height={100}>
        {/* Knob */}
        <circle cx={50} cy={50} r={25} fill={"url(#outer-knob-gradient)"} />
        <circle cx={50} cy={50} r={19} fill={"url(#inner-knob-gradient)"} />
        <rect
          transform={`rotate(${valueToRotation(value, 150)} 50 50)`}
          width={6}
          height={28}
          x={47}
          y={18}
          fill={"url(#inner-knob-gradient)"}
          filter={"url(#marker-shadow)"}
        />
      </g>
      <text x={50} y={90} textAnchor={"middle"} fontSize={8} fill={"#979797"}>
        {props.children}
      </text>
    </svg>
  )
}
