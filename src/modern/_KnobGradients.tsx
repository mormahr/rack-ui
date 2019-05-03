import * as React from "react"

export const _KnobGradients: React.FC = () => {
  return (
    <>
      <linearGradient
        id={"outer-knob-gradient"}
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#EEEEEE" />
        <stop offset="100%" stopColor="#D8D8D8" />
      </linearGradient>

      <linearGradient
        id={"inner-knob-gradient"}
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#C32AFF" />
        <stop offset="100%" stopColor="#9013FE" />
      </linearGradient>
    </>
  )
}
